"use client";
import { Button } from "@/components/ui/button";
import {
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { UserTable } from "@/components/UserTable";
import { reportData } from "@/mock/row";
import { columns } from "./overviewcolumns";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
];

const ReportOverview = () => {
  // Creator
  const [isOpen, setisOpen] = useState(false);
  const closeOpenDialog = () => setisOpen(false);

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
  }, [isOpen, setisOpen]);
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Assignee
  const [selectedAssignee, setSelectedAssignee] = useState<string | null>(null);
  const [searchTerm2, setSearchTerm2] = useState("");

  // Handle selection for fruits (Creator)
  const handleSelect = (value: string) => {
    setSelectedFruit(value);
    setSearchTerm(""); // Clear search input after selection
  };

  // Handle selection for assignees (Assignee)
  const handleSelect2 = (value: string) => {
    setSelectedAssignee(value);
    setSearchTerm2(""); // Clear search input after selection
  };

  // Handle removal for fruits (Creator)
  const handleRemove = () => {
    setSelectedFruit(null);
  };

  // Handle removal for assignees (Assignee)
  const handleRemove2 = () => {
    setSelectedAssignee(null);
  };

  // Filter fruits based on search term for Creator
  const filteredFruits = fruits.filter((fruit) =>
    fruit.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter fruits based on search term for Assignee
  const filteredAssignees = fruits.filter((fruit) =>
    fruit.value.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  return (
    <div className="flex flex-col space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">Report</h2>
          <p className="text-sm text-[#A8A8A8]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              setisOpen(true);
            }}
            className="btnColored"
          >
            <span>
              <PlusIcon size={20} />
            </span>
            Add Creator
          </Button>
        </div>
      </div>
      <div>
        <UserTable
          bottom={true}
          placeholder="Search for Admin Name"
          columns={columns}
          data={reportData}
        />
      </div>
      <Dialog open={isOpen} onOpenChange={closeOpenDialog}>
        <DialogContent className="sm:max-w-[432px] px-0 rounded-full">
          <DialogHeader className="pb-[18.5px] border-b">
            <DialogTitle className="px-[16px] flex justify-between items-center">
              <p className="font-medium"> Add Creator</p>
              <span
                className="cursor-pointer transition-all active:scale-95"
                onClick={() => setisOpen(false)}
              >
                <Image
                  src="/DASHBOARDASSETS/ICONS/CANCEL.svg"
                  width={24}
                  height={24}
                  alt="cancel"
                />
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="grid px-[16px] mt-[32px] mb-[24px]  ">
            <div className="space-y-[16px] border-b pb-[32px]">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="creator" className="font-medium">
                  Creator
                </Label>
                <div className="w-full">
                  <div className="flex items-center border rounded-md px-1 py-1">
                    {selectedFruit ? (
                      <div className="flex items-center">
                        <SearchIcon color="#C8C8C8" className="h-4 w-4 mr-2" />
                        <div className="flex items-center px-2 py-0 rounded-md space-x-1 border my-2">
                          <Avatar className="w-5 h-5">
                            <AvatarImage
                              className="object-contain"
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span className="text-[12px]">{selectedFruit}</span>
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
                        <SearchIcon color="#C8C8C8" className="h-4 w-4 ml-2" />
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
                        filteredFruits.map((fruit) => (
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
                              <span className="text-[14px]">{fruit.label}</span>
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
                <Label htmlFor="assignee" className="font-medium">
                  Assignee
                </Label>
                <div className=" w-full">
                  <div className="flex items-center border rounded-md px-1 py-1">
                    {selectedAssignee ? (
                      <div className="flex items-center">
                        <SearchIcon color="#C8C8C8" className="h-4 w-4 mr-2" />
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
                        <SearchIcon color="#C8C8C8" className="h-4 w-4 ml-2" />
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
                        filteredAssignees.map((fruit) => (
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
                              <span className="text-[14px]">{fruit.label}</span>
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
                <Label htmlFor="investor" className="font-medium">
                  No. of Investor
                </Label>
                <Input className="w-full py-5 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border" />
              </div>
            </div>
          </div>
          <DialogFooter className="px-[16px]">
            <Button className="btnPlainInactive w-[96px]" type="submit">
              Cancel
            </Button>
            <Button className="btnColoredInactive w-[96px]" type="submit">
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportOverview;
