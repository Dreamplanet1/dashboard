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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EllipsisVertical, PlusIcon, SearchIcon, XIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
];
const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
const [searchTerm, setSearchTerm] = useState("");

const [selectedAssignee, setSelectedAssignee] = useState<string | null>(null);
const [searchTerm2, setSearchTerm2] = useState("");

const handleSelect = (value: string) => {
  setSelectedFruit(value);
  setSearchTerm(""); // Clear search input after selection
};

const handleSelect2 = (value: string) => {
  setSelectedAssignee(value);
  setSearchTerm2("");
};

// Handle removal for fruits (Creator)
const handleRemove = () => {
  setSelectedFruit(null);
};

const handleRemove2 = () => {
  setSelectedAssignee(null);
};

const filteredFruits = fruits.filter((fruit) =>
  fruit.value.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredAssignees = fruits.filter((fruit) =>
  fruit.value.toLowerCase().includes(searchTerm2.toLowerCase())
);

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Admin Name",
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("email")}</p>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <div className="flex items-center space-x-1 border  text-xs font-semibold w-max rounded-xl py-1 px-2">
        <span className="h-1 w-1 rounded-full bg-[#BF3100]"></span>
        <p>{row.getValue("role")}</p>
      </div>
    ),
  },

  {
    accessorKey: "date",
    header: "Date Joined",
    cell: ({ row }) => (
      <p className="text-[14px] text-[#373737]">{row.getValue("date")}</p>
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
              <Dialog>
                <DialogTrigger asChild>
                  <span>
                    <Image
                      src={"/icons/more.svg"}
                      width={18}
                      height={13}
                      alt="editIcon"
                      className="mr-2"
                    />
                  </span>
                  More info
                </DialogTrigger>
                <DialogContent className="sm:max-w-[432px]">
                  <DialogHeader>
                    <DialogTitle>Add Creator</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="creator" className="font-semibold">
                        Creator
                      </Label>
                      <div className="w-full">
                        <div className="flex items-center border rounded-md px-1 py-1">
                          {selectedFruit ? (
                            <div className="flex items-center">
                              <SearchIcon
                                color="#C8C8C8"
                                className="h-4 w-4 mr-2"
                              />
                              <div className="flex items-center px-2 py-0 rounded-md space-x-1 border my-2">
                                <Avatar className="w-5 h-5">
                                  <AvatarImage
                                    className="object-contain"
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="text-[12px]">
                                  {selectedFruit}
                                </span>
                                <XIcon
                                  size={14}
                                  color="#C8C8C8"
                                  className="cursor-pointer transition-all hover:scale-105 active:scale-95"
                                  onClick={handleRemove}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <SearchIcon
                                color="#C8C8C8"
                                className="h-4 w-4 ml-2"
                              />
                              <Input
                                placeholder="Search "
                                className="w-full pl-2 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </div>
                          )}
                        </div>
                        {searchTerm && !selectedFruit && (
                          <div className="w-full bg-white p-3 rounded-md border mt-1 z-10">
                            {filteredFruits.length > 0 ? (
                              filteredFruits.map((fruit: any) => (
                                <div
                                  key={fruit.value}
                                  className="flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-gray-100"
                                  onClick={() => handleSelect(fruit.value)}
                                >
                                  <div className="flex items-center space-x-1">
                                    <Avatar className="w-8 h-8">
                                      <AvatarImage
                                        className="object-contain"
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                      />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-[14px]">
                                      {fruit.label}
                                    </span>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-sm text-gray-500">
                                No results found
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 ">
                      <Label htmlFor="assignee" className="font-semibold">
                        Assignee
                      </Label>
                      <div className=" w-full">
                        <div className="flex items-center border rounded-md px-1 py-1">
                          {selectedAssignee ? (
                            <div className="flex items-center">
                              <SearchIcon
                                color="#C8C8C8"
                                className="h-4 w-4 mr-2"
                              />
                              <div className="flex items-center px-2 py-0 rounded-md space-x-1 border my-2">
                                <Avatar className="w-5 h-5">
                                  <AvatarImage
                                    className="object-contain"
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="text-[12px]">
                                  {selectedAssignee}
                                </span>
                                <XIcon
                                  size={14}
                                  color="#C8C8C8"
                                  className="cursor-pointer transition-all hover:scale-105 active:scale-95"
                                  onClick={handleRemove2}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <SearchIcon
                                color="#C8C8C8"
                                className="h-4 w-4 ml-2"
                              />
                              <Input
                                placeholder="Search"
                                className="w-full pl-2 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                value={searchTerm2}
                                onChange={(e) => setSearchTerm2(e.target.value)}
                              />
                            </div>
                          )}
                        </div>
                        {searchTerm2 && !selectedAssignee && (
                          <div className=" w-full bg-white p-3 rounded-md border mt-1 z-10">
                            {filteredAssignees.length > 0 ? (
                              filteredAssignees.map((fruit: any) => (
                                <div
                                  key={fruit.value}
                                  className="flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-gray-100"
                                  onClick={() => handleSelect2(fruit.value)}
                                >
                                  <div className="flex items-center space-x-1">
                                    <Avatar className="w-8 h-8">
                                      <AvatarImage
                                        className="object-contain"
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                      />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-[14px]">
                                      {fruit.label}
                                    </span>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-sm text-gray-500">
                                No results found
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="investor" className="font-semibold">
                        No. of Investor
                      </Label>
                      <Input className="w-full py-5 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      className="w-20  bg-transparent border hover:bg-transparent text-black transition-all hover:scale-105 active:scale-95"
                      type="submit"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95 w-20"
                      type="submit"
                    >
                      Add
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/change.svg"}
                  width={18}
                  height={13}
                  alt="reportIcon"
                  className="mr-2"
                />
              </span>
              Change Role
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>
                <Image
                  src={"/icons/delete.svg"}
                  width={18}
                  height={13}
                  alt="removeIcon"
                  className="mr-2"
                />
              </span>
              Delete Member
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
