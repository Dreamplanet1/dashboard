import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const SubscriptionCard = () => {
  return (
    <div className="border p-4 rounded-lg flex flex-col space-y-2 items-center">
      <div className="bg-orange-100 flex items-center space-x-1 rounded-[32px] py-[4px] px-[8px]">
        <div className="h-1 w-1 rounded-full bg-[#7E2D02]"></div>
        <p className="text-[#7E2D02]  text-[12px]">Alien Subscription</p>
      </div>
      <div className="flex flex-col space-y-0 items-center">
        <span className=" text-[64px] font-medium">$20</span>
        <p className="text-[14px] text-[#808080]">Lifetime</p>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#F75803] mt-4 w-[209px] rounded-md py-2 text-sm text-white hover:scale-105 active:scale-95 transition-all">
              Change Price
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="border-b pb-4">
              <div className="flex space-x-2 items-center">
                <div className="bg-orange-100 py-2 px-2 rounded-full">
                  <Image
                    src={"/icons/editicon.svg"}
                    height={16}
                    width={16}
                    alt="editicon"
                  />
                </div>
                <p className="text-md font-semibold">Edit pricing plans</p>
              </div>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right">
                  New Price
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="period" className="text-right">
                  Period
                </Label>
                <Input
                  id="period"
                  defaultValue="Monthly"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                className="w-full bg-[#F75803] hover:bg-[#F75803] text-white hover:scale-105 active:scale-95 transition-all"
                type="submit"
              >
                Update Price
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SubscriptionCard;
