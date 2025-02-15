/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-comments/disallowComments */
import React from "react";
import {
  Cell,
  Column,
  flexRender,
  Header,
  Row,
  Table,
} from "@tanstack/react-table";
import { Flex, Skeleton } from "antd";
import {
  ShadcnTable,
  ShadcnTableBody,
  ShadcnTableCell,
  ShadcnTableFooter,
  ShadcnTableHead,
  ShadcnTableHeader,
  ShadcnTableRow,
} from "../../customIntegration/ui/table";
import {
  FilterDropDown,
  SortableHeader,
  TanstackTableEmpty,
} from "./tableComponents";
import {
  CSSProperties,
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { EText } from "../../common";
import { useAppTheme } from "~/theme";
import { getBordered, getCellSize } from "./tableUtils";
import { GetComponentProps, ProForm } from "@ant-design/pro-components";
import { useForm } from "antd/es/form/Form";
import "./table.css";
import { TableInput, TableInputFieldTypes } from "./tableInput";
import { CustomTable } from "./table.types";

export interface InternalTableProps<T> {
  table: Table<T>;
  loading?: boolean;
  tableLoadingRowCount?: string | number;
  bordered?: boolean;
  onRow?: GetComponentProps<T>;
  // pagination?: boolean
  // virtual?: boolean
}

const getCommonPinningStyles = (
  column: Column<any>,
  isRow: boolean
): CSSProperties => {
  // note : https://github.com/TanStack/table/issues/5397 pinned group header issue

  const isPinned = column.getIsPinned();

  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  const leftValue =
    column.columns.length > 0
      ? `${column.columns[0]?.getStart("left")}px`
      : `${column.getStart("left")}px`;
  const rightValue =
    column.columns.length > 0
      ? `${column.columns[column.columns.length - 1]?.getAfter("right")}px`
      : `${column.getAfter("right")}px`;

  return {
    boxShadow: isLastLeftPinnedColumn
      ? "-4px 0 4px -4px gray inset"
      : isFirstRightPinnedColumn
      ? "4px 0 4px -4px gray inset"
      : undefined,
    left: isPinned === "left" ? leftValue : undefined,
    right: isPinned === "right" ? rightValue : undefined,

    // left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    // right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    opacity: 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    backgroundColor: isPinned ? (isRow ? "white" : "#F9FAFB") : undefined,
    zIndex: isPinned ? 1 : 0,
  };
};

// note https://muhimasri.com/blogs/react-editable-table/

export const InternalTable = <T,>({
  table,
  loading,
  tableLoadingRowCount = 15,
  bordered = false,
  onRow,
}: InternalTableProps<T>) => {
  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: Record<string, number> = {};
    for (let i = 0; i < headers.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
      const header = headers[i]!;
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  const parentRef = useRef<HTMLTableElement>(null);

  // const rowVirtualizer = useVirtualizer({
  //   count: table.getRowModel().rows.length,
  //   getScrollElement: () => {
  //     return parentRef.current
  //   },
  //   debug: true,
  //   estimateSize: () => 50, // Default height
  //   // note measure dynamic row height, except in firefox because it measures table border height incorrectly
  //   overscan: 15,
  // })
  //  const { getVirtualItems, getTotalSize } = rowVirtualizer

  return (
    <ShadcnTable
      className="table-auto w-full"
      style={{
        ...columnSizeVars,
        minWidth: table.getTotalSize(),
      }}
      ref={parentRef}
    >
      {/* note TABLE HEADER */}

      <ShadcnTableHeader>
        {table?.getHeaderGroups()?.map((headerGroup) => {
          return (
            <ShadcnTableRow key={headerGroup.id}>
              {headerGroup?.headers?.map((header) => {
                return (
                  <ShadcnTableHead
                    colSpan={header?.colSpan}
                    key={header.id}
                    style={{
                      ...getCommonPinningStyles(header.column, false),
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    }}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {header?.isPlaceholder ? null : (
                      <div className="flex items-center justify-between font-bold w-full">
                        <Flex
                          gap={16}
                          flex={1}
                          align="center"
                          justify={
                            header.subHeaders.length > 0
                              ? "center"
                              : "space-between"
                          }
                        >
                          <EText
                            fontWeight="600"
                            fontSize="14px"
                            className="text-center font-medium w-max"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </EText>

                          <Flex gap={2}>
                            {header.column.getCanSort() && (
                              <SortableHeader
                                header={header as Header<unknown, unknown>}
                              />
                            )}

                            {header.column.getCanFilter() ? (
                              <FilterDropDown
                                key="filter"
                                column={
                                  header.column as Column<unknown, unknown>
                                }
                              />
                            ) : null}
                          </Flex>
                        </Flex>
                        {header.column.getCanResize() && (
                          <div
                            className="absolute right-0 top-0 bottom-0 w-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ResizeHandle header={header} />
                          </div>
                        )}
                      </div>
                    )}
                  </ShadcnTableHead>
                );
              })}
            </ShadcnTableRow>
          );
        })}
      </ShadcnTableHeader>

      {/* note TABLE BODY */}
      {/* When resizing any column we will render this special memoized version of our table body */}
      {table.getState().columnSizingInfo.isResizingColumn ? (
        <MemoizedTableBody table={table} />
      ) : (
        <ShadcnTableBody className={`p-0 ${getBordered(bordered)}`}>
          {table?.getRowModel()?.rows?.map((row: Row<any>) => {
            return (
              <EditableRow
                index={row.id}
                key={row.id}
                row={row}
                onRow={onRow}
                table={table}
                bordered={bordered}
              />
            );
          })}
        </ShadcnTableBody>
      )}

      {/* note Table Footer */}
      {table
        .getFlatHeaders()
        ?.flatMap((header) => header?.column?.columnDef?.footer)
        .filter(Boolean).length > 0 && (
        <ShadcnTableFooter>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <ShadcnTableRow key={footerGroup.id}>
                {footerGroup.headers?.map((header) => {
                  return (
                    <ShadcnTableHead key={header.id}>
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column?.columnDef?.footer,
                            header?.getContext()
                          )}
                    </ShadcnTableHead>
                  );
                })}
              </ShadcnTableRow>
            );
          })}
        </ShadcnTableFooter>
      )}

      {/* note TABLE LOADING STATE */}
      {loading &&
        [...Array(tableLoadingRowCount)]
          .map((_, index) => ({
            key: `key${index}`,
          }))
          ?.map((item) => {
            return (
              <ShadcnTableRow key={item.key}>
                {table?.getAllColumns()?.map((column) => {
                  return (
                    <ShadcnTableCell className="p-3" key={column.id}>
                      <Skeleton active title paragraph={false} />
                    </ShadcnTableCell>
                  );
                })}
              </ShadcnTableRow>
            );
          })}

      {/* note TABLE EMPTY STATE */}
      {!loading && table?.getRowCount() === 0 && (
        <ShadcnTableRow>
          <ShadcnTableCell
            colSpan={12}
            className="h-24 text-center text-gray-500"
          >
            <TanstackTableEmpty />
          </ShadcnTableCell>
        </ShadcnTableRow>
      )}
    </ShadcnTable>
  );
};

