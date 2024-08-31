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
import { UserTable } from "@/components/UserTable";
import { data } from "@/mock/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Members = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={() => {
                  router.push("/members/posts");
                }}
              >
                <span>
                  <Image
                    src={"/icons/deletePost.svg"}
                    alt="viewIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>View Post</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openSheet}
              >
                <span>
                  <Image
                    src={"/icons/profileIcon.svg"}
                    alt="profileIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>View Profile</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openSheet}
              >
                <span>
                  <Image
                    src={"/icons/restorepost.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Activate Profile</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> Onboarded Users</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div>
        <Tabs defaultValue="all" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="all"
            >
              All (12,398)
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="investor"
            >
              Investor
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="creator"
            >
              Creator
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="fan"
            >
              Fan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <UserTable
              placeholder="Search username, full name..."
              top={true}
              data={data}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="investor">
            <UserTable
              placeholder="Search username, full name..."
              top={true}
              data={data}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="creator">
            <UserTable
              placeholder="Search username, full name..."
              top={true}
              data={data}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="fan">
            <UserTable
              placeholder="Search username, full name..."
              top={true}
              data={data}
              columns={columns}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
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
                <p className="text-lg font-semibold">name</p>
                <p className="text-[#808080] text-sm">role</p>
              </div>
            </div>

            <div className="flex justify-between border rounded-md p-3">
              <div className="flex border-r grow  flex-col space-y-1">
                <p className="text-[#808080] text-sm">Members in forum</p>
                <h2 className="font-semibold text-lg">members</h2>
              </div>
              <div className="flex flex-col space-y-1 grow justify-end">
                <p className="text-[#808080] text-sm flex justify-end">
                  Post in portfolio
                </p>
                <h2 className="font-semibold text-lg flex justify-end">
                  portfolio
                </h2>
              </div>
            </div>
            <p className="font-semibold text-sm">Personal Info</p>

            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#808080]">Full Name</p>
              <p className="text-sm">name</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#808080]">Email</p>
              <p className="text-sm">email</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#808080]">Phone Number</p>
              <p className="text-sm">phone</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#808080]">Country</p>
              <p className="text-sm">country</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#808080] line-clamp-2">Date Joined</p>
              <p className="text-sm">date</p>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full bg-[#2BAC47] text-white" type="submit">
                Activate Account
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Members;
