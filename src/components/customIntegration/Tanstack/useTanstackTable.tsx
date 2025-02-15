/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { createColumnHelper, RowSelectionState } from "@tanstack/react-table";
import { IndeterminateCheckbox } from "./tableComponents";
import { EButton, EIcon } from "~/components/common";
import { useAppTheme } from "~/theme";
import { Flex, Radio } from "antd";
import { useState } from "react";
import { IndexColumn } from "@ant-design/pro-components";
import { MenuItemType } from "antd/es/menu/interface";

export const useTanstackTable = <T,>() => {
  const columnHelper = createColumnHelper<T>();

  const rowSelectionColumn = columnHelper.display({
    id: "rowSelection",
    enablePinning: false,
    enableHiding: false,

    header: ({ table }: any) => {
      const isArray = Array.isArray(
        table.options?.meta?.rowSelection?.selections
      );
      return table.options?.meta?.rowSelection?.selectionType !== "radio" ? (
        <Flex justify="flex-start" align="center">
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllPageRowsSelected(),
              indeterminate: table.getIsSomePageRowsSelected(),
              onChange: table.getToggleAllPageRowsSelectedHandler(),
            }}
          />

          {isArray || table.options?.meta?.rowSelection?.selections ? (
            <EButton
              type="text"
              icon={<EIcon icon={"material-symbols:add-rounded"} />}
            />
          ) : undefined}
        </Flex>
      ) : undefined;
    },
    cell: ({ row, getValue }) => {
      return row.getCanMultiSelect() ? (
        <div className="text-start">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
          {getValue<boolean>()}
        </div>
      ) : (
        <div className=" text-center">
          <Radio
            style={{
              marginInlineEnd: 0,
            }}
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      );
    },
    size: 8,
  });

  const expandableColumn = columnHelper.display({
    id: "expandable",
    enablePinning: false,
    enableHiding: false,
    header: "",
    size: 20,
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <button
          className="ml-8"
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: "pointer" },
          }}
        >
          {row.getIsExpanded() ? "👇" : "👉"}
        </button>
      ) : (
        "🔵"
      ),
  });

  const indexColumn = columnHelper.display({
    id: "index",
    enablePinning: false,
    enableHiding: false,

    header: "",
    size: 10,

    cell: ({ table, row }) => {
      const allRows = table.getFilteredRowModel().rows;
      const visualIndex = allRows.findIndex((r) => r.id === row.id) + 1;
      return <IndexColumn border>{visualIndex}</IndexColumn>;
    },
  });

  const token = useAppTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFilterColumn = (threeDot: (value: T) => any) => {
    return columnHelper.display({
      id: "filter",
      size: 40,
      header: "",
      cell: (info) => (
        <a onClick={(event) => event.stopPropagation()}>
          <EIcon icon={"bi:three-dots-vertical"} color={token.neutral7} />
        </a>
      ),
    });
  };

  const [rowSelectionState, setRowSelectionState] = useState<RowSelectionState>(
    {}
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  return {
    rowSelectionState,
    setRowSelectionState,
    columnHelper,
    rowSelectionColumn,
    getFilterColumn,
    expandableColumn,
    selectedRowKeys,
    setSelectedRowKeys,
    indexColumn,
  };
};
