/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import {
  Checkbox,
  Flex,
  Image,
  Input,
  InputNumber,
  InputRef,
  Popover,
  Select,
  Space,
} from "antd";
import {
  EButton,
  EDividerWithNoStyle,
  EHeading,
  EPopover,
  ETab,
  EText,
  ETooltip,
  ProDatePicker,
  TableClearButton,
} from "~/components/common";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FilterOutlined,
  SearchOutlined,
  SettingOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Column, Header, Table, TableState } from "@tanstack/react-table";
import {
  ForwardedRef,
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppTheme } from "~/theme";
import {
  CustomColumnMeta,
  OptionConfig,
  TableEditableCellProps,
  TableRef,
  TanstackToolbarProps,
} from "./table.types";

import { useSortable } from "@dnd-kit/sortable";
import { TableInputFieldTypes, TableInput } from "./tableInput";
import { assets } from "~/assets/index";
import _, { isArray } from "lodash";
import { handlePinColumn, isCheckAll, isIndeterminate } from "./tableUtils";
import { DefaultOptionType } from "antd/es/select";
import { useHotkeys } from "react-hotkeys-hook";
import { IconZoomExclamation } from "@tabler/icons-react";
import { useSafeState } from "ahooks";
import Link from "antd/es/typography/Link";
import { PAGINATION_PAGE_SIZE_OPTIONS } from "./tableConstant";
import dayjs from "dayjs";
import { ProFormDateRangePicker } from "@ant-design/pro-components";

