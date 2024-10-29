"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/assets/links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center justify-between space-y-10 ">
      <div className="flex flex-col w-full grow  space-y-[12px]">
        {NavLinks.map((item: any) => {
          const isActive =
            (path.includes(`${item.href}`) && item.href !== "/") ||
            (item.href === "/" && path === "/");
          const pathColor = isActive ? "#F75803" : "#808080";
          if (item.accordion) {
            return (
              <Accordion
                key={item.href}
                type="single"
                collapsible
                className="w-full transition-all"
              >
                <AccordionItem className="border-none py-0 " value="item-1">
                  <AccordionTrigger
                    className={cn(
                      "flex hover:no-underline items-center py-2 px-2 mx-1 w-full rounded-sm font-normal",
                      isActive
                        ? "bg-[#FFEEE6] text-[#F75803]"
                        : "bg-none text-[#808080]"
                    )}
                  >
                    <span key={item.href} className="flex items-center">
                      {React.cloneElement(item.icon, {
                        className: "mr-2 h-7 w-4",
                        pathColor,
                      })}
                      {item.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-start px-8 py-2 gap-2 text-[#808080]">
                    {item.sublink.map((sublink: any) => {
                      return (
                        <Link
                          key={sublink.href}
                          className={cn(
                            path === sublink.href ? "text-black" : ""
                          )}
                          href={sublink.href}
                        >
                          {sublink.title}
                        </Link>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center text-[16px] py-2 px-2 mx-1 w-[200px] transition-all ease-in-out duration-500 rounded-sm",
                isActive
                  ? "bg-[#FFEEE6] text-[#F75803]"
                  : "bg-none text-[#808080]"
              )}
            >
              {React.cloneElement(item.icon, {
                className: "mr-2 h-7 w-4",
                pathColor,
              })}
              {item.name}
            </Link>
          );
        })}
      </div>
      <hr />
      <button className="flex items-center justify-center space-x-2 border rounded-md w-full my-2 py-2 font-medium transition-all hover:scale-105 ">
        <span className="text-[14px]">Logout</span>
        <Image
          src={"/icons/logoutIcon.svg"}
          height={10}
          width={10}
          alt="logoutIcon"
        />
      </button>
    </div>
  );
};

export default Sidebar;
