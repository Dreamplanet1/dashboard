"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  return (
    <section className="py-4 px-7 mx-auto max-w-screen-lg ">
      <div
        onClick={() => {
          window.location.href = "/report/submitted";
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
              Uploaded 22 Jun 2024, 10:44 am
            </p>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[#10002E] font-medium">
              Investment Funds Management
            </h3>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur. Facilisi habitasse cras id
              vulputate praesent turpis vitae mauris. Bibendum malesuada vel
              mauris consectetur libero facilisi viverra arcu. Adipiscing sed
              molestie ac fermentum pharetra habitant adipiscing fames.
              Tristique lectus amet libero in nulla vitae tristique. Eu sed
              porttitor tincidunt nisl. Diam quis et orci habitant aliquam.
              Vestibulum condimentum amet massa proin varius morbi id interdum.
              In ullamcorper viverra sed massa. Varius diam vitae vestibulum
              consequat molestie hac id aliquet. Cum pharetra mattis purus velit
              morbi amet tristique amet augue. Penatibus magna morbi nibh
              ultrices. Non bibendum massa sed non amet. Vitae vel volutpat nibh
              proin in sed suspendisse aliquam augue. Ultricies libero et
              pulvinar proin dui non arcu.
            </p>
            <Image
              alt="evaluationImage"
              src="/evaluationImage.png"
              className="mt-4"
              height={80}
              width={96}
            />
          </div>
          <div className="mt-auto items-end">
            <Image
              src={"/icons/logoreportIcon.svg"}
              width={23.56}
              height={19.94}
              alt="logoreportIcon"
            />
            <h2 className="font-medium">Ezomonglory@gmail.com</h2>
            <p className="text-[#808080] text-[12px]">Sub-Admin</p>
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
              <p className="font-medium">Price_Dwight</p>
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
                  <p className="text-[#808080] text-[14px]">Creator</p>
                </div>
                <p className="h-1 w-1 rounded-full bg-[#C8C8C8]"></p>
                <div className="flex items-center space-x-1">
                  <span>
                    <Image
                      src={"/icons/music.svg"}
                      height={16}
                      width={16}
                      alt="musicIcon"
                    />
                  </span>
                  <p className="text-[#808080] text-[14px]">Artist/Musician</p>
                </div>
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
