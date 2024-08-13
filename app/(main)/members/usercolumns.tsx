"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export type User = {
  name: string;
  country: any;
  subscription: string;
  date: string;
  status: string;
  profile?: string;
  role?: string;
  members: string;
  portfolio: string;
  email: string;
  phone: string;
  interested: string;
  campaigns: string;
  investors: string;
  Verfication: string;
};

export const columns: ColumnDef<any>[] = [
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
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "subscription",
    header: "Subscription type",
  },
  {
    accessorKey: "date",
    header: "Date joined",
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
    accessorKey: "profile",
    header: "",
    cell: ({ row }) => {
      const profile = row.original;

      return (
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <p className="text-[#7E2D02] font-semibold cursor-pointer">
                {row.getValue("profile")}
              </p>
            </SheetTrigger>
            <SheetContent className="flex flex-col space-y-4">
              <SheetHeader>
                <SheetTitle>User Details</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      className="object-contain"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold">{profile.name}</p>
                    <p className="text-[#808080] text-sm">{profile.role}</p>
                  </div>
                </div>

                <div className="flex justify-between border rounded-md p-3">
                  <div className="flex border-r grow  flex-col space-y-1">
                    <p className="text-[#808080] text-sm">Members in forum</p>
                    <h2 className="font-semibold text-lg">{profile.members}</h2>
                  </div>
                  <div className="flex flex-col space-y-1 grow justify-end">
                    <p className="text-[#808080] text-sm flex justify-end">
                      Post in portfolio
                    </p>
                    <h2 className="font-semibold text-lg flex justify-end">
                      {profile.portfolio}
                    </h2>
                  </div>
                </div>
                <p className="font-semibold text-sm">Personal Info</p>

                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-sm text-[#808080]">Full Name</p>
                  <p className="text-sm">{profile.name}</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-sm text-[#808080]">Email</p>
                  <p className="text-sm">{profile.email}</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-sm text-[#808080]">Phone Number</p>
                  <p className="text-sm">{profile.phone}</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-sm text-[#808080]">Country</p>
                  <p className="text-sm">{profile.country}</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-sm text-[#808080] line-clamp-2">
                    Date Joined
                  </p>
                  <p className="text-sm">{profile.date}</p>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    className="w-full bg-[#2BAC47] text-white"
                    type="submit"
                  >
                    Activate Account
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      );
    },
  },
];
