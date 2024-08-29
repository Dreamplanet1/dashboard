"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, SearchIcon } from "lucide-react";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Creator",
    cell: ({ row }) => (
      <div className="flex items-center space-x-1">
        <Avatar>
          <AvatarImage
            className="object-contain"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>{row.getValue("name")}</p>
          <p className="text-[#A4A4A4]">@{row.getValue("name")}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("assignee")}</p>
    ),
  },
  {
    accessorKey: "role",
    header: "Assignee's Role",
    cell: ({ row }) => (
      <div className="flex items-center space-x-1 border  text-xs font-semibold w-max rounded-xl py-1 px-2">
        <span className="h-1 w-1 rounded-full bg-[#BF3100]"></span>
        <p>{row.getValue("role")}</p>
      </div>
    ),
  },

  {
    accessorKey: "number",
    header: "No. of Investor",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("number")}</p>
    ),
  },

  {
    accessorKey: "options",
    header: "",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/editaccess.svg"}
                  width={18}
                  height={13}
                  alt="editIcon"
                  className="mr-2"
                />
              </span>
              Edit Access
            </DropdownMenuItem>

            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/reportIcon.svg"}
                  width={18}
                  height={13}
                  alt="reportIcon"
                  className="mr-2"
                />
              </span>
              Create Report
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/removemember.svg"}
                  width={18}
                  height={13}
                  alt="removeIcon"
                  className="mr-2"
                />
              </span>
              Remove Member
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
