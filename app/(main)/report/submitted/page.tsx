"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SubmittedReport = () => {
  const reportData = [
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
    {
      name: "Shaun Dan",
      date: "Sent 30 Jun 2024",
    },
  ];
  const router = useRouter();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-medium text-2xl"> Submitted Report</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6 rounded-md">
        {reportData.map((report) => (
          <div
            onClick={() => {
              router.push("/evaluationreportFilled");
            }}
            className="w-50 border cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center bg-[#F1F1F1]">
              <Image
                src={"/icons/reportCard.svg"}
                height={70}
                width={70}
                alt="reportcard"
                className="py-4"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="font-medium text-[#111810]">{report.name}</h2>
              <p className="text-[12px] text-[#A4A4A4]">{report.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedReport;
