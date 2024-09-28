"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  placeholder?: string;
  top?: boolean;
  bottom?: boolean;
}

export function UserTable<TData, TValue>({
  columns,
  data,
  placeholder,
  top,
  bottom,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageSize: 8,
    pageIndex: 0,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      columnFilters,
      pagination,
    },
  });

  const totalItems = table?.getFilteredRowModel()?.rows?.length || 0;

  const startIndex =
    table.getState().pagination.pageIndex *
      table.getState().pagination.pageSize +
    1;
  const endIndex = Math.min(
    startIndex + table.getState().pagination.pageSize - 1,
    totalItems
  );

  return (
    <div className="flex flex-col space-y-3 mt-[24px]">
      {top && (
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex w-[350px] items-center border px-2 rounded-md ">
            <Image
              src={"/DASHBOARDASSETS/ICONS/SEARCH.svg"}
              width={20}
              height={19.88}
              alt="searchIcon"
            />
            <Input
              placeholder={placeholder}
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 placeholder:text-[#C8C8C8]"
            />
          </div>
        </div>
      )}
      {bottom && (
        <div className="my-2">
          <div className="flex w-[350px] items-center border px-2 rounded-md">
            <Image
              src={"/DASHBOARDASSETS/ICONS/SEARCH.svg"}
              width={20}
              height={19.88}
              alt="searchIcon"
            />
            <Input
              placeholder={placeholder}
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 placeholder:text-[#C8C8C8]"
            />
          </div>
        </div>
      )}

      <div className="rounded-md border-0">
        <Table className="border-none">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="bg-gray-100 font-normal"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-[#808080] h-[32px]"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="mt-10">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="h-[56px]" key={cell.id}>
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
                  className="h-20 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-start space-x-2 px-4 py-4">
        <div>
          <p className="text-[14px]">
            {startIndex} - {endIndex} of {totalItems}
          </p>
        </div>
        <Button
          className="p-0 bg-transparent hover:bg-transparent"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Image
            src={"/icons/backbutton.svg"}
            height={20}
            width={20}
            alt="backbutton"
          />
        </Button>
        <Button
          className="p-0 bg-transparent hover:bg-transparent"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <Image
            src={"/icons/forwardbutton.svg"}
            height={20}
            width={20}
            alt="forwardbutton"
          />
        </Button>
      </div>
    </div>
  );
}
