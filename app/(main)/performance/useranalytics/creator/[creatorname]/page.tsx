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

const CreatorDetails = () => {
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
            <p className="text-[20px] ">Mack.Spinka</p>
            <p className="text-[#808080] text-sm">Creator</p>
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
      <div className="flex items-center space-x-[142.5px]">
        <div className="space-y-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">No. of Post</p>
          </div>
          <p className="text-[32px] font-Recoleta font-medium">10</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of fans in forum
            </p>
          </div>
          <p className="text-[32px] font-medium font-Recoleta">20m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of forums joined
            </p>
          </div>
          <p className="text-[32px] font-medium font-Recoleta">12</p>
        </div>
      </div>
      <section className="grid grid-cols-8  space-x-7 ">
        <div className="col-span-5">
          <div className="text-[16px] flex items-center space-x-2 border-b pb-4 mb-4 ">
            <p>Top Engagement</p>
            <div className="bg-[#C8C8C8] w-[6px] h-[6px] rounded-full"></div>
            <p className="text-[#F75803] ml-3">139,895,3020 Engagement</p>
          </div>

          <div className="space-y-3">
            <Image
              src={"/creatorImage.jpg"}
              height={331}
              width={592}
              className="object-contain"
              alt="creatorImage"
            />
            <p className="text-[#5B5B5B] w-[592px]">
              Lorem ipsum dolor sit amet consectetur. Sed purus amet enim nunc
              quis quam dui. Nisl varius viverra quis leo dolor nisi faucibus
              adipiscing. Ultricies scelerisque nisl ullamcorper enim
              condimentum vestibulum lacus etiam ultrices. Ultrices tortor sed
              malesuada accumsan varius sed diam dictum orci.
            </p>
          </div>
          <div className="flex  items-center justify-between border p-2 rounded-md w-[256px]">
            <p className="flex items-center space-x-2 text-[#808080]">
              <span className="mr-2">
                <Heart />
              </span>
              1,000,645
            </p>
            <div className="h-[12px] w-[1px] bg-[#C8C8C8]"></div>
            <p className="flex items-center space-x-2 text-[#808080]">
              <span className="mr-2">
                <MessageCircle />
              </span>
              39,645
            </p>
          </div>
        </div>
        <div className="col-span-3">
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

export default CreatorDetails;