interface TableBodyProps<T> extends InternalTableProps<T> {
  table: Table<T>;
  data?: any[];
  totalSize?: number;
}

export const TableBody = <T,>({
  table,
  bordered,
  onRow,
}: TableBodyProps<T>) => {
  const token = useAppTheme();

  return (
    <ShadcnTableBody className={`p-0 ${bordered}`}>
      {table?.getRowModel().rows.map((row: Record<string, any>) => {
        return (
          <ShadcnTableRow
            key={row.id}
            style={{
              width: "100%",
              backgroundColor: row.getIsSelected() ? token.primary1 : undefined,
              borderBottom: `1px solid ${token.primary1}`,
            }}
          >
            {row
              .getVisibleCells()
              .map((cell: Cell<T, Record<string, string>>) => {
                return (
                  <Fragment key={cell?.row?.id}>
                    <EditableRow
                      index={cell?.row?.id}
                      row={cell?.row}
                      onRow={onRow}
                      table={table}
                      bordered={bordered}
                    />
                    {/* <ProForm
                      key={index}
                      submitter={false}
                      form={form}
                      onFinish={async (value) => {
                        console.log("value", value)
                      }}
                      component={false}
                    >
                      <ShadcnTableRow
                        tabIndex={0}
                        key={row?.id}
                        {...onRow?.(row.original, row?.id as unknown as number)}
                        onFocusCapture={(e) => {
                          onRow?.(
                            row.original,
                            row?.id as unknown as number,
                          )?.onClick?.(e as any)
                        }}
                        style={{
                          // width: "100%",
                          backgroundColor: row?.getIsSelected()
                            ? token.primary1
                            : undefined,
                          borderBottom: `1px solid ${token.primary1}`,
                        }}
                      >
                        {row?.getVisibleCells().map((cell) => {
                          return (
                            <MemoizedCell
                              key={cell.id}
                              cell={cell}
                              token={token}
                              table={table}
                              bordered={bordered}
                            />
                          )
                        })}{" "}
                      </ShadcnTableRow>
                    </ProForm> */}

                    {/* If the row is expanded, render the expanded UI as a separate row with a single cell that spans the width of the table */}
                    {row.getIsExpanded() && (
                      <ShadcnTableRow>
                        <ShadcnTableCell colSpan={row.getAllCells().length}>
                          The number of columns you wish to span for the
                          expanded data if it is not a row that shares the same
                          columns as the parent row // Your custom UI goes here
                        </ShadcnTableCell>
                      </ShadcnTableRow>
                    )}
                  </Fragment>
                );
                // return (
                //   <ShadcnTableCell
                //     style={{
                //       ...getCommonPinningStyles(cell.column, true),
                //       width: cell.column.getSize(),
                //     }}
                //     className={`${getCellSize(
                //       table.getState()?.density,
                //     )} ${bordered}`}
                //     key={cell.id}
                //   >
                //     <EText fontWeight="400" color={token.neutral9}>
                //       {flexRender(
                //         cell.column.columnDef.cell,
                //         cell.getContext(),
                //       )}
                //     </EText>
                //   </ShadcnTableCell>
                // )
              })}
          </ShadcnTableRow>
        );
      })}
    </ShadcnTableBody>
  );
};
export const VirtualTableBody = <T,>({
  data,
  table,
  bordered,
  totalSize = 0,
  onRow,
}: TableBodyProps<T>) => {
  const paddingTop = data && data?.length > 0 ? data[0].start || 0 : 0;
  const paddingBottom =
    data && data?.length > 0 ? totalSize - (data?.at(-1)?.end || 0) : 0;
  const [rowHeights, setRowHeights] = useState<number[]>([]);

  const measureRowHeight = useCallback(() => {
    const heights = data?.map(({ index }) => {
      const row = table.getRowModel().rows[index];
      const rowElement = document.getElementById(`row-${row?.id}`);
      return rowElement ? rowElement.getBoundingClientRect().height : 50; // Default height if measurement fails
    });
    setRowHeights(heights as number[]);
  }, [table, data]);

  useEffect(() => {
    measureRowHeight();
  }, [data, measureRowHeight]);

  console.count("body");

  return (
    <ShadcnTableBody
      style={{
        height: "400px",
        width: "100%",
        position: "relative",
      }}
      className={`p-0 ${bordered}`}
    >
      {paddingTop ? (
        <ShadcnTableRow
          style={{
            height: paddingTop,
          }}
        >
          <ShadcnTableCell colSpan={table.getFlatHeaders().length} />
        </ShadcnTableRow>
      ) : undefined}

      {data?.map(({ index, ...rest }: Record<string, number>) => {
        const row = table.getRowModel().rows[index];

        return (
          <Fragment key={index}>
            <EditableRow
              data={data}
              index={index}
              row={row}
              onRow={onRow}
              table={table}
              bordered={bordered}
              ref={rest.measureElement}
              height={rowHeights[index]}
            />
            {/* <ProForm
              key={index}
              submitter={false}
              form={form}
              onFinish={async (value) => {
                console.log("value", value)
              }}
              component={false}
            >
              <ShadcnTableRow
                tabIndex={0}
                key={row?.id}
                {...onRow?.(row.original, row?.id as unknown as number)}
                onFocusCapture={(e) => {
                  onRow?.(
                    row.original,
                    row?.id as unknown as number,
                  )?.onClick?.(e as any)
                }}
                style={{
                  // width: "100%",
                  backgroundColor: row?.getIsSelected()
                    ? token.primary1
                    : undefined,
                  borderBottom: `1px solid ${token.primary1}`,
                }}
              >
                {row?.getVisibleCells().map((cell) => {
                  return (
                    <MemoizedCell
                      key={cell.id}
                      cell={cell}
                      token={token}
                      table={table}
                      bordered={bordered}
                    />
                  )
                })}{" "}
              </ShadcnTableRow>
            </ProForm> */}

            {/* If the row is expanded, render the expanded UI as a separate row with a single cell that spans the width of the table */}
            {row.getIsExpanded() && (
              <ShadcnTableRow>
                <ShadcnTableCell colSpan={row.getAllCells().length}>
                  The number of columns you wish to span for the expanded data
                  if it is not a row that shares the same columns as the parent
                  row // Your custom UI goes here
                </ShadcnTableCell>
              </ShadcnTableRow>
            )}
          </Fragment>
        );
      })}

      {paddingBottom ? (
        <ShadcnTableRow
          style={{
            height: paddingBottom,
          }}
        >
          <ShadcnTableCell colSpan={table.getFlatHeaders().length} />
        </ShadcnTableRow>
      ) : undefined}
    </ShadcnTableBody>
  );
};

