"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { UserTable } from "@/components/UserTable";
import { data } from "@/mock/row";
import { EllipsisVertical } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useForum from "@/hooks/useForum";
import { useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";



const Forum = () => {
  const {allForums} = useSelector((state: RootState) => state.forum);
  const {getAllForums, forumLoading} = useForum();
  useEffect(() => {
    getAllForums()
   },[])
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name of forum",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <p>{row.getValue("status")}</p>
      )
        // row.getValue("status") === "Activated" ? (
        //   <div className="flex items-center space-x-1 border border-[#2BAC47] bg-green-100 text-xs font-medium w-max rounded-xl py-1 px-2">
        //     <span>
        //       <Image
        //         src={"/icons/ActivateIcon.svg"}
        //         width={10}
        //         height={10}
        //         alt="activateIcon"
        //       />
        //     </span>
        //     <p>{row.getValue("status")}</p>
        //   </div>
        // ) : (
        //   <div className="flex items-center space-x-1 border border-[#C83532] bg-red-100 text-xs font-medium w-max rounded-xl py-1 px-2">
        //     <span>
        //       <Image
        //         src={"/icons/DeactivateIcon.svg"}
        //         width={10}
        //         height={10}
        //         alt="deactivateIcon"
        //       />
        //     </span>
        //     <p>{row.getValue("status")}</p>
        //   </div>
        // ),
    },
    {
      accessorKey: "noOfMembers",
      header: "No. of members",
    },
    {
      accessorKey: "adminName",
      header: "Admin",
    },
    
    {
      accessorKey: "createdAt",
      header: "Created date",
      cell: ({ row }) => {
        const createdAt = new Date(row.getValue("createdAt"));
        const formattedDate = createdAt.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
    
        return <p>{formattedDate}</p>;
      }
    },

    {
      accessorKey: "options",
      header: "",
      cell: ({ row }) => {
        const profile = row.original;

        return <EllipsisVertical className="h-4 w-4" />;
      },
    },
  ];

  return (
    <div className="flex flex-col space-y-7">
      {forumLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col items-center justify-center w-[432px] h-[160px] rounded-lg shadow-lg space-y-[8px]">
        <FadeLoader color="#7E2D02" />
        <p className="text-[#111810] text-[20px]">Processing...</p>
      </div>
    </div> 
  )}
      <div>
        <h2 className=" text-2xl"> Forum</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div>
        <UserTable
          
          data={allForums}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Forum;
