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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name of forum",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) =>
      row.getValue("status") === "Activated" ? (
        <div className="flex items-center space-x-1 border border-[#2BAC47] bg-green-100 text-xs font-semibold w-max rounded-xl py-1 px-2">
          <span>
            <Image
              src={"/icons/ActivateIcon.svg"}
              width={10}
              height={10}
              alt="activateIcon"
            />
          </span>
          <p>{row.getValue("status")}</p>
        </div>
      ) : (
        <div className="flex items-center space-x-1 border border-[#C83532] bg-red-100 text-xs font-semibold w-max rounded-xl py-1 px-2">
          <span>
            <Image
              src={"/icons/DeactivateIcon.svg"}
              width={10}
              height={10}
              alt="deactivateIcon"
            />
          </span>
          <p>{row.getValue("status")}</p>
        </div>
      ),
  },
  {
    accessorKey: "members",
    header: "No. of members",
  },
  {
    accessorKey: "admin",
    header: "Admin",
  },
  {
    accessorKey: "engagement",
    header: "Engagement",
    cell: ({ row }) => (
      <p className="flex items-center text-[#2BAC47] ">
        <span className="mr-2">
          <Image
            src={"/icons/engagementIcon.svg"}
            height={10}
            width={10}
            alt="engagementIcon"
          />
        </span>
        {row.getValue("engagement")}
      </p>
    ),
  },
  {
    accessorKey: "created",
    header: "Created date",
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
          <DropdownMenuContent align="end" className="space-y-2">
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <span className="flex items-center">
                    <Image
                      src={"/icons/viewmembers.svg"}
                      width={18}
                      height={13}
                      alt="viewmembers"
                      className="mr-2"
                    />
                    <p>View Members</p>
                  </span>
                </SheetTrigger>
                <SheetContent className="sm:max-w-[519px] overflow-y-auto scrollbar-hide">
                  <SheetHeader>
                    <SheetTitle className="mb-10">
                      Forum Members{" "}
                      <span className="text-[#808080]">(34,342)</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex  items-center border px-2 rounded-md ">
                      <SearchIcon color="#A4A4A4" />
                      <Input
                        placeholder="Search Member name.."
                        className="max-w-sm focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
                      />
                    </div>
                    <div className="flex justify-between items-center">
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
                          <p>Kristie Fell</p>
                          <p className="text-[#A4A4A4]">@KritieFell</p>
                        </div>
                      </div>
                      <button className="text-[#C83532]">Delete</button>
                    </div>
                  </div>
                  <SheetFooter></SheetFooter>
                </SheetContent>
              </Sheet>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/activateforum.svg"}
                  width={18}
                  height={13}
                  alt="activateforum"
                  className="mr-2"
                />
              </span>
              Activate Forum
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
