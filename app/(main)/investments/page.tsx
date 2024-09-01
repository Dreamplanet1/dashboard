"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTable } from "@/components/UserTable";
import { userAnalytics } from "@/mock/row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const row = [
  {
    name: "Olivia.Buckridge",
    investor: "Brent Skiles-Reynolds",
    amount: "$26,000",
    country: "Nigeria",
    email: "Olivia_Buckridge@hotmail",
    phone: "+234 807 976 2056",
  },
  {
    name: "Olivia.Buckridge",
    investor: "Brent Skiles-Reynolds",
    amount: "$26,000",
    country: "Nigeria",
    email: "Olivia_Buckridge@hotmail",
    phone: "+234 807 976 2056",
  },
];

const dreamRow = [
  {
    name: "Olivia.Buckridge",
    amount: "$26,000",
    country: "Nigeria",
    email: "Olivia_Buckridge@hotmail",
    phone: "+234 807 976 2056",
  },
  {
    name: "Olivia.Buckridge",
    amount: "$26,000",
    country: "Nigeria",
    email: "Olivia_Buckridge@hotmail",
    phone: "+234 807 976 2056",
  },
];

const Investments = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Investment (Creator)",
      cell: ({ row }) => (
        <div className="flex items-center space-x-1">
          <Avatar>
            <AvatarImage
              className="object-contain"
              src="https://s3-alpha-sig.figma.com/img/ca9b/8186/93a3470ebce5d867977c8a74e082ca1a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmd0M4meW0V58p-r2-hSqLTvPlF6zkdRjJXsSirQv9i3qlMCtMCkTBm5xsWSFF08dlsuJpqXm7wFwLQWT5rmIMiGWha2OO8~WwhlTNSRURFscCvdyYuMxuELIHrrG-JBayIVp-r7py7aNBAbf~NKndO~IPQOJh~TavdlhmrBZdDWHfZ2W~WIu6la4E16WSCUXgQpvOLv6dtHTnWbI6YBOVRpoqIPufyDaDnLsHTWp-KdnVFMYCDeZWVCfpGf1Xn32RLHvJhI9R-bfIUa-~gozZdTcm2wtstOvizayn0DCzm40lsDIYvnDYTF73rvcL5Sp~DjQv4vgFjyzL5vdQm87A__"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[14px] text-[#373737]">{row.getValue("name")}</p>
            <p className="text-[#A4A4A4]">@{row.getValue("name")}</p>
          </div>
        </div>
      ),
    },

    {
      accessorKey: "investor",
      header: "Investor",
      cell: ({ row }) => (
        <p className="text-[#373737] text-[14px]">{row.getValue("investor")}</p>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <p className="text-[#2BAC47] text-[14px]">{row.getValue("amount")}</p>
      ),
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <p className="text-[#373737] text-[14px]">{row.getValue("country")}</p>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <p className="text-[#373737] text-[14px]">{row.getValue("email")}</p>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone No.",
      cell: ({ row }) => (
        <p className="text-[#373737] text-[14px]">{row.getValue("phone")}</p>
      ),
    },
  ];
  const dreamColumns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Investor",
      cell: ({ row }) => (
        <div>
          <p className="text-[14px] text-[#373737]">{row.getValue("name")}</p>
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <p className="text-[#2BAC47] text-[14px]">{row.getValue("amount")}</p>
      ),
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <p className="text-[#373737] text-[14px]">{row.getValue("country")}</p>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <p className="text-[#F75803] text-[14px]">{row.getValue("email")}</p>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone No.",
      cell: ({ row }) => (
        <p className="text-[#F75803] text-[14px]">{row.getValue("phone")}</p>
      ),
    },
  ];

  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl">Investment</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center space-x-20">
        <div className="space-y-2">
          <p className=" text-sm border-l-4 border-l-[#007BFF] pl-2 py-0">
            Total Amount Invested
          </p>
          <p className="text-3xl font-semibold">$598,784.20</p>
        </div>
        <div className="border-l space-y-2 pl-2">
          <p className="text-sm border-l-4 border-l-[#2BAC47]  pl-2 py-0">
            No. of Investor
          </p>
          <p className="text-3xl font-semibold">23</p>
        </div>
      </div>
      <div>
        <Tabs defaultValue="creator" className="">
          <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="creator"
            >
              Invest(Creator)
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
              value="dream"
            >
              Invest(Dream Planet)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="creator">
            <UserTable
              bottom={true}
              placeholder="Search for creator"
              data={row}
              columns={columns}
            />
          </TabsContent>
          <TabsContent value="dream">
            <UserTable
              bottom={true}
              placeholder="Search for investor"
              data={dreamRow}
              columns={dreamColumns}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Investments;
