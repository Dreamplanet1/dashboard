import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTable } from "@/components/UserTable";
import { forumAnalytics } from "@/mock/row";
import { columns } from "./forumanalyticscolumns";

const ForumAnalytics = () => {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> Forum Analytics</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex justify-around items-center space-x-10 w-full">
        <div className="space-y-2">
          <p className=" text-sm border-l-4 border-l-[#F79203] pl-2 py-0">
            Total no. of forum in app
          </p>
          <p className="text-3xl font-semibold">10</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Engagements on forums
          </p>
          <p className="text-3xl font-semibold">20m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className=" text-sm border-l-4 border-l-black pl-2 py-0">
            Active forums
          </p>
          <p className="text-3xl font-bold">28</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Inactive forums
          </p>
          <p className="text-3xl font-semibold">12</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Total no. of likes on forum
          </p>
          <p className="text-3xl font-semibold">324k.3</p>
        </div>
      </div>
      <div>
        <UserTable data={forumAnalytics} columns={columns} />
      </div>
    </div>
  );
};

export default ForumAnalytics;