export const FilterDropDown = ({ column }: { column: Column<any> }) => {
  const { filterVariant = "search", valueEnum } = (column.columnDef.meta ??
    {}) as CustomColumnMeta<any, any>;

  const token = useAppTheme();
  const [value, setValue] = useSafeState<any>(undefined);
  const searchInputRef = useRef<InputRef>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const sortedUniqueValues = useMemo(
    () =>
      filterVariant === "range"
        ? []
        : // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
          Array.from(column.getFacetedUniqueValues().keys())
            .sort()
            .slice(0, 5000)
            .filter((item) => item),
    [column.getFacetedUniqueValues(), filterVariant, isDropdownVisible]
  );

  const items = [
    {
      key: "search",

      label: (
        <Input
          ref={searchInputRef}
          width={"sm"}
          type="text"
          onFocusCapture={(e) => {
            if (e.target.value) {
              searchInputRef.current?.select();
            }
          }}
          value={value}
          onChange={(e) => {
            setValue(e?.target?.value);
            _.debounce(() => column?.setFilterValue(e.target.value), 300)();
          }}
          placeholder={`Search...`}
          onClick={(e) => e.stopPropagation()}
        />
      ),
      disabled: filterVariant !== "search",
    },
    {
      key: "date",
      label: (
        <ProDatePicker
          ref={searchInputRef}
          width={"sm"}
          fieldProps={{
            open: isDropdownVisible,
            size: "middle",
            value,
            onClick: (e: any) => e.stopPropagation(),
            onChange: (e: any) => {
              if (e) {
                setValue(e);
                column?.setFilterValue(
                  dayjs(dayjs(e).toISOString()).format("YYYY-MM-DD")
                );
              } else {
                setValue(undefined);
                column?.setFilterValue(undefined);
              }
            },

            placeholder: "Select date",
          }}
        />
      ),
      disabled: filterVariant !== "date",
    },
    {
      key: "date-range",
      label: (
        <ProFormDateRangePicker
          fieldProps={{
            showNow: true,
            value,
            onClick: (e) => {
              e.stopPropagation();
              setIsDropdownVisible(true);
            },
            onChange: (e) => {
              if (e) {
                setValue(e);
                column?.setFilterValue([
                  dayjs(dayjs(e[0]).toISOString()).format("YYYY-MM-DD"),
                  dayjs(dayjs(e[1]).toISOString()).format("YYYY-MM-DD"),
                ]);
                setIsDropdownVisible(false);
              } else {
                setValue(undefined);
                column?.setFilterValue(undefined);
                setIsDropdownVisible(false);
              }
            },
          }}
        />
      ),
      disabled: filterVariant !== "date-range",
    },
    {
      key: "multi-select",
      onMouseEnter: () => {
        searchInputRef.current?.focus();
      },
      label: (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ width: "100%", padding: "4px" }}
        >
          <Checkbox
            className="mb-3"
            indeterminate={
              isArray(column?.getFilterValue())
                ? isIndeterminate(
                    column?.getFilterValue() as string[],
                    sortedUniqueValues
                  ) &&
                  !isCheckAll(
                    column?.getFilterValue() as string[],
                    sortedUniqueValues
                  )
                : false
            }
            checked={isCheckAll(
              column?.getFilterValue() as string[],
              sortedUniqueValues
            )}
            onChange={(e) => {
              if (e.target.checked) {
                column?.setFilterValue(sortedUniqueValues);
              } else {
                column?.setFilterValue(undefined);
              }
            }}
          >
            Select all items
          </Checkbox>
          <div className="mb-2">
            {sortedUniqueValues?.map((item) => {
              return (
                <div className="pl-5" key={item}>
                  <Checkbox
                    className="mb-1 hover:bg-gray-100 w-full rounded-sm"
                    style={{
                      color: token.neutral9,
                    }}
                    name={item}
                    checked={(column?.getFilterValue() as string[])?.includes(
                      item
                    )}
                    onChange={(e) => {
                      e.stopPropagation();
                      column?.setFilterValue((prev: any) => {
                        if (prev?.includes(item)) {
                          return prev?.filter((i: any) => i !== item);
                        } else {
                          return [...(prev ?? []), item];
                        }
                      });
                    }}
                  >
                    {item}
                  </Checkbox>
                </div>
              );
            })}
          </div>
          <EDividerWithNoStyle
            style={{
              marginInline: "-18px",
              marginTop: "0",
              marginBottom: 4,
              width: "calc(100% + 34px)",
            }}
          />
          <Link
            disabled={
              isArray(column.getFilterValue())
                ? (column.getFilterValue() as string[])?.length === 0
                : true
            }
            onClick={(e) => {
              e.stopPropagation();
              column.setFilterValue(undefined);
            }}
          >
            Reset
          </Link>
        </div>
      ),

      onClick: (e: any) => e.stopPropagation(),
      disabled: filterVariant !== "multi-select",
    },
    {
      key: "select",
      onMouseEnter: () => {
        searchInputRef.current?.focus();
      },

      label: (
        <select
          style={{
            width: "100%",
            padding: "4px",
          }}
          onChange={(e) => {
            column.setFilterValue(e.target.value);
            setValue(e.target.value);
          }}
          value={column.getFilterValue()?.toString()}
          onClick={(e) => e.stopPropagation()}
        >
          <option value="">All</option>
          {sortedUniqueValues.map((value) => (
            // note dynamically generated select options from faceted values feature
            <option value={value} key={value}>
              {valueEnum ? valueEnum?.[value]?.text : value}
            </option>
          ))}
        </select>
      ),
      disabled: filterVariant !== "select",
    },
  ].filter((item) => !item.disabled);

  return (
    <Popover content={items[0]?.label} title={undefined} trigger="click">
      {filterVariant === "search" ? (
        value ? (
          <IconZoomExclamation
            size={16}
            style={{
              color: token.info7,
            }}
          />
        ) : (
          <SearchOutlined
            onClick={(e) => {
              e.stopPropagation();
              searchInputRef.current?.focus();
            }}
            style={{
              marginRight: 2,
              marginLeft: 12,
              color: value ? `${token.StormyNight}` : `${token.neutral7}`,
            }}
          />
        )
      ) : (
        <FilterOutlined
          onClick={(e) => {
            e.stopPropagation();
            searchInputRef.current?.focus();
          }}
          style={{
            marginRight: 2,
            marginLeft: 12,
            fontWeight: 500,
            color:
              value || column.getFilterValue()
                ? `${token.info7}`
                : `${token.neutral7}`,
          }}
        />
      )}
    </Popover>
  );
};

