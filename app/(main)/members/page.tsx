import { UserTable } from "@/components/UserTable";
import { data } from "@/mock/row";
import { columns } from "./usercolumns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Members = () => {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> Onboarded Users</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div>
        <Tabs defaultValue="all" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="all"
            >
              All (12,398)
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="investor"
            >
              Investor
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="creator"
            >
              Creator
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="fan"
            >
              Fan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <UserTable data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="investor">
            <UserTable data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="creator">
            <UserTable data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="fan">
            <UserTable data={data} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Members;
