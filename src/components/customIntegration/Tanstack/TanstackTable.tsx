/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/display-name */
import React from "react";
import {
  ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  Table,
  useReactTable,
  VisibilityState,
  RowSelectionState,
} from "@tanstack/react-table";
import { useRequest, useSafeState, useUpdateEffect } from "ahooks";
import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { InternalTable } from "./InternalTable";
import {
  CustomTableMeta,
  PaginationState,
  RequestResponse,
  TableRef,
  TanstackTableProps,
} from "./table.types";
import {
  ColumnDropDown,
  TanstackTablePagination,
  TanstackTableRowSelection,
  TanstackToolbar,
} from "./tableComponents";
import {
  getExtraColumns,
  getHiddenColumns,
  getRowIds,
  getSelectedRowModel,
} from "./tableUtils";
import { ReloadOutlined } from "@ant-design/icons";
import { useAppTheme } from "~/theme";
import { useTanstackTable } from "./useTanstackTable";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { isArray } from "lodash";
dayjs.extend(isBetween);

const NoobTanstackTable = forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-types
  <T extends {}>(
    props: TanstackTableProps<T>,
    ref: ForwardedRef<TableRef | undefined>
  ) => {
    // fixme: show default selected rows while editing data on tables i.e manage state for rowSelection
    const {
      request,
      onRow,
      tableLoading,
      dataSource = undefined,
      columns,
      refreshDeps,
      toolbar,
      editable,
      tableProps,
      rowSelection,
      rowExpandable,
      density = "small",
      bordered = false,
      tableLoadingRowCount,
      paginationType = "pagination",
      pagination = {
        pageIndex: 0,
        pageSize: 5,
      },
      options = {
        reload: true,
        search: {
          autoFocus: true,
          placeholder: undefined,
        },
      },
      tableAlertOptionRender,
    } = props;

    const token = useAppTheme();
    const [rowData, setRowData] = useState<T[]>(dataSource ?? []);

    const { loading, refresh } = useRequest(
      request ?? (() => Promise.resolve({ data: [], total: 0, success: true })),
      {
        onSuccess: (response: RequestResponse<T>) => {
          if (dataSource) {
            setRowData(() => dataSource);
          } else {
            setRowData(() => response.data);
          }
        },
        defaultParams: [
          {
            pageSize: 10,
            current: 1,
          },
        ],
        onBefore() {
          if (rowData?.length === 0) {
            return true;
          } else {
            setRowData([]);
          }
        },
        refreshDeps,
      }
    );

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      ...getHiddenColumns(columns ?? []),
    });

    const [tablePagination, setTablePagination] = useState<PaginationState>({
      ...pagination,
    });

    const { indexColumn } = useTanstackTable<T>();

    const extraColumns = getExtraColumns<T>({ rowSelection, rowExpandable });
    const [rowSelectionState, setRowSelectionState] =
      useSafeState<RowSelectionState>({
        ...tableProps?.initialState?.rowSelection,
      });
    const [expanded, setExpanded] = useState<ExpandedState>({});

    const [selectionKey, setSelectionKey] = useState(0);

    const memoizedColumn = useMemo(() => {
      return [...extraColumns, indexColumn, ...(columns ?? [])];
    }, [columns, rowSelectionState]);

    const table = useReactTable({
      data: dataSource && dataSource?.length > 0 ? dataSource : rowData,
      defaultColumn: {
        minSize: 30,
        size: 150,
        maxSize: 500,
      },
      columns: memoizedColumn,
      columnResizeMode: "onEnd",
      enableColumnResizing: true,
      autoResetPageIndex: true,

      getCoreRowModel: getCoreRowModel(),
      getColumnCanGlobalFilter(column) {
        return column.getIsVisible();
      },
      ...tableProps,
      initialState: {
        ...tableProps?.initialState,
        columnPinning: {
          left: [
            "rowSelection",
            "index",
            ...(tableProps?.initialState?.columnPinning?.left ?? []),
          ],
          right: [
            "filter",
            ...(tableProps?.initialState?.columnPinning?.right ?? []),
          ],
        },
      },
      state: {
        ...tableProps?.state,
        pagination: tablePagination,
        columnVisibility,
        density,
        expanded,
        rowSelection: rowSelectionState,
      },
      enableMultiRowSelection:
        rowSelection?.selectionType && rowSelection.selectionType !== "radio",
      paginateExpandedRows: false,
      onExpandedChange: setExpanded,
      onRowSelectionChange: (newSelection) => {
        setRowSelectionState(newSelection);
        setSelectionKey((prev) => prev + 1);
        rowSelection?.onChange?.(
          Object.keys(newSelection).filter(
            (key) => newSelection[key as keyof typeof newSelection]
          ),
          getSelectedRowModel(table)
        );
      },
      filterFns: {
        ISODateFilter: (value, row, key) => {
          // note Get the date value from the row data
          const dateValue = value?.original?.[row];

          // note Return false if no date value or key
          if (!dateValue) return false;

          try {
            // note Parse the date value
            const rowDate = dayjs(dateValue);

            // note Return false if invalid date
            if (!rowDate.isValid()) return false;

            // note Handle date range filter
            if (isArray(key)) {
              const [startDate, endDate] = key;

              // note Return false if invalid range dates
              if (!startDate || !endDate) return false;

              // note Compare date within range (inclusive)
              return rowDate.isBetween(startDate, endDate, "day", "[]");
            }

            // note Handle single date filter
            if (key) {
              const filterDate = dayjs(key);

              // note Return false if invalid filter date
              if (!filterDate.isValid()) return false;

              // note Compare dates for equality (ignoring time)
              return (
                rowDate.format("YYYY-MM-DD") === filterDate.format("YYYY-MM-DD")
              );
            }

            return false;
          } catch (error) {
            console.error("Error in ISODateFilter:", error);
            return false;
          }
        },
        BooleanFn: (row, value, key) => {
          const isKeyFalse = key === "false";
          return row?.original?.[value] !== isKeyFalse;
        },
      },

      getRowCanExpand: () => true,
      onColumnVisibilityChange: setColumnVisibility,
      meta: {
        reload: refresh,
        updateData: (rowIndex, columnId, value) => {
          const data = dataSource ?? rowData;

          const editedRow = { ...data[rowIndex], [columnId]: value };
          const updateData = data?.map((row, index) => {
            if (index === rowIndex) {
              return {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
                ...data[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          });
          const res = { record: editedRow, recordList: updateData };
          setRowData(updateData);
          return editable?.onDataSourceChange(res);
        },
        rowSelection,

        rowExpandable,
      } satisfies CustomTableMeta,
      getPaginationRowModel:
        paginationType === "pagination" ? getPaginationRowModel() : undefined,

      /* todo / getSubRows: (row) => {
      //   return row.children
      // } */
      onPaginationChange: setTablePagination,
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getGroupedRowModel: getGroupedRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFacetedMinMaxValues: getFacetedMinMaxValues(),
    });

    // note update effect for row selections

    useUpdateEffect(() => {
      if (table?.getState()?.rowSelection) {
        rowSelection?.onChange(getRowIds(table), getSelectedRowModel(table));
      }
    }, [table?.getState()?.rowSelection]);

    // note update effect for row visibility on active key change
    useUpdateEffect(() => {
      setColumnVisibility(getHiddenColumns(columns ?? []));
    }, [toolbar?.menu?.activeKey]);

    // note Expose reload method
    useImperativeHandle(
      ref,
      () => ({
        reload: () => {
          refresh();
          table?.resetRowSelection();
        },
      }),
      [refresh]
    );

    const internalTableProps = {
      bordered,
      tableLoadingRowCount,
      onRow,
    };

    return (
      <>
        <div key={selectionKey}>
          {/* note toolbar */}
          <TanstackToolbar
            ref={ref}
            table={table as Table<unknown>}
            options={options}
            {...toolbar}
            actions={[
              ...(toolbar?.actions && Array.isArray(toolbar.actions)
                ? [...toolbar.actions]
                : []),
              options?.reload && (
                <div
                  className="cursor-pointer text-md"
                  onClick={() => refresh()}
                >
                  {options?.reloadIcon ? (
                    options.reloadIcon
                  ) : (
                    <ReloadOutlined
                      style={{
                        color: token.neutral10,
                      }}
                      key="refresh"
                    />
                  )}
                </div>
              ),
              <ColumnDropDown column={table} key="setting" />,
            ]}
            menu={{
              ...toolbar?.menu,
            }}
          />

          {/* note Row Selection */}
          {Object.keys(table?.getState()?.rowSelection).length > 0 &&
            rowSelection?.selectionType !== "radio" && (
              <TanstackTableRowSelection
                table={table}
                render={tableAlertOptionRender?.(
                  getRowIds(table),
                  getSelectedRowModel(table),
                  () => {
                    table.resetRowSelection();
                  }
                )}
              />
            )}

          {/* note Pagination */}
          {paginationType === "pagination" && (
            <TanstackTablePagination
              table={table}
              tableInstance={table?.getState()}
            />
          )}

          <div>
            {/* note Internal Table */}
            <InternalTable
              loading={loading || tableLoading}
              table={table}
              {...internalTableProps}
            />
          </div>
        </div>
      </>
    );
  }
) as <T>(
  props: TanstackTableProps<T> & { ref?: ForwardedRef<TableRef> }
) => any;

export { NoobTanstackTable };
