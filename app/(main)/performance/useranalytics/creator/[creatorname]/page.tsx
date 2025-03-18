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
import MediaCarousel from "@/components/MediaCarousel";

const CreatorDetails = () => {
  const [date, setDate] = useState<Date>();
  const { activeUser, creatorPerformance } = useSelector((state: RootState) => state.performance);
  
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
            <p className="text-[#808080] text-sm">{activeUser?.user_type}</p>
          </div>
        </div>
    
      </div>
      <div className="flex items-center space-x-[142.5px]">
        <div className="space-y-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">No. of Post</p>
          </div>
          <p className="text-[32px] font-Recoleta font-medium">{creatorPerformance?.result?.total_posts || '-'}</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of fans in forum
            </p>
          </div>
          <p className="text-[32px] font-medium font-Recoleta">{creatorPerformance?.total_users_in_created_forums}</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <div className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of forums joined
            </p>
          </div>
          <p className="text-[32px] font-medium font-Recoleta">{creatorPerformance?.number_of_forums_joined}</p>
        </div>
      </div>
      <section className="grid grid-cols-8  space-x-7 ">
        <div className="col-span-5">
          {creatorPerformance?.result ? 
          <>
           <div className="text-[16px] flex items-center space-x-2 border-b pb-4 mb-4 ">
            <p>Top Engagement</p>
            <div className="bg-[#C8C8C8] w-[6px] h-[6px] rounded-full"></div>
            <p className="text-[#F75803] ml-3">
            {creatorPerformance?.result?.likes_count + creatorPerformance?.result?.comments_count}</p>
          </div>

          <div className="space-y-3">
             <>
             <div className="relative w-full h-[259px]">
             <MediaCarousel mediaUrls={creatorPerformance?.result?.feed?.media_url} />
             </div>
             

  </>
         
            <p className="text-[#5B5B5B] w-[592px]">
             {creatorPerformance?.result?.feed?.text_content}
            </p>
          </div>
          <div className="flex  items-center justify-between border p-2 rounded-md w-[256px]">
            <p className="flex items-center space-x-2 text-[#808080]">
              <span className="mr-2">
                <Heart />
              </span>
              {creatorPerformance?.result?.likes_count}
            </p>
            <div className="h-[12px] w-[1px] bg-[#C8C8C8]"></div>
            <p className="flex items-center space-x-2 text-[#808080]">
              <span className="mr-2">
                <MessageCircle />
              </span>
              {creatorPerformance?.result?.comments_count}
            </p>
          </div>
          </>
          :
          <>
          <p>No Available Post</p>
          </>
          }
         
        </div>
        <div className="col-span-3">
          <p className="font-medium mb-4 pb-4 border-b">Forums Joined</p>
          <div className="space-y-6">
            {creatorPerformance?.forums?.map((performance: any, index: any) => (
              <div key={index} className="flex border p-2 items-center rounded-md space-x-2">
             {performance?.logo !== "" &&  <Image
                src={performance?.logo}
                width={48}
                height={48}
                alt="forumImage"
                className="rounded-md"
              />}
             
              <div>
                <p className="font-medium">{performance?.name}</p>
                <p className="text-[#808080]">{performance?.noOfMembers} Member(s)</p>
              </div>
            </div>
            ))}
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorDetails;
