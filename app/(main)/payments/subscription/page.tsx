import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionCard from "@/components/SubscriptionCard";

const SubscriptionFee = () => {
  return (
    <div className="flex flex-col space-y-[24px]">
      <div>
        <h2 className="text-2xl"> Our subscriptions pricing</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div>
        <Tabs defaultValue="creator" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none px-0 w-full justify-start pb-0 mb-[40px]">
            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="creator"
            >
              Creator
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="fan"
            >
              Fan
            </TabsTrigger>

            <TabsTrigger
              className="rounded-none font-normal my-0 text-[#A4A4A4] px-0 py-2 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-medium data-[state=active]:bg-transparent"
              value="investor"
            >
              Investor
            </TabsTrigger>
          </TabsList>

          <TabsContent className="flex space-x-4 items-center" value="creator">
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </TabsContent>
          <TabsContent className="flex space-x-4 items-center" value="fan">
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </TabsContent>
          <TabsContent className="flex space-x-4 items-center" value="investor">
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SubscriptionFee;