interface ColumnDropDownProps<T> {
  column: Table<T>;
}

export const ColumnDropDown = <T,>(table: ColumnDropDownProps<T>) => {
  const token = useAppTheme();
  const defaultPinnedColumns = ["rowSelection", "filter"];
  const handleColumnVisibilityChange = (
    columnId: string,
    isVisible: boolean
  ) => {
    table.column.setColumnVisibility((prev) => ({
      ...prev,
      [columnId]: isVisible,
    }));
  };

  const allColumns = table?.column
    ?.getAllLeafColumns()
    ?.filter((column) => !defaultPinnedColumns.includes(column.id));

  const leftColumns = useMemo(() => {
    return allColumns?.filter((column) => column.getIsPinned() === "left");
  }, [table]);

  const rightColumns = useMemo(() => {
    return allColumns?.filter((column) => column.getIsPinned() === "right");
  }, [table]);

  const unPinnedColumns = useMemo(() => {
    return allColumns?.filter(
      (column) => !column.getIsPinned() && column?.getCanPin()
    );
  }, [table]);

  const Content = () => {
    return (
      <>
        {/* note columns pinned to left */}
        {leftColumns.length > 0 && (
          <Flex vertical gap={8} flex={1}>
            <EText>Fixed to Left</EText>

            {leftColumns.map((column: any) => {
              return (
                <>
                  <Flex key={column.id} gap={8}>
                    {/* note Checkbox to toggle column visibility */}
                    <Checkbox
                      checked={column.getIsVisible()}
                      disabled={!column.getCanHide()}
                      onChange={column.getToggleVisibilityHandler()}
                    />{" "}
                    {/* note Column Pinning */}
                    <Flex flex={1} justify="space-between">
                      <EText>{column.columnDef.header}</EText>
                      <Space.Compact>
                        {column.getIsPinned() === "left" ? (
                          <Flex>
                            <ETooltip title="Unpin">
                              <VerticalAlignMiddleOutlined
                                onClick={() => {
                                  column?.pin(false);
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                            <ETooltip title="Pin Right">
                              <VerticalAlignBottomOutlined
                                onClick={() => {
                                  column?.pin("right");
                                  handlePinColumn(
                                    column.id,
                                    "right",
                                    table.column as Table<unknown>
                                  );
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                          </Flex>
                        ) : (
                          <Flex>
                            <ETooltip title="Pin Left">
                              <VerticalAlignTopOutlined
                                onClick={() => {
                                  column?.pin("left");
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                            <ETooltip title="Unpin">
                              <VerticalAlignMiddleOutlined
                                onClick={() => {
                                  column?.pin(false);
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                          </Flex>
                        )}
                      </Space.Compact>
                    </Flex>
                  </Flex>
                </>
              );
            })}
          </Flex>
        )}

        {/* note  unpinned columns */}
        {unPinnedColumns?.length > 0 && (
          <Flex vertical gap={8} flex={1}>
            <EText>Unpinned</EText>

            {unPinnedColumns?.map((column: any) => {
              return (
                <Flex key={column.id} gap={8}>
                  {/* note Checkbox to toggle column visibility */}
                  <Checkbox
                    checked={column.getIsVisible()}
                    disabled={!column.getCanHide()}
                    onChange={(e) =>
                      handleColumnVisibilityChange(column.id, e.target.checked)
                    }
                  />{" "}
                  {/* note Column Pinning */}
                  <Flex flex={1} justify="space-between">
                    <EText>{column.columnDef.header}</EText>
                    <Space.Compact>
                      <ETooltip title="Pin Left">
                        <VerticalAlignTopOutlined
                          onClick={() => {
                            column?.pin("left");
                          }}
                          className="cursor-pointer"
                        />
                      </ETooltip>
                      <ETooltip title="Pin Right">
                        <VerticalAlignBottomOutlined
                          onClick={() => {
                            column?.pin("right");
                            handlePinColumn(
                              column.id,
                              "right",
                              table.column as Table<unknown>
                            );
                          }}
                          className="cursor-pointer"
                        />
                      </ETooltip>
                    </Space.Compact>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        )}

        {/* note columns pinned to right */}
        {rightColumns.length > 0 && (
          <Flex vertical gap={8} flex={1}>
            <EText>Fixed to right</EText>

            {rightColumns.map((column: any) => {
              return (
                <>
                  <Flex key={column.id} gap={8}>
                    {/* note Checkbox to toggle column visibility */}
                    <Checkbox
                      checked={column.getIsVisible()}
                      disabled={!column.getCanHide()}
                      onChange={column.getToggleVisibilityHandler()}
                    />{" "}
                    {/* note Column Pinning */}
                    <Flex flex={1} justify="space-between">
                      <EText>{column.columnDef.header}</EText>
                      <Space.Compact>
                        {column.getIsPinned() === "left" ? (
                          <Flex>
                            <ETooltip title="Pin Right">
                              <VerticalAlignBottomOutlined
                                onClick={() => {
                                  column?.pin("right");
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                            <ETooltip title="Unpin">
                              <VerticalAlignMiddleOutlined
                                onClick={() => {
                                  column?.pin(false);
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                          </Flex>
                        ) : (
                          <Flex>
                            <ETooltip title="Unpin">
                              <VerticalAlignMiddleOutlined
                                onClick={() => {
                                  column?.pin(false);
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                            <ETooltip title="Pin Left">
                              <VerticalAlignTopOutlined
                                onClick={() => {
                                  column?.pin("left");
                                }}
                                className="cursor-pointer"
                              />
                            </ETooltip>
                          </Flex>
                        )}
                      </Space.Compact>
                    </Flex>
                  </Flex>
                </>
              );
            })}
          </Flex>
        )}
      </>
    );
  };

  const Title = () => {
    return (
      <Flex gap={8}>
        <Checkbox
          checked={table?.column?.getIsAllColumnsVisible()}
          onChange={table?.column?.getToggleAllColumnsVisibilityHandler()}
        />

        <EText>Columns Display</EText>
      </Flex>
    );
  };
  return (
    <EPopover
      placement="bottomRight"
      content={<Content />}
      title={<Title />}
      trigger="click"
      arrow={false}
    >
      <SettingOutlined
        className="cursor-pointer text-md"
        style={{
          color: token.neutral10,
        }}
      />
    </EPopover>
  );
};

export const SortableHeader: React.FC<{
  header: Header<unknown, unknown>;
}> = ({ header }) => {
  const token = useAppTheme();
  const { column } = header;

  const getIconColor = (direction: "asc" | "desc") =>
    column.getIsSorted() === direction ? token.primary7 : token.neutral7;

  const sortingIcons = (
    <Flex className="cursor-pointer" vertical gap={0}>
      <CaretUpOutlined
        style={{
          color: getIconColor("asc"),
          fontSize: "12px",
          margin: "0",
        }}
      />
      <CaretDownOutlined
        style={{
          color: getIconColor("desc"),
          fontSize: "12px",
          margin: "0",
        }}
      />
    </Flex>
  );

  return <div className="font-bold">{sortingIcons}</div>;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const EditableCell: React.FC<TableEditableCellProps> = ({
  valueType = "text" as TableInputFieldTypes,
  getValue,
  row: { index },
  column: { id },
  table,
  inputItemProps = {},
  form,
}) => {
  const initialValue = inputItemProps?.initialValue ?? getValue();
  const searchInputRef = useRef<any>(null);
  const [value, setValue] = useSafeState(initialValue);

  // note When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  const handleKeyDown = useCallback((e: any) => {
    if (e.key.length === 1 && e.key !== "enter") {
      searchInputRef.current?.focus();
    }
  }, []);

  // note If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, form.getFieldError(id)[0]]);

  return (
    <ETooltip
      title={form.getFieldError(id)[0]}
      trigger={["hover", "focus", "click"]}
      forceRender
      autoAdjustOverflow
      placement="bottom"
    >
      <div key={id} tabIndex={0} onKeyDown={handleKeyDown}>
        <TableInput
          tooltip={form.getFieldError(id)[0]}
          name={id}
          {...inputItemProps}
          type={valueType as TableInputFieldTypes}
          size="middle"
          initialValue={value}
          hasFeedback
          fieldProps={{
            ref: searchInputRef,
            ...inputItemProps.fieldProps,
            size: "middle",
            value,
            onChange: (e: any) => {
              if (typeof e === "object") {
                setValue(e?.target?.value);
              } else {
                setValue(e);
              }
            },
            onBlur,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                onBlur();
              }
            },
            onFocusCapture: (e) => {
              if (e.target.value) {
                searchInputRef.current?.select();
              }
            },
          }}
          rules={inputItemProps?.rules}
        />
      </div>
    </ETooltip>
  );
};

export const SortableColumns: React.FC<{
  children: React.ReactNode;
  id: string | number;
}> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: `translateY(${transform?.y}px)`,
        transition,
        ...attributes,
      }}
      {...listeners}
    >
      {children}
    </div>
  );
};

interface CheckboxProps {
  indeterminate: boolean;
  className?: string;
  checked: boolean;
}

export const IndeterminateCheckbox: React.FC<CheckboxProps> = ({
  indeterminate,
  className = "",
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      size={200}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
};

export const TanstackTablePagination = <T,>({
  tableInstance,
  table,
}: {
  table: Table<T>;
  tableInstance: TableState;
}) => {
  const { pageSize, pageIndex } = tableInstance.pagination;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, table?.getRowCount());

  const token = useAppTheme();
  return (
    <Flex
      justify="space-between"
      align="center"
      gap={4}
      style={{ marginBottom: 16 }}
      wrap="wrap"
    >
      <div className="flex items-center gap-2 justify-end align-middle">
        <Flex
          align="center"
          justify="center"
          gap={3}
          wrap="wrap"
          style={{ width: "max-content", marginRight: 16 }}
        >
          <EText fontSize="12px" color={token.neutral7} fontWeight="500">
            Displaying
          </EText>

          {/* Note -  <EText fontWeight="500">{range[1] - range[0] + 1}</EText> */}
          <EText fontWeight="500">
            {startRow.toLocaleString()} - {endRow.toLocaleString()}
          </EText>
          <EText fontSize="12px" color={token.neutral7} fontWeight="500">
            out of
          </EText>
          <EText fontWeight="500">
            {table.getRowCount().toLocaleString()}{" "}
          </EText>
        </Flex>
        <span className="flex items-center gap-1">
          <EText fontSize="12px" color={token.neutral7}>
            Page
          </EText>
          <div>
            <EText fontWeight="500">
              {table.getState().pagination.pageIndex + 1}{" "}
            </EText>
            <EText fontSize="12px" color={token.neutral7}>
              of {""}
            </EText>
            <EText fontWeight="500">
              {table.getPageCount().toLocaleString()}
            </EText>
          </div>
        </span>

        <Select
          value={table.getState().pagination.pageSize.toString()}
          onChange={(e) => {
            table.setPageSize(Number(e));
          }}
          style={{ width: 120 }}
          size="small"
          options={PAGINATION_PAGE_SIZE_OPTIONS}
        />
      </div>

      <div className="flex items-center gap-2 justify-end">
        <ETooltip title={"Go to First page"}>
          <EButton
            size="small"
            style={{ fontWeight: 400 }}
            className="border rounded p-1 cursor-pointer"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            type="link"
          >
            {"<<"}
          </EButton>
        </ETooltip>
        <EButton
          size="small"
          style={{ fontWeight: 400, fontSize: 13 }}
          className="border rounded p-1 cursor-pointer"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </EButton>
        <EButton
          size="small"
          style={{ fontWeight: 400, fontSize: 13 }}
          className="border rounded p-1 cursor-pointer"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </EButton>
        <ETooltip title={"Go to last page"}>
          <EButton
            size="small"
            style={{ fontWeight: 400 }}
            className="border rounded p-1 cursor-pointer"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            type="link"
          >
            {">>"}
          </EButton>
        </ETooltip>

        <span className="flex items-center gap-1">
          <EText fontSize="12px" color={token.neutral7}>
            | Go to page:
          </EText>

          <InputNumber
            max={table.getPageCount()}
            min={1}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e ? Number(e) - 1 : 0;
              table.setPageIndex(page);
            }}
            size="small"
          />
        </span>
      </div>
    </Flex>
  );
};

export const TanstackTableEmpty = () => {
  const token = useAppTheme();
  return (
    <Flex
      justify="center"
      align="center"
      gap={41}
      vertical
      style={{ marginTop: 43 }}
    >
      {/* Note: Displaying the 'noDataImg' from the 'assets' module */}
      <Image
        src={assets.noDataImg}
        preview={false}
        style={{ width: 110, height: 110 }}
      />

      {/* Note: Displaying a heading indicating 'No data found' with specified styles */}
      <EHeading
        level={3}
        fontWeight="500"
        color={token.neutral7}
        style={{ marginLeft: 20 }}
      >
        No data found
      </EHeading>
    </Flex>
  );
};

export const TanstackToolbar = forwardRef(
  (props: TanstackToolbarProps, ref: ForwardedRef<TableRef | undefined>) => {
    const { actions, menu, options, subTitle, table, title } = props;
    const token = useAppTheme();
    const isMenuEmpty =
      Object.keys(menu || {}).length === 0 && menu?.constructor === Object;

    return (
      <>
        <Flex
          justify="space-between"
          flex={1}
          gap={6}
          wrap="wrap"
          style={{
            marginBlock: 16,
            padding: 16,
            backgroundColor: token.winterWhisper,
            borderRadius: 16,
          }}
        >
          <Flex justify="flex-start" gap={8} align="center" wrap="wrap">
            {isMenuEmpty && (title || subTitle) ? (
              <Flex vertical gap={2}>
                {typeof title === "string" ? (
                  <EHeading
                    style={{
                      marginBottom: 0,
                    }}
                    level={5}
                    fontWeight="500"
                    color={token.neutral7}
                  >
                    {title}
                  </EHeading>
                ) : (
                  title
                )}
                {typeof subTitle === "string" ? (
                  <EText color={token.neutral7}>{subTitle}</EText>
                ) : (
                  subTitle
                )}
              </Flex>
            ) : (
              <div />
            )}
            {isMenuEmpty && options?.search ? (
              <TanstackGlobalFilter
                ref={ref}
                table={table as Table<unknown>}
                options={options?.search}
              />
            ) : (
              <div />
            )}

            {menu?.type === "tab" && (
              <ETab
                type="line"
                size="small"
                tabBarStyle={{
                  borderBottom: "none",
                }}
                items={menu?.items}
                activeKey={menu?.activeKey}
                defaultActiveKey={menu?.defaultActiveKey}
                onChange={menu?.onChange}
              />
            )}
            {menu?.type === "dropdown" && (
              <Select
                options={
                  menu?.items?.map((item) => ({
                    label: item.label,
                    value: item.key,
                  })) as DefaultOptionType[]
                }
                value={menu?.activeKey}
                allowClear={false}
                defaultValue={menu?.defaultActiveKey}
                onChange={menu?.onChange}
                style={{ width: 200 }}
              />
            )}
          </Flex>

          <Flex justify="flex-end" align="center" gap={8} wrap="wrap">
            {!isMenuEmpty && options?.search ? (
              <TanstackGlobalFilter
                table={table as Table<unknown>}
                options={options?.search}
              />
            ) : undefined}
            {actions?.map((Action, index) => (
              <Fragment key={index}>{Action}</Fragment>
            ))}
          </Flex>
        </Flex>
      </>
    );
  }
) as any;

export const TanstackTableRowSelection: React.FC<{
  table: Table<any>;
  render?: React.ReactNode;
}> = ({ table, render }) => {
  const token = useAppTheme();
  const rowCount =
    Object?.keys(table.getState()?.rowSelection).filter(
      (key) => table.getState()?.rowSelection[key]
    ).length === table.getRowModel().rows.length &&
    Object?.keys(table.getState()?.rowSelection).filter(
      (key) => table.getState()?.rowSelection[key]
    ).length !== table.getRowCount();
  const selectedRowCount = Object?.values(
    table.getState()?.rowSelection
  ).filter((item) => item)?.length;

  return (
    <Flex
      justify="space-between"
      flex={1}
      wrap="wrap"
      gap={6}
      style={{
        marginBlock: 16,
        padding: 16,
        backgroundColor: token.winterWhisper,
        borderRadius: 16,
      }}
    >
      <Flex justify="flex-start" gap={8} align="center" wrap="wrap">
        {/* Note: Displaying the total number of items selected */}
        {rowCount ? (
          <>
            <EText fontWeight="500" color={token.neutral7}>
              All {selectedRowCount} items on this page are selected.
            </EText>
            <EButton
              type="link"
              onClick={() => {
                table.toggleAllRowsSelected();
              }}
            >
              Select all &nbsp;{table.getPreFilteredRowModel().rows.length}
              &nbsp; items in the table.
            </EButton>
          </>
        ) : (
          <EText fontWeight="500" color={token.neutral7}>
            {selectedRowCount} items selected
          </EText>
        )}
      </Flex>

      {
        // Note: Displaying the 'render' prop if it is passed

        render ? (
          <Flex justify="flex-end">{render}</Flex>
        ) : (
          <Flex justify="flex-end" align="center" gap={8} wrap="wrap">
            <Space size={"small"}>
              {render}
              <TableClearButton
                onClick={() => {
                  table.resetRowSelection();
                }}
                indicator={Object.keys(table.getState()?.rowSelection).length}
              />
            </Space>
          </Flex>
        )
      }
    </Flex>
  );
};

interface TanstackGlobalFilterProps {
  table: Table<unknown>;
  options?: OptionConfig["search"];
}

export const TanstackGlobalFilter = forwardRef<
  TableRef | undefined,
  TanstackGlobalFilterProps
>(({ table, options }: any, ref) => {
  const token = useAppTheme();
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef<InputRef>(null);

  useHotkeys("meta+f", (e) => {
    searchInputRef.current?.focus();
    e.preventDefault();
  });

  const { placeholder, autoFocus } = options;

  // note Use the forwarded ref to expose focus/blur methods
  useImperativeHandle(ref, () => ({
    reload: () => {
      table?.options.meta?.reload();
    },
    focus: () => {
      searchInputRef.current?.focus();
    },
    blur: () => {
      searchInputRef.current?.blur();
    },
  }));

  return (
    <Input
      autoFocus={autoFocus ?? true}
      ref={searchInputRef}
      style={{
        width: 200,
        borderRadius: 8,
        borderColor: token.neutral7,
        color: token.neutral7,
      }}
      onFocusCapture={(e) => {
        if (e.target.value) {
          searchInputRef.current?.select();
        }
      }}
      onBlur={() => {
        searchInputRef.current?.blur();
      }}
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
        _.debounce(() => table.setGlobalFilter(e.target.value), 500)();
      }}
      placeholder={placeholder || "Search..."}
      prefix={
        <SearchOutlined
          style={{
            color: token.neutral7,
            fontSize: 16,
          }}
        />
      }
    />
  );
});

// note Set the display name for the component
TanstackGlobalFilter.displayName = "TanstackGlobalFilter";
TanstackToolbar.displayName = "TanstackToolbar";