export const MemoizedTableBody = memo(TableBody) as typeof TableBody;

export const MemoizedCell: React.FC<{
  cell: Cell<any, any>;
  token: any;
  table: CustomTable<any>;
  bordered: any;
}> = memo(
  ({ cell, token, table, bordered }) => {
    // Track both editing state and value
    const [isEditing, setIsEditing] = useState(false);
    const [localValue, setLocalValue] = useState(cell.getValue());
    // Sync local value with cell value when not editing
    useEffect(() => {
      if (!isEditing) {
        setLocalValue(cell.getValue());
      }
    }, [cell.getValue(), isEditing]);

    const onValueChange = useCallback((e: any) => {
      const newValue = e?.target?.value ?? e;
      setLocalValue(newValue);
    }, []);

    const onBlur = useCallback(() => {
      setIsEditing(false);
      table.options.meta?.updateData?.(
        cell.row.index,
        cell.column.id,
        localValue
      );
    }, [cell.column.id, cell.row.index, localValue, table.options.meta]);

    if (!cell.column.columnDef?.meta?.editable) {
      return (
        <ShadcnTableCell
          style={{
            ...getCommonPinningStyles(cell.column, true),
            width: cell.column.getSize(),
            fontWeight: 400,
            color: token.neutral9,
          }}
          className={`${getCellSize(table.getState()?.density)} ${bordered}`}
          key={cell.id}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </ShadcnTableCell>
      );
    }

    return (
      <ShadcnTableCell
        style={{
          ...getCommonPinningStyles(cell.column, true),
          width: cell.column.getSize(),
          fontWeight: 400,
          color: token.neutral9,
        }}
        className={`${getCellSize(table.getState()?.density)} ${bordered}`}
        key={cell.id}
      >
        <TableInput
          value={localValue}
          onChange={onValueChange}
          onBlur={onBlur}
          onFocus={() => setIsEditing(true)}
          type={cell.column.columnDef?.meta?.valueType as TableInputFieldTypes}
          {...cell.column.columnDef?.meta?.inputItemProps?.(cell.row?.original)}
        />
      </ShadcnTableCell>
    );
  },
  (prev, next) => {
    return (
      prev.cell.getValue() === next.cell.getValue() &&
      prev.cell.row.index === next.cell.row.index
    );
  }
);
MemoizedCell.displayName = "MemoizedCell";

