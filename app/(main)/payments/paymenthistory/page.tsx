"use client";
import { UserTable } from "@/components/UserTable";
import { paymentData } from "@/mock/row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PaymentHistory = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name",
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
      accessorKey: "type",
      header: "User type",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("type")}</p>
      ),
    },
    {
      accessorKey: "payment",
      header: "Payment type",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("payment")}</p>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#2BAC47]">{row.getValue("amount")}</p>
      ),
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("date")}</p>
      ),
    },
  ];

  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="text-2xl"> Payment history</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center space-x-10">
        <div className="space-y-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of donation
            </p>
          </p>
          <p className="text-[32px] font-Recoleta font-medium">$124.56m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of wallet top-up
            </p>
          </p>
          <p className="text-[32px] font-Recoleta font-medium">$567.3m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of subscription
            </p>
          </p>
          <p className="text-[32px] font-Recoleta font-medium">$89.278</p>
        </div>
      </div>
      <div>
        <UserTable
          top={true}
          placeholder="Search username, full name..."
          data={paymentData}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
