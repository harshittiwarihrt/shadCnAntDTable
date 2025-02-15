import { Table } from "@tanstack/react-table"
import _ from "lodash"
import { DensityState } from "./table.types"
import { useTanstackTable } from "./useTanstackTable"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHiddenColumns = (columns: any[]) => {
  // note returns an object with column id as key and boolean as value
  const hiddenColumns = columns.reduce((acc, column) => {
    return {
      ...acc,
      [column.id || column.accessorKey]: !column?.meta?.hidden,
    }
  }, {})
  return hiddenColumns
}
export const getRowIds = <T,>(table: Table<T>) =>
  _.keys(_.pickBy(table?.getState()?.rowSelection, _.identity))

export const getSelectedRowModel = <T,>(table: Table<T>) =>
  table?.getSelectedRowModel()?.flatRows?.map((row) => row.original)

export const getCellSize = (type: DensityState) => {
  switch (type) {
    case "small":
      return "py-2"
    case "middle":
      return "py-4"
    case "large":
      return "py-6"
    default:
      return "py-2"
  }
}

export const getBordered = (bordered: boolean) => {
  return bordered ? "border" : ""
}

export const handlePinColumn = (
  columnId: string,
  pinType: "left" | "right",
  table: Table<unknown>,
) => {
  const currentPinned = table.getState().columnPinning
  const newPinned = { ...currentPinned }

  if (pinType === "right") {
    // note Remove the column if it already exists in either pinned group
    newPinned.left = newPinned.left?.filter((id) => id !== columnId) || []
    newPinned.right = newPinned.right?.filter((id) => id !== columnId) || []

    // note Insert the new column before 'filter' or at the end if 'filter' isn't found
    const filterIndex = newPinned.right.findIndex((id) => id === "filter")
    if (filterIndex !== -1) {
      newPinned.right.splice(filterIndex, 0, columnId) // note Insert before 'filter'
    } else {
      newPinned.right.push(columnId) // note Add to the end
    }
  } else if (pinType === "left") {
    // note Remove from 'right' if it exists
    newPinned.right = newPinned.right?.filter((id) => id !== columnId) || []
    newPinned.left = [...(newPinned.left || []), columnId]
  }

  table.setColumnPinning(newPinned)
}

export const getExtraColumns = <T,>({
  rowSelection,
  rowExpandable,
}: {
  rowSelection?: unknown
  rowExpandable?: unknown
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { rowSelectionColumn, expandableColumn } = useTanstackTable<T>()

  const allExtraColumns = {
    rowSelection: rowSelectionColumn,
    rowExpandable: expandableColumn,
  }
  return Object.values(
    _.pickBy(allExtraColumns, (_, key) => {
      return (
        (rowSelection && key === "rowSelection") ||
        (rowExpandable && key === "rowExpandable")
      )
    }),
  )
}

export const isIndeterminate = (selected: string[], allOptions: string[]) => {
  return selected?.length > 0
    ? selected?.some((item) => allOptions?.includes(item))
    : false
}

export const isCheckAll = (selected: string[], allOptions: string[]) =>
  selected?.length === allOptions?.length && allOptions?.length > 0
export const getColumnAggregation = <T,>(rows: T[], accessor: string) => {
  const values = rows
    .map((row) => row[accessor as keyof typeof row])
    .filter(Boolean)

  return {
    sum: values.reduce((a, b) => a + (Number(b) || 0), 0),
    avg: values.length
      ? values.reduce((a, b) => a + (Number(b) || 0), 0) / values.length
      : 0,
    min: Math.min(...values.map((v) => Number(v) || 0)),
    max: Math.max(...values.map((v) => Number(v) || 0)),
    count: values.length,
  }
}
