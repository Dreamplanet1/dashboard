"use client"
import { Bell, CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="pt-[40px] pb-4 sticky  top-0 flex items-center bg-white justify-between border-b z-30">
      <div className="cursor-pointer" onClick={() => {
        router.push("/broadcast")
      }}>
        <Image
          src={"/DASHBOARDASSETS/LOGO/DASHBOARD LOGO.svg"}
          width={184}
          height={24}
          alt="Logo"
        />
      </div>
      <div className="flex items-center space-x-1">
        <div className="flex items-center space-x-3">
          <Image
            src={"/DASHBOARDASSETS/ICONS/NOTIFICATION [TOP BAR].svg"}
            width={24}
            height={24}
            alt="notificationIcon"
          />
          <Image
            src={"/DASHBOARDASSETS/ICONS/PROFILE [TOP BAR].svg"}
            width={24}
            height={24}
            alt="profileIcon"
          />
        </div>

        <h2 className="leading-[16.8px] text-[14px]">Human Resources</h2>
      </div>
    </div>
  );
};

export default Navbar;
