"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

const FanDetails = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
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
            <p className="text-lg font-medium">Mack.Spinka</p>
            <p className="text-[#808080] flex items-center space-x-1">
              <Image
                src={"/DASHBOARDASSETS/ICONS/PROFILEFAN.svg"}
                height={16}
                width={16}
                alt="profileIcon"
              />
              <p>Fan</p>
            </p>
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[140px] text-black justify-end space-x-2 text-left font-normal",
                  !date && "text-muted-foreground text-black"
                )}
              >
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-black">Last 7 days</span>
                )}
                <CalendarIcon className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex items-center space-x-[138px]">
        <div className="space-y-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">No. of forums created</p>
          </p>
          <p className="text-[32px] font-medium">10</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">No. of users in forum</p>
          </p>
          <p className="text-[32px] font-medium">23k</p>
        </div>
      </div>
      <section className="">
        <div className="w-2/5">
          <p className="font-medium mb-4 pb-4 border-b">Forums Joined</p>
          <div className="space-y-6">
            <div className="flex border p-2 items-center rounded-md space-x-2">
              <Image
                src={"/creatorImage.jpg"}
                width={48}
                height={48}
                alt="forumImage"
                className="rounded-md"
              />
              <div>
                <p className="font-medium">Ecofriendly Affairs Worldwide</p>
                <p className="text-[#808080]">12,324 Members</p>
              </div>
            </div>
            <div className="flex border p-2 items-center rounded-md space-x-2">
              <Image
                src={"/creatorImage.jpg"}
                width={48}
                height={48}
                alt="forumImage"
                className="rounded-md"
              />
              <div>
                <p className="font-medium">Ecofriendly Affairs Worldwide</p>
                <p className="text-[#808080]">12,324 Members</p>
              </div>
            </div>
            <div className="flex border p-2 items-center rounded-md space-x-2">
              <Image
                src={"/creatorImage.jpg"}
                width={48}
                height={48}
                alt="forumImage"
                className="rounded-md"
              />
              <div>
                <p className="font-medium">Ecofriendly Affairs Worldwide</p>
                <p className="text-[#808080]">12,324 Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FanDetails;
