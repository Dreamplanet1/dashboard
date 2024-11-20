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
import React, { useEffect, useState } from "react";
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
import useAdminsetting from "@/hooks/useAdminsetting";
import FadeLoader from "react-spinners/FadeLoader";

const features = [
  "Broadcast",
  "Members",
  "Campaign Challenge",
  "Payments",
  "Performance Report",
];

const AddMemberForm = () => {
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
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [firstName, setFirstName] = useState<string> ('');
  const [lastName, setLastName] = useState<string> ('');
  const [phoneNumber, setPhoneNumber] = useState<string> ('');
  const [email, setEmail] = useState<string> ('');
  const { createAdmin, adminLoading } = useAdminsetting();


  return (
    <>
    {adminLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col items-center justify-center w-[432px] h-[160px] rounded-lg shadow-lg space-y-[8px]">
        <FadeLoader color="#7E2D02" />
        <p className="text-[#111810] text-[20px]">Processing...</p>
      </div>
    </div> 
  )}
    <form
      onSubmit={async(e) => { e.preventDefault();
        await createAdmin(firstName, lastName, selectedCountry,phoneNumber, email);
        setSelectedCountry('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('')
       }}
      className="mx-auto bg-white form-background max-w-[500px] border-t-[#547AFF] border-t-8"
    >
      <div className="w-full py-4 px-7  border-b flex items-center justify-between">
        <h2 className="text-[20px] font-normal">Add Admin</h2>
        <div className="space-x-2">
        <Button type="button" onClick={() => setisOpen(true)} className="btnPlain">Send link</Button>
         {selectedCountry && firstName && lastName && phoneNumber && email ?           <Button type="submit" className="btnColored">Add Admin</Button>
:           <Button disabled className="btnColoredInactive">Add Admin</Button>
 
 }

        </div>
      </div>
      <div className="space-y-[20px] py-[48px] px-7 ">
        <div className="flex items-center space-x-3">
          <div className="grid w-full  items-center gap-[8px]">
            <Label
              className="font-medium text-[14px] text-[#10002E]"
              htmlFor="firstName"
            >
              First Name
            </Label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              placeholder="Enter First Name"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] rounded-[8px]"
            />
          </div>
          <div className="grid w-full  items-center gap-[8px]">
            <Label
              className="font-medium text-[14px] text-[#10002E]"
              htmlFor="lastName"
            >
              Last Name
            </Label>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}      
                 placeholder="Enter Last Name"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] rounded-[8px]"
            />
          </div>
        </div>
        <div className="grid w-full  items-center gap-[8px]">
          <Label
            className="font-medium text-[14px] text-[#10002E]"
            htmlFor="country"
          >
            Country
          </Label>
          <Select value={selectedCountry} onValueChange={(value) => setSelectedCountry(value)}>
                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-[#C8C8C8] placeholder:text-[#C8C8C8]">
                  <SelectValue className="" placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                    <SelectItem value="Ghana">Ghana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
        </div>
          <div className="grid w-full  items-center gap-[8px]">
            <Label
              className="font-medium text-[14px] text-[#10002E]"
              htmlFor="mobile"
              
            >
              Mobile No.
            </Label>
            <Input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
        placeholder="Enter Mobile No."
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] rounded-[8px]"
            />
          </div>
          <div className="grid w-full  items-center gap-[8px]">
            <Label
              className="font-medium text-[14px] text-[#10002E]"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Email"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] rounded-[8px]"
            />
          </div>
        
      </div>
    </form>
        <Dialog open={isOpen} onOpenChange={closeOpenDialog}>
           
            <DialogContent className="sm:max-w-md px-0">
            <DialogHeader className="pb-[18.5px] border-b">
            <DialogTitle className="px-[16px] flex justify-between items-center">
              <DialogDescription className="hidden"></DialogDescription>
              <p className="font-medium">Send Form</p>
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
              <div className="grid w-full py-[31px] items-center gap-[8px] px-4">
            <Label
              className="font-medium text-[14px] text-[#10002E]"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[14px] placeholder:text-[#C8C8C8] border-[#C8C8C8] rounded-[8px]"
            />
          </div>
              <DialogFooter className="sm:justify-end px-4">
                <DialogClose asChild>
                  <Button className="bg-transparent hover:bg-transparent border transition-all hover:scale-105 active:scale-95 text-black">
                    Cancel
                  </Button>
                </DialogClose>

                <Button className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95 text-white">
                  Send
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
    </>
    
  );
};

export default AddMemberForm;
