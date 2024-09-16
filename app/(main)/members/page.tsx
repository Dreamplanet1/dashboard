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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Members = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const closeButton = document.querySelector(
        "button.absolute.right-4.top-4"
      );

      if (closeButton) {
        closeButton.remove();
      }
    }, 0); // Delay of 0 ensures it happens after the render cycle

    return () => clearTimeout(timer);
  }, [isSheetOpen, setIsSheetOpen]);

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
            <DropdownMenuContent className="space-y-2" align="end">
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
        <Tabs defaultValue="all" className="space-y-7">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none px-0 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="all"
            >
              All (12,398)
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="investor"
            >
              Investor
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="creator"
            >
              Creator
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
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
        <SheetContent className="sm:max-w-[519px] overflow-y-auto scrollbar-hide">
          <SheetHeader>
            <SheetTitle className="flex justify-between">
              <p className="text-[#111810] font-medium text-[20px]">
                User Details
              </p>
              <Image
                src="/DASHBOARDASSETS/ICONS/CANCEL WITH FILL.svg"
                alt="cancelIcon"
                className="cursor-pointer transition-all active:scale-95 "
                onClick={() => {
                  setIsSheetOpen(false);
                }}
                width={26}
                height={26}
              />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            <div className="flex items-center space-x-[12px] mt-[40px] mb-[28px]">
              <Avatar>
                <AvatarImage
                  className="object-contain"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[20px] font-medium text-[#111810]">
                  Mack Spinka
                </p>
                <div className="flex items-center space-x-2">
                  <p className="flex items-center space-x-1">
                    <span>
                      <Image
                        src={"/icons/profile.svg"}
                        height={14}
                        width={14}
                        alt="profileIcon"
                      />
                    </span>
                    <p className="text-[#808080]">Creator</p>
                  </p>
                  <p className="h-1 w-1 rounded-full bg-[#C8C8C8]"></p>
                  <p className="flex items-center space-x-1">
                    <span>
                      <Image
                        src={"/icons/music.svg"}
                        height={14}
                        width={14}
                        alt="musicIcon"
                      />
                    </span>
                    <p className="text-[#808080]">Artist/Musician</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-between border rounded-md p-3 mb-[40px]">
              <div className="flex flex-col space-y-1">
                <p className="text-[#A4A4A4] text-[14px]">Members in forum</p>
                <h2 className="font-medium text-[28px]">783</h2>
              </div>
              <div className="h-[61px] w-[1px] bg-[#E4E4E4]"></div>
              <div className="flex flex-col space-y-1 ">
                <p className="text-[#A4A4A4] text-[14px]  ">
                  Post in portfolio
                </p>
                <h2 className="font-medium text-[28px] flex ">783</h2>
              </div>
            </div>
            <div className="space-y-[24px] mb-[32px]">
              <p className="font-semibold text-sm">Personal Info</p>

              <div className="flex items-center justify-between border-b pb-2">
                <p className=" text-[#A4A4A4]">Full Name</p>
                <p className="">name</p>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <p className=" text-[#A4A4A4]">Email</p>
                <p className="text-[#F75803]">email</p>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <p className=" text-[#A4A4A4]">Phone Number</p>
                <p className="text-[#F75803]">phone</p>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <p className=" text-[#A4A4A4]">Country</p>
                <p className="">country </p>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <p className=" text-[#A4A4A4] line-clamp-2">Date Joined</p>
                <p className="">date</p>
              </div>
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
