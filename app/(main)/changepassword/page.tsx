"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const changePassword = () => {
  const [isOpen, setisOpen] = useState(false);
  const closeDialog = () => setisOpen(false);
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
  return (
    <div>
      <div className="flex w-3/6 flex-col space-y-[32px]">
        <div>
          <h2 className="text-2xl">Change Password</h2>
          <p className="text-[14px] text-[#A8A8A8]">
            Its a good idea to use a password you are not using elsewhere
          </p>
        </div>
        <div className="space-y-[40px]">
          <div className="w-full space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="border rounded-md flex items-center justify-between border-[#C8C8C8]">
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0 placeholder:text-[#C8C8C8] placeholder:text-[14px]"
                type="password"
                placeholder="Enter Password"
              />
              <Image
                src={"/icons/passwordeye.svg"}
                alt="passwordeye"
                width={14}
                height={14}
                className="mr-2"
              />
            </div>
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="border border-[#C8C8C8] rounded-md flex items-center justify-between">
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0 placeholder:text-[#C8C8C8] placeholder:text-[14px]"
                type="password"
                placeholder="Enter Password"
              />
              <Image
                src={"/icons/passwordeye.svg"}
                alt="passwordeye"
                width={14}
                height={14}
                className="mr-2"
              />
            </div>
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="retype">Re-type New Password</Label>
            <div className="border rounded-md flex items-center justify-between border-[#C8C8C8]">
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0 placeholder:text-[#C8C8C8] placeholder:text-[14px]"
                type="password"
                placeholder="Enter Password"
              />
              <Image
                src={"/icons/passwordeye.svg"}
                alt="passwordeye"
                width={14}
                height={14}
                className="mr-2"
              />
            </div>
          </div>
          <div className="flex justify-end  space-x-2">
            <Button className=" btnPlainInactive">Cancel</Button>
            <Button
              className="btnColoredInactive"
              onClick={() => {
                setisOpen(true);
              }}
            >
              Set New Password
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[384px]">
          <div className="flex flex-col items-center justify-center gap-2 mt-7">
            <Image
              src={"/icons/passwordchanged.svg"}
              height={72}
              width={47.61}
              alt="passwordIcon"
            />
            <p className="text-[20px]">Password Changed</p>
            <p className="text-[14px] text-center text-[#808080]">
              Your password has been successfully changed. Keep it secure and do
              not share it with anyone.
            </p>
          </div>

          <DialogFooter>
            <div className="flex w-full justify-center items-center space-x-2">
              <Button className="w-full text-[14px] text-white bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95">
                Okay
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default changePassword;
