/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  OnChangeFn,
  RowData,
  Table,
  TableMeta,
  TableOptions,
  Updater,
  FilterFn,
} from "@tanstack/react-table";
import { BaseInputProps, TableInputFieldTypes } from "./tableInput";
import { ForwardedRef, RefObject } from "react";
import { TabsProps } from "antd";
import { InternalTableProps } from "./InternalTable";
import { ProFieldValueEnumType } from "@ant-design/pro-components";
import { MenuItemType } from "antd/es/menu/interface";

type FilterVariantOptions =
  | "search"
  | "select"
  | "range"
  | "multi-select"
  | "date"
  | "date-range";

export type GetComponentProps<DataType> = (
  data: DataType,
  index?: number
) => React.HTMLAttributes<any> & React.TdHTMLAttributes<any>;

export interface TableEditableCellProps extends Record<string, any> {
  valueType?: TableInputFieldTypes;
  inputItemProps?: BaseInputProps;
}

export interface RequestResponse<T> {
  data: T[];
  total: number;
  success: boolean;
}

export interface DataProps {
  rowIndex: number;
  columnId: string;
  value: unknown;
}

export interface CustomTableMeta extends TableMeta<any> {
  reload: () => void;
  updateData: (rowIndex: number, columnId: string, value: any) => void;
  updateDensity?: (density: DensityState) => void;
  rowSelection?: {
    selectedRowKeys?: React.Key[];
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
    selections?: MenuItemType[] | true;
  };
  rowExpandable?: {
    onExpand: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  };
}

export interface CustomTableOptions<T> extends TableOptions<T> {
  meta?: CustomTableMeta;
}
export interface CustomTable<T> extends Omit<Table<T>, "options"> {
  options: CustomTableOptions<T>;
}

export interface TanstackToolbarProps {
  options?: OptionConfig;
  actions?: any[];
  menu?: ListToolBarHeaderMenuProps;
  title?: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  table?: Table<unknown>;
  ref?: ForwardedRef<TableRef | undefined>;
}
export interface Editable {
  onDataSourceChange: ({ record, recordList }: any) => void;
}

// note Define the properties you want to omit
type OmittedProps =
  | "data"
  | "columns"
  | "getFilteredRowModel"
  | "getSortedRowModel"
  | "getCoreRowModel"
  | "getGroupedRowModel"
  | "getExpandedRowModel"
  | "getFacetedRowModel"
  | "getFacetedUniqueValues"
  | "getFacetedMinMaxValues"
  | "getPaginationRowModel"
  | "filterFns";

// note Create a new type that omits the specified properties
export type OmittedTableProps<T> = Omit<TableOptions<T>, OmittedProps>;

export interface TableRef {
  reload: () => void;
  focus?: () => void;
  blur?: () => void;
}

export interface OptionConfig {
  reload?: boolean;
  search?:
    | boolean
    | {
        autoFocus?: boolean;
        placeholder?: string;
      };
  reloadIcon?: React.ReactNode;
}

type PaginationType = "virtual" | "pagination";

export type OmittedInternalTableProps<T> = Omit<InternalTableProps<T>, "table">;

export interface TanstackTableProps<T> extends OmittedInternalTableProps<T> {
  paginationType?: PaginationType;
  pagination?: PaginationState;
  displayName?: string;
  bordered?: boolean;
  ref?: RefObject<TableRef | null>;
  tableLoading?: boolean;
  request?: (params: Record<string, unknown>) => Promise<RequestResponse<T>>;
  dataSource?: T[];
  density?: DensityState;
  refreshDeps?: any[];
  toolbar?: TanstackToolbarProps;
  editable?: Editable;
  tableProps?: OmittedTableProps<T>;
  columns?: Array<ColumnDef<T, any>>;

  rowSelection?: {
    selectionType?: "checkbox" | "radio";
    selectedRowKeys?: React.Key[];
    onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
    selections?: MenuItemType[] | true;
  };
  rowExpandable?: {
    onExpand: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  };
  options?: OptionConfig;
  tableAlertOptionRender?: (
    selectedRowKeys: React.Key[],
    selectedRows: T[],
    onCleanSelected: () => void
  ) => React.ReactNode;
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export type DensityState = "small" | "middle" | "large" | undefined;
export interface DensityTableState {
  density: DensityState;
}

// note define types for our new feature's table options
export interface DensityOptions {
  enableDensity?: boolean;
  onDensityChange?: OnChangeFn<DensityState>;
}

// note Define types for our new feature's table APIs
export interface DensityInstance {
  setDensity: (updater: Updater<DensityState>) => void;
  toggleDensity: (value?: DensityState) => void;
}

export interface _CustomColumnMeta<T, J> {
  filterVariant?: FilterVariantOptions;
  editable?: boolean;
  valueType?: TableInputFieldTypes;
  inputItemProps?: (row: T) => BaseInputProps;
  valueEnum?: ProFieldValueEnumType | any;
  render?: (value: J, record: T, index: number) => React.ReactNode;
  hidden?: boolean;
}
export interface CustomColumnMeta<T, J>
  extends Omit<_CustomColumnMeta<T, J>, "render"> {}

declare module "@tanstack/react-table" {
  // note merge our new feature's state with the existing table state
  interface TableState extends DensityTableState {}
  interface ColumnMeta<TData extends RowData, TValue>
    extends CustomColumnMeta<TData, TValue> {}

  interface FilterFns {
    ISODateFilter: FilterFn<unknown>;
    BooleanFn: FilterFn<unknown>;
  }
}

export interface ListToolBarMenuItem {
  key: React.Key;
  label: React.ReactNode;
  disabled?: boolean;
}
export interface ListToolBarHeaderMenuProps {
  type?: "dropdown" | "tab";
  activeKey?: TabsProps["activeKey"];
  defaultActiveKey?: TabsProps["defaultActiveKey"];
  items?: TabsProps["items"];
  onChange?: (activeKey?: React.Key) => void;
  prefixCls?: string;
}
