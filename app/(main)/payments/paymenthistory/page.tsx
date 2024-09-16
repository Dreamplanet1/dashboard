import { UserTable } from "@/components/UserTable";
import { data } from "@/mock/row";
import { columns } from "./paymentcolumns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentHistory = () => {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl"> Payment history</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center space-x-10">
        <div className="space-y-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#F79203] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of donation
            </p>
          </p>
          <p className="text-[32px] font-medium">$124.56m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#BF3100] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of wallet top-up
            </p>
          </p>
          <p className="text-[32px] font-medium">$567.3m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="flex items-center text-sm  py-0 space-x-[4px]">
            <div className="w-[3px] h-[12px] rounded-[32px] bg-[#111810] "></div>
            <p className="text-[#373737] text-[14px]">
              Total amount of subscription
            </p>
          </p>
          <p className="text-[32px] font-medium">$89.278</p>
        </div>
      </div>
      <div>
        <UserTable
          top={true}
          placeholder="Search username, full name..."
          data={data}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
