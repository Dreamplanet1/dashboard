"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Creator name",
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
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "subscription",
    header: "Subscription type",
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
    accessorKey: "analytics",
    header: "",
    cell: ({ row }) => (
      <p className="text-[#7E2D02] font-semibold cursor-pointer">
        View Analytics
      </p>
    ),
  },
];
