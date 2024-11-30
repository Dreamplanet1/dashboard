"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar as CalendarIcon, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const FanDetails = () => {
  const [date, setDate] = useState<Date>();
  const { activeUser, fanInvestorPerformance } = useSelector((state: RootState) => state.performance);
 const router = useRouter();
  return (
    <div className="space-y-10">
       <div
            onClick={() => {
              router.push("/performance/useranalytics");
            }}
            className=" cursor-pointer flex items-center transition-all active:scale-95"
          >
          <ArrowLeft width={20} height={20} className="mr-[8px]" />

            <span className="">Return back</span>
          </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <Avatar>
            <AvatarImage
              className="object-cover"
              src={activeUser?.image}
              alt="@shadcn"
            />
            <AvatarFallback>{activeUser?.full_name[0]}</AvatarFallback>
          </Avatar>
          <div>
          <p className="text-[20px] ">{activeUser?.full_name}</p>
          <div className="text-[#808080] flex items-center space-x-1">
              <Image
                src={"/DASHBOARDASSETS/ICONS/PROFILEFAN.svg"}
                height={16}
                width={16}
                alt="profileIcon"
              />
            <p className="text-[#808080] text-sm">{activeUser?.user_type}</p>
            </div>
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-max text-black justify-end space-x-2 text-left font-normal",
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
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">No. of forums created</p>
          </div>
          <p className="text-[32px] font-Recoleta font-medium">{fanInvestorPerformance?.number_of_forum_created}</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">No. of users in forum</p>
          </div>
          <p className="text-[32px] font-Recoleta font-medium">{fanInvestorPerformance?.total_users_in_created_forums}</p>
        </div>
      </div>
      <section className="">
        <div className="w-2/5">
          <p className="font-medium mb-4 pb-4 border-b">Forums Joined</p>
          <div className="space-y-6">
            {fanInvestorPerformance?.forums?.map((performance: any, index:any) => (
    <div key={index} className="flex border p-2 items-center rounded-md space-x-2">
   {performance?.logo !== "" &&  <Image
      src={performance?.logo}
      width={48}
      height={48}
      alt="forumImage"
      className="rounded-md h-[48px] w-[48px] object-cover"
    />}
   
    <div>
      <p className="font-medium">{performance?.name}</p>
      <p className="text-[#808080]">{performance?.noOfMembers}</p>
    </div>
  </div>
            ))}
           
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default FanDetails;