// Editable Row Component
export const EditableRow: React.FC<{
  index: any;
  row: Row<any>;
  onRow: any;
  table: Table<any>;
  bordered: any;
  data?: any[];
  ref?: any;
  height?: number;
}> = memo(
  ({ index, row, onRow, table, bordered }) => {
    const token = useAppTheme();
    const [form] = useForm();

    // Memoize row handlers
    const rowHandlers = useMemo(
      () => ({
        ...onRow?.(row.original, row?.id as unknown as number),
      }),
      [row.id, row.original, onRow]
    );

    return (
      <ProForm key={index} submitter={false} form={form} component={false}>
        <ShadcnTableRow
          {...rowHandlers}
          data-index={index} // note needed for dynamic row height measurement
          // tabIndex={0}
          key={row?.id}
          id={`row-${row.id}`}
          style={{
            width: "100%",
            backgroundColor: row?.getIsSelected() ? token.primary1 : undefined,
            borderBottom: `1px solid ${token.primary1}`,
          }}
        >
          {row?.getVisibleCells().map((cell: any) => {
            return (
              <MemoizedCell
                key={cell.id}
                cell={cell}
                token={token}
                table={table as CustomTable<any>}
                bordered={bordered}
              />
            );
          })}{" "}
        </ShadcnTableRow>
      </ProForm>
    );
  },
  (prev, next) => {
    // Custom comparison for row memoization
    return (
      prev.row.id === next.row.id &&
      prev.row.getIsSelected() === next.row.getIsSelected() &&
      prev.table.options.meta === next.table.options.meta
    );
  }
);
EditableRow.displayName = "EditableRow";

// Update ResizeHandle
const ResizeHandle = memo(({ header }: { header: any }) => (
  <div
    className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
    onMouseDown={(e) => {
      e.preventDefault();
      e.stopPropagation();
      const handler = header.getResizeHandler();
      handler(e);
    }}
    style={{
      transform: header.column.getIsResizing()
        ? `translateX(${
            header.getResizingOffset() * (header.column.getCanResize() ? 1 : 0)
          }px)`
        : undefined,
    }}
  />
));

ResizeHandle.displayName = "ResizeHandle";
