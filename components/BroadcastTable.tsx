"use client";
import { Button } from "@/components/ui/button";
import {
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
  XIcon,
  EllipsisVertical,
} from "lucide-react";
import { UserTable } from "@/components/UserTable";
import { reportData } from "@/mock/row";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const rows = [
  {
    name: "Billy Gleason",
    title: "Raba-bag challenge",
    date: "22 Jun, 2024",
    days: "34d",
    modified: "1st Aug 2023",
  },
  {
    name: "Billy Gleason",
    title: "Raba-bag challenge",
    date: "22 Jun, 2024",
    days: "34d",
    modified: "1st Aug 2023",
  },
];

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
        </div>
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Broadcast Title",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("title")}</p>
    ),
  },

  {
    accessorKey: "date",
    header: "Created date",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("date")}</p>
    ),
  },
  {
    accessorKey: "days",
    header: "Days running",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("days")}</p>
    ),
  },
  {
    accessorKey: "modified",
    header: "Modified date",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("modified")}</p>
    ),
  },

  {
    accessorKey: "options",
    header: "",
    cell: ({ row }) => {
      return <EllipsisVertical className="h-4 w-4" />;
    },
  },
];

const BroadCastTable = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-medium text-2xl">Broadcast</h2>
          <p className="text-sm text-[#A8A8A8]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              router.push("/createBroadcast");
            }}
            className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95"
          >
            <span>
              <PlusIcon size={20} />
            </span>
            New Broadcast
          </Button>
        </div>
      </div>
      <div>
        <UserTable columns={columns} data={rows} />
      </div>
    </div>
  );
};

export default BroadCastTable;
