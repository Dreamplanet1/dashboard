import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTable } from "@/components/UserTable";
import { userAnalytics } from "@/mock/row";
import { columns } from "./useranalyticscolumns";

const UserAnalytics = () => {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> User Analytics</h2>
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
          <p className="text-[32px] font-medium">10.3k</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of likes in app
            </p>
          </p>
          <p className="text-[32px] font-medium">783</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total no. of creator engagements
            </p>
          </p>
          <p className="text-[32px] font-medium">378m</p>
        </div>
      </div>
      <div>
        <Tabs defaultValue="creators" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none px-0 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="creators"
            >
              Creators
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="fans"
            >
              Fans
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="investors"
            >
              Investor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="creators">
            <UserTable
              bottom={true}
              placeholder="Search for Admin Name"
              data={userAnalytics}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="fans">
            <UserTable
              bottom={true}
              placeholder="Search for Admin Name"
              data={userAnalytics}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="investors">
            <UserTable
              bottom={true}
              placeholder="Search for Admin Name"
              data={userAnalytics}
              columns={columns}
            />
            Investor
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserAnalytics;
