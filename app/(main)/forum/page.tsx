"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { UserTable } from "@/components/UserTable";
import { data } from "@/mock/row";
import { EllipsisVertical } from "lucide-react";

const row = [
  {
    name: "Direct Group Developer",
    status: "Activated",
    members: "67,578,395",
    admin: "Danny Okeefe",
    engagement: "456,678",
    date: "22 Jun, 2024",
  },
  {
    name: "Direct Group Developer",
    status: "Deactivated",
    members: "67,578,395",
    admin: "Danny Okeefe",
    engagement: "456,678",
    date: "22 Jun, 2024",
  },
];

const Forum = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name of Forum",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("name")}</p>
      ),
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
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("members")}</p>
      ),
    },
    {
      accessorKey: "admin",
      header: "Admin",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("admin")}</p>
      ),
    },
    {
      accessorKey: "engagement",
      header: "Engagement",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#2BAC47]">
          <Image
            src={"/icons/engagementIcon.svg"}
            width={14}
            height={14}
            alt="engagementIcon"
          />
          {row.getValue("engagement")}
        </p>
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
      accessorKey: "options",
      header: "",
      cell: ({ row }) => {
        const profile = row.original;

        return <EllipsisVertical className="h-4 w-4" />;
      },
    },
  ];

  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> Forum</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div>
        <UserTable
          placeholder="Search Admin or Forum name"
          top={true}
          data={row}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Forum;
