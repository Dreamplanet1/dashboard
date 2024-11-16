"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTable } from "@/components/UserTable";
import { userAnalytics } from "@/mock/row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import usePerformance from "@/hooks/usePerformance";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { updateActiveUser } from "@/redux/slices/performanceslice";
import { useRouter } from "next/navigation";

const UserAnalytics = () => {
  
  const { getAllPerformanceCreator, getAllPerformanceFan, getAllPerformanceInvestor, getCreatorPerformance, getFanInvestorPerformance } = usePerformance();
  const { allPerformanceCreator, allPerformanceFan, allPerformanceInvestor, stats } = useSelector((state: RootState) => state.performance);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
   
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "full_name",
      header: "Creator name",
      cell: ({ row }) => {
        const profile = row.original
        return (
          <div className="flex items-center space-x-1">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src={profile?.image}
              alt="@shadcn"
            />
            <AvatarFallback>{profile?.full_name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p>{profile?.full_name}</p>
            <p className="text-[#A4A4A4]">@{profile?.username}</p>
          </div>
        </div>
        )
       
      },
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "subscription_plan",
      header: "Subscription type",
    },
    {
      accessorKey: "engagement",
      header: "Engagement",
      cell: ({ row }) => (
        <p className="flex items-center text-[#2BAC47] ">
          <span className="mr-2">
            <Image
              src={"/icons/engagementIcon.svg"}
              height={10}
              width={10}
              alt="engagementIcon"
            />
          </span>
          {row.getValue("engagement")}
        </p>
      ),
    },
    {
      accessorKey: "analytics",
      header: "",
      cell: ({ row }) => {
        const profile = row.original;
        return (
          <p onClick={async() => {
           await getCreatorPerformance(profile?.id);
           dispatch(updateActiveUser(profile));
           router.push(`/performance/useranalytics/creator/${profile?.full_name}`)

          }} className="text-[#7E2D02] font-medium cursor-pointer">
          View Analytics
        </p>
        )
      
      },
    },
  ];
  const columnsFan: ColumnDef<any>[] = [
    {
      accessorKey: "full_name",
      header: "Creator name",
      cell: ({ row }) => {
        const profile = row.original
        return (
          <div className="flex items-center space-x-1">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src={profile?.image}
              alt="@shadcn"
            />
            <AvatarFallback>{profile?.full_name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p>{profile?.full_name}</p>
            <p className="text-[#A4A4A4]">@{profile?.username}</p>
          </div>
        </div>
        )
       
      },
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "subscription_plan",
      header: "Subscription type",
    },
    {
      accessorKey: "engagement",
      header: "Engagement",
      cell: ({ row }) => (
        <p className="flex items-center text-[#2BAC47] ">
          <span className="mr-2">
            <Image
              src={"/icons/engagementIcon.svg"}
              height={10}
              width={10}
              alt="engagementIcon"
            />
          </span>
          {row.getValue("engagement")}
        </p>
      ),
    },
    {
      accessorKey: "analytics",
      header: "",
      cell: ({ row }) => {
        const profile = row.original;
        return (
          <p onClick={async() => {
           await getFanInvestorPerformance(profile?.id);
           dispatch(updateActiveUser(profile));
           router.push(`/performance/useranalytics/fan/${profile?.full_name}`)

          }} className="text-[#7E2D02] font-medium cursor-pointer">
          View Analytics
        </p>
        )
      
      },
    },
  ];
  
  useEffect(() => {
  getAllPerformanceCreator();
  }, [])
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="text-2xl"> User Analytics</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center space-x-[121px]">
        <div className="space-y-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">Total no. of users</p>
          </p>
          <p className="text-[32px] font-Recoleta font-medium">{stats?.total_users}</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of likes in app
            </p>
          </p>
          <p className="text-[32px] font-medium font-Recoleta">{stats?.total_likes}</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of creator engagements
            </p>
          </p>
          <p className="text-[32px] font-medium font-Recoleta">{stats?.total_engagements}</p>
        </div>
      </div>
      <div>
        <Tabs defaultValue="creators" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none px-0 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="creators"
              onClick={() => {
                getAllPerformanceCreator()
              }}
            >
              Creators
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="fans"
              onClick={() => {
                getAllPerformanceFan()
              }}
            >
              Fans
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="investors"
              onClick={() => {
                getAllPerformanceInvestor()
              }}
            >
              Investor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="creators">
            <UserTable
             
              data={allPerformanceCreator}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="fans">
            <UserTable
             
              data={allPerformanceFan}
              columns={columnsFan}
            />
          </TabsContent>
          <TabsContent value="investors">
            <UserTable
             
              data={allPerformanceInvestor}
              columns={columnsFan}
            />
            Investor
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserAnalytics;
