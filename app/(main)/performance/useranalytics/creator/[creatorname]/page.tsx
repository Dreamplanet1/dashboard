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
            <p className="text-lg font-semibold">Mack.Spinka</p>
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
      <div className="flex items-center space-x-24">
        <div className="space-y-2">
          <p className=" text-sm border-l-4 border-l-[#F79203] pl-2 py-0">
            No. of Post
          </p>
          <p className="text-3xl font-semibold">10</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Total no. of fans in forum
          </p>
          <p className="text-3xl font-semibold">20m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className=" text-sm border-l-4 border-l-black pl-2 py-0">
            Total no. of forums joined
          </p>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
      <section className="flex items-start space-x-7 justify-between">
        <div>
          <div className="border-b pb-4 mb-4 ">
            <p className="text-[16px] text-bold font-semibold">
              Top Engagement
              <span className="text-[#F75803] ml-3">
                139,895,3020 Engagement
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src={"/creatorImage.jpg"}
              height={331}
              width={592}
              className="object-contain"
              alt="creatorImage"
            />
            <p className="text-[#5B5B5B]">
              Lorem ipsum dolor sit amet consectetur. Sed purus amet enim nunc
              quis quam dui. Nisl varius viverra quis leo dolor nisi faucibus
              adipiscing. Ultricies scelerisque nisl ullamcorper enim
              condimentum vestibulum lacus etiam ultrices. Ultrices tortor sed
              malesuada accumsan varius sed diam dictum orci.
            </p>
          </div>
          <div className="flex space-x-24 items-center  border w-max p-2 rounded-md">
            <p className="flex items-center grow space-x-2 text-[#808080]">
              <span className="mr-2">
                <Heart />
              </span>
              1,000,645
            </p>
            <p className="flex items-center border-l grow space-x-2 text-[#808080]">
              <span className="mr-2">
                <MessageCircle />
              </span>
              39,645
            </p>
          </div>
        </div>
        <div className="w-full grow">
          <p className="font-semibold mb-4 pb-4 border-b">Forums Joined</p>
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
                <p className="font-semibold">Ecofriendly Affairs Worldwide</p>
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
                <p className="font-semibold">Ecofriendly Affairs Worldwide</p>
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
                <p className="font-semibold">Ecofriendly Affairs Worldwide</p>
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
