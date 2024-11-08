"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RootState } from "@/redux/store";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const formatDateTime = (dateString: string) => {
    // Extract date and time components from ISO string
    const [datePart, timePart] = dateString.split("T");
    const [year, month, day] = datePart.split("-");
    const [hour, minute] = timePart.split(":");

    // Format month name
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = monthNames[parseInt(month, 10) - 1];

    // Convert hour to 12-hour format and determine AM/PM
    let hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? "PM" : "AM";
    hourInt = hourInt % 12 || 12; // Convert hour "0" to "12" for 12-hour format

    return `Uploaded ${day} ${monthName} ${year}, ${hourInt}:${minute} ${ampm}`;
  };

  const router = useRouter();
  const { activeReport } = useSelector((state: RootState) => state.report);
  return (
    <section className="py-4 px-7 mx-auto max-w-screen-lg ">
      <div
        onClick={() => {
          router.push("/report/submitted");
        }}
        className="flex items-center cursor-pointer transition-all active:scale-95 text-[14px]"
      >
        <ArrowLeft width={20} height={20} className="mr-2" />
        <p>Return to dashboard</p>
      </div>

      <section className="mt-5 grid grid-cols-6 space-x-4">
        <div className="bg-white px-5 py-10 col-span-4 h-[90vh] flex flex-col">
          <div className="pb-[16px] border-b">
            <h2 className="text-[24px]">Evaluation Report</h2>
            <p className="text-[#5B5B5B] text-[12px]">
              {formatDateTime(activeReport?.createdAt)}
            </p>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[#10002E] font-medium">
              {activeReport?.subject}
            </h3>
            <p className="text-[12px]">{activeReport?.description}</p>
            <div className="grid grid-cols-3 gap-3">
              {activeReport?.media_url.map((media: any) => (
                <Image
                  alt="evaluationImage"
                  src={media}
                  className="mt-4"
                  height={80}
                  width={96}
                />
              ))}
            </div>
          </div>
          <div className="mt-auto items-end">
            <Image
              src={"/icons/logoreportIcon.svg"}
              width={23.56}
              height={19.94}
              alt="logoreportIcon"
            />
            <h2 className="font-medium">{activeReport?.user_name}</h2>
            <p className="text-[#808080] text-[12px]">
              {activeReport?.user_type}
            </p>
          </div>
        </div>
        <div className="col-span-2 bg-white h-max p-5">
          <div className="flex pb-[20px] border-b space-x-[6px] items-center">
            <Avatar>
              <AvatarImage
                className="object-contain"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{activeReport?.user_name}</p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span>
                    <Image
                      src={"/icons/profile.svg"}
                      height={16}
                      width={16}
                      alt="profileIcon"
                    />
                  </span>
                  <p className="text-[#808080] text-[14px]">
                    {activeReport?.user_type}
                  </p>
                </div>
                {activeReport?.content_creator_type && (
                  <p className="h-1 w-1 rounded-full bg-[#C8C8C8]"></p>
                )}

                {activeReport?.content_creator_type && (
                  <div className="flex items-center space-x-1">
                    <span>
                      <Image
                        src={"/icons/music.svg"}
                        height={16}
                        width={16}
                        alt="musicIcon"
                      />
                    </span>
                    <p className="text-[#808080] text-[14px]">
                      {activeReport?.content_creator_type}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-md px-3 w-full mt-[20px]">
            <div className="flex flex-col space-y-1">
              <p className="text-[#808080] text-[12px]">Members in forum</p>
              <h2 className="font-Recoleta font-medium text-[20px]">783</h2>
            </div>
            <div className="h-[48px] w-[1px] bg-[#E4E4E4]"></div>
            <div className="flex flex-col space-y-1 ">
              <p className="text-[#808080] text-[12px]">Post in portfolio</p>
              <h2 className="font-Recoleta font-medium text-[20px]">783</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
