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
      <div className="flex items-center space-x-10">
        <div className="space-y-2">
          <p className=" text-sm border-l-4 border-l-[#F79203] pl-2 py-0">
            Total no. of users
          </p>
          <p className="text-3xl font-semibold">10.3k</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Total no. of likes in app
          </p>
          <p className="text-3xl font-semibold">783</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className=" text-sm border-l-4 border-l-black pl-2 py-0">
            Total no. of creator engagements
          </p>
          <p className="text-3xl font-bold">342m</p>
        </div>
      </div>
      <div>
        <Tabs defaultValue="creators" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="creators"
            >
              Creators
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="fans"
            >
              Fans
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="investor"
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
          <TabsContent value="investor">
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
