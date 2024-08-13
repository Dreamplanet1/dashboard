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
          <p className=" text-sm border-l-4 border-l-[#F79203] pl-2 py-0">
            Total amount of donation
          </p>
          <p className="text-3xl font-semibold">$124.56m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#BF3100]  pl-2 py-0">
            Total amount of wallet top-up
          </p>
          <p className="text-3xl font-semibold">$924.26m</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className=" text-sm border-l-4 border-l-black pl-2 py-0">
            Total amount of subscription
          </p>
          <p className="text-3xl font-bold">$328.34m</p>
        </div>
      </div>
      <div>
        <UserTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default PaymentHistory;
