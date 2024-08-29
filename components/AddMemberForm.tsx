"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp, Copy, XIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";

const features = [
  "Broadcast",
  "Members",
  "Campaign Challenge",
  "Payments",
  "Performance Report",
];

const AddMemberForm = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

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
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto bg-white form-background max-w-[500px] border-t-[#547AFF] border-t-8"
    >
      <div className="w-full py-4 px-7 mb-7 border-b flex items-center justify-between">
        <h2 className="font-semibold">Add Member</h2>
        <div className="space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-transparent hover:bg-transparent border transition-all hover:scale-105 active:scale-95 text-black">
                Copy link
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md ">
              <DialogHeader className="border-b py-2">
                <DialogTitle>Copy link</DialogTitle>
              </DialogHeader>
              <div className="flex items-center  border rounded-md py-2 space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Form Link
                  </Label>
                  <Input
                    id="link"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
                    defaultValue="http://dreamplanet/generatelink.com"
                    readOnly
                  />
                </div>
                <Button
                  type="submit"
                  size="sm"
                  className="px-3 bg-transparent hover:bg-transparent"
                >
                  <span className="sr-only">Copy</span>
                  <Image
                    src={"/icons/copyIcon.svg"}
                    className=""
                    width={18}
                    height={18}
                    alt="copyIcon"
                  />
                </Button>
              </div>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button className="bg-transparent hover:bg-transparent border transition-all hover:scale-105 active:scale-95 text-black">
                    Cancel
                  </Button>
                </DialogClose>

                <Button className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95 text-white">
                  Copy
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95 text-white">
                Submit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader className="border-b pb-4">
                <div className="flex space-x-2 items-center">
                  <p className="text-md font-semibold">Send Form</p>
                </div>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="">
                    Email
                  </Label>
                  <Input
                    id="email"
                    defaultValue=""
                    placeholder="Enter Email"
                    className="col-span-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="col-span-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="">
                    Message
                  </Label>
                  <Input
                    id="message"
                    placeholder="Message"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  className=" bg-transparent hover:bg-transparent text-black hover:scale-105 active:scale-95 transition-all"
                  type="submit"
                >
                  Cancel
                </Button>
                <Button
                  className=" bg-[#F75803] hover:bg-[#F75803] text-white hover:scale-105 active:scale-95 transition-all"
                  type="submit"
                >
                  Send
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="space-y-4 py-4 px-7 ">
        <div className="flex items-center space-x-3">
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold" htmlFor="firstName">
              First Name
            </Label>
            <Input
              type="firstName"
              id="firstName"
              placeholder="Enter First Name"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              type="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div>
          <Label className="font-semibold" htmlFor="country">
            Country
          </Label>
          <select
            id="country"
            className="w-full p-2 border rounded text-[#8B849B] text-[14px] focus:ring-0 focus:outline-none"
          >
            <option value="" disabled selected>
              Select Country
            </option>
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
          </select>
        </div>
        <div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold" htmlFor="mobile">
              Mobile No.
            </Label>
            <Input
              type="mobile"
              id="mobile"
              placeholder="Enter Mobile No."
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div>
          <Label className="font-semibold" htmlFor="role">
            Role
          </Label>
          <select
            id="role"
            className="w-full p-2 border rounded text-[#8B849B] text-[14px] focus:ring-0 focus:outline-none"
          >
            <option value="" disabled selected>
              Enter Role
            </option>
            <option value="admin">Admin</option>
            <option value="sub-admin">Sub-Admin</option>
          </select>
        </div>
        <div>
          <div className="flex flex-col  transition-all space-y-2">
            <Label htmlFor="features" className="font-semibold">
              Features
            </Label>
            <button
              className="w-full transition-all border p-2 text-left flex justify-between items-center"
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
                  <span className="text-[14px] text-[#8B849B]">
                    Select Features
                  </span>
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
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
                    <span className="text-[14px] ">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMemberForm;
