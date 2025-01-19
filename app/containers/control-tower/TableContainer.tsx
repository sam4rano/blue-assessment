"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { CheckCircle, Clock, RefreshCcw, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type Payment = {
  id: string;
  status: "pending" | "processing" | "success" | "failed";
  requestId: number;
  type: "cash evacuation" | "cash supply";
  destination: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    status: "success",
    requestId: 1001,
    type: "cash evacuation",
    destination: "Bank A",
  },
  {
    id: "3u1reuv4",
    status: "success",
    requestId: 1002,
    type: "cash supply",
    destination: "Bank B",
  },
  {
    id: "derv1ws0",
    status: "processing",
    requestId: 1003,
    type: "cash evacuation",
    destination: "Bank C",
  },
  {
    id: "5kma53ae",
    status: "success",
    requestId: 1004,
    type: "cash supply",
    destination: "Bank D",
  },
  {
    id: "bhqecj4p",
    status: "failed",
    requestId: 1005,
    type: "cash evacuation",
    destination: "Bank E",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"];
      const statusConfig: Record<
        Payment["status"],
        { color: string; icon: React.JSX.Element; label: string }
      > = {
        success: {
          color: "text-green-600",
          icon: <CheckCircle className="w-4 h-4" />,
          label: "Success",
        },
        failed: {
          color: "text-red-600",
          icon: <XCircle className="w-4 h-4" />,
          label: "Failed",
        },
        pending: {
          color: "text-yellow-500",
          icon: <Clock className="w-4 h-4" />,
          label: "Pending",
        },
        processing: {
          color: "text-blue-500",
          icon: <RefreshCcw className="w-4 h-4" />,
          label: "Processing",
        },
      };

      return (
        <div className={`flex items-center gap-2 ${statusConfig[status].color}`}>
          {statusConfig[status].icon}
          <span className="capitalize">{statusConfig[status].label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "requestId",
    header: "REQUEST ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "destination",
    header: "Destination",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("destination")}</div>
    ),
  },
 
];

export function TableContainer() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full ">
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
