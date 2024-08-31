"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EllipsisVertical, SearchIcon, XIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserTable } from "@/components/UserTable";
import { adminData } from "@/mock/row";
import { ColumnDef } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react"; // Arrow Icons
import Image from "next/image";

const features = [
  "Broadcast",
  "Members",
  "Campaign Challenge",
  "Payments",
  "Performance Report",
];

const AdminSetting = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMoveExpanded, setIsMoveExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMoveDialogOpen, setIsMoveDialogOpen] = useState(false);
  const [selectedMoveFeatures, setSelectedMoveFeatures] = useState<string[]>(
    []
  );

  // Handlers to open/close the dialog
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const removeFeature = (feature: string) => {
    setSelectedFeatures((prev) => prev.filter((f) => f !== feature));
  };

  const openMoveDialog = () => setIsMoveDialogOpen(true);
  const closeMoveDialog = () => setIsMoveDialogOpen(false);

  const toggleMoveFeature = (feature: string) => {
    setSelectedMoveFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const removeMoveFeature = (feature: string) => {
    setSelectedMoveFeatures((prev) => prev.filter((f) => f !== feature));
  };

  const columns: ColumnDef<any>[] = [
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
      cell: () => {
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
                onClick={openDialog}
              >
                <span>
                  <Image
                    src={"/icons/more.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>More info</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openDialog}
              >
                <span>
                  <Image
                    src={"/icons/change.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Change Role</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openDialog}
              >
                <span>
                  <Image
                    src={"/icons/delete.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Delete Request</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const moveColumns: ColumnDef<any>[] = [
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
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center space-x-2">
                <span>
                  <Image
                    src={"/icons/more.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>More info</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openMoveDialog}
              >
                <span>
                  <Image
                    src={"/icons/move.svg"}
                    alt="moveIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Move to accepted</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <span>
                  <Image
                    src={"/icons/delete.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Delete Request</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="grid grid-cols-8 space-x-4">
      <section className="col-span-6 flex flex-col space-y-7">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium text-2xl">Admin Setting</h2>
            <p className="text-sm text-[#A8A8A8]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <Button className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95">
            <PlusIcon size={20} />
            Add Role
          </Button>
        </div>
        <div>
          <Tabs defaultValue="accepted">
            <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="accepted"
              >
                Accepted Request
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="pending"
              >
                Pending Request
              </TabsTrigger>
            </TabsList>
            <TabsContent value="accepted">
              <UserTable
                bottom={true}
                placeholder="Search for Admin Name"
                data={adminData}
                columns={columns}
              />
            </TabsContent>
            <TabsContent value="pending">
              <UserTable
                bottom={true}
                placeholder="Search for Admin Name"
                data={adminData}
                columns={moveColumns}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="col-span-2 border">
        <h2 className="p-2 border-b font-semibold">Admin Roles (3)</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Sub-Admin</AccordionTrigger>
            <AccordionContent>
              <p>Michael Bradley</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Dialog for "More Info" */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[432px]">
          <DialogHeader>
            <DialogTitle>Change Role</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="creator" className="font-semibold">
                Role
              </Label>

              <Select>
                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="sub-admin">Sub-Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="features" className="font-semibold">
                Features
              </Label>
              <button
                className="w-full border p-2 text-left flex justify-between items-center"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="flex space-x-2 flex-wrap items-center">
                  {selectedFeatures.length > 0 ? (
                    selectedFeatures.slice(0, 2).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-1 bg-[#F1F1F1] px-2 py-1 rounded text-[14px]"
                      >
                        <span>{feature}</span>
                        <XIcon
                          size={16}
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFeature(feature);
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <span className="text-[14px]">Select Features</span>
                  )}
                  {selectedFeatures.length > 1 && (
                    <div className="flex items-center">
                      <p>....</p>
                      <div className="ml-2 bg-[#808080] text-white px-2 py-1 rounded">
                        {selectedFeatures.length}
                      </div>
                    </div>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </button>

              {/* Expandable section */}
              {isExpanded && (
                <div className="border transition-all px-2 pt-2 w-full">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 py-2 cursor-pointer"
                      onClick={() => toggleFeature(feature)}
                    >
                      <div
                        className={`w-4 h-4 flex items-center border justify-center  ${
                          selectedFeatures.includes(feature)
                            ? "bg-[#F75803] border-0"
                            : "bg-white "
                        }`}
                      >
                        {selectedFeatures.includes(feature) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-[14px]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-transparent hover:bg-transparent transition hover:scale-105 active:scale-95 text-black border"
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button className="bg-[#F75803] hover:bg-[#F75803] transition hover:scale-105 active:scale-95">
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isMoveDialogOpen} onOpenChange={closeMoveDialog}>
        <DialogContent className="sm:max-w-[432px]">
          <DialogHeader>
            <DialogTitle>Move Admin</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="creator" className="font-semibold">
                Role
              </Label>

              <Select>
                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="sub-admin">Sub-Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="creator" className="font-semibold">
                Add Role
              </Label>

              <Select>
                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="features" className="font-semibold">
                Features
              </Label>
              <button
                className="w-full border p-2 text-left flex justify-between items-center"
                onClick={() => setIsMoveExpanded(!isMoveExpanded)}
              >
                <div className="flex space-x-2 flex-wrap items-center">
                  {selectedMoveFeatures.length > 0 ? (
                    selectedMoveFeatures.slice(0, 2).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-1 bg-[#F1F1F1] px-2 py-1 rounded text-[14px]"
                      >
                        <span>{feature}</span>
                        <XIcon
                          size={16}
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeMoveFeature(feature);
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <span className="text-[14px]">Select Features</span>
                  )}
                  {selectedMoveFeatures.length > 1 && (
                    <div className="flex items-center">
                      <p>....</p>
                      <div className="ml-2 bg-[#808080] text-white px-2 py-1 rounded">
                        {selectedMoveFeatures.length}
                      </div>
                    </div>
                  )}
                </div>
                {isMoveExpanded ? (
                  <ChevronUp size={17} />
                ) : (
                  <ChevronDown size={17} />
                )}
              </button>

              {/* Expandable section */}
              {isMoveExpanded && (
                <div className="border transition-all px-2 pt-2 w-full">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 py-2 cursor-pointer"
                      onClick={() => toggleMoveFeature(feature)}
                    >
                      <div
                        className={`w-4 h-4 flex items-center border justify-center  ${
                          selectedMoveFeatures.includes(feature)
                            ? "bg-[#F75803] border-0"
                            : "bg-white "
                        }`}
                      >
                        {selectedMoveFeatures.includes(feature) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-[14px]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-transparent hover:bg-transparent transition hover:scale-105 active:scale-95 text-black border"
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button className="bg-[#F75803] hover:bg-[#F75803] transition hover:scale-105 active:scale-95">
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminSetting;
