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
import Image from "next/image";

const rows = [
  {
    name: "Billy Gleason",
    hashtag: "Raba-bag challenge",
    entries: "1,433 entries",
    engagement: "103219",
    date: "22 Jun 2024",
    duration: "13 days",
  },
  {
    name: "Billy Gleason",
    hashtag: "#KSC",
    entries: "1,433 entries",
    engagement: "103219",
    date: "22 Jun 2024",
    duration: "13 days",
  },
  {
    name: "Billy Gleason",
    hashtag: "#DMW",
    entries: "1,433 entries",
    engagement: "103219",
    date: "22 Jun 2024",
    duration: "13 days",
  },
];

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Title",
    cell: ({ row }) => (
      <div>
        <p className="text-[14px] text-[#373737]">{row.getValue("name")}</p>
      </div>
    ),
  },
  {
    accessorKey: "hashtag",
    header: "Hashtag",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("hashtag")}</p>
    ),
  },
  {
    accessorKey: "entries",
    header: "Entries",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("entries")}</p>
    ),
  },
  {
    accessorKey: "engagement",
    header: "Engagement",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("engagement")}</p>
    ),
  },

  {
    accessorKey: "date",
    header: "Date Created",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("date")}</p>
    ),
  },
  {
    accessorKey: "duration",
    header: "Days running",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("duration")}</p>
    ),
  },
  {
    accessorKey: "options",
    header: "",
    cell: () => {
      return (
        <div className="flex items-center justify-end space-x-4">
          <Image
            src={"/icons/editbl.svg"}
            width={15.62}
            height={15.62}
            className="cursor-pointer"
            alt="editIcon"
          />
          <Image
            src={"/icons/deleteIconred.svg"}
            width={15.62}
            height={15.62}
            className="cursor-pointer"
            alt="deleteIconred"
          />
        </div>
      );
    },
  },
];

const Challenge = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-medium text-2xl">Challenge</h2>
          <p className="text-sm text-[#A8A8A8]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              router.push("/challenge/create");
            }}
            className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95"
          >
            <span>
              <PlusIcon size={20} />
            </span>
            Add Challenge
          </Button>
        </div>
      </div>
      <div>
        <UserTable
          top={true}
          placeholder="Search Challenge name"
          columns={columns}
          data={rows}
        />
      </div>
    </div>
  );
};

export default Challenge;
