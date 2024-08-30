"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserTable } from "@/components/UserTable";
import { campaignData } from "@/mock/row";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const profile = {
  name: "Randall_Henn",
  reason: "Video Project",
  raised: "$8,000",
  starter: "@RandallHenn89",
};

const Campaign = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Creator",
      cell: ({ row }) => (
        <div className="flex items-center space-x-1">
          <Avatar>
            <AvatarImage
              className="object-contain"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p>{row.getValue("name")}</p>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "amountPaid",
      header: "Amount",
      cell: ({ row }) => (
        <p className="text-[14px]">
          <span className="text-[14px] text-[#2BAC47]">
            {row.getValue("amountPaid")}
          </span>
        </p>
      ),
    },
    {
      accessorKey: "reason",
      header: "Reason",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("reason")}</p>
      ),
    },

    {
      accessorKey: "duration",
      header: "Duration",
      cell: ({ row }) => (
        <p className="text-[14px] text-[#373737]">{row.getValue("duration")}</p>
      ),
    },
    {
      accessorKey: "options",
      header: "",
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openSheet}
              >
                <span>
                  <Image
                    src={"/icons/more.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>View info</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openDialog}
              >
                <span>
                  <Image
                    src={"/icons/stop.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Stop Campaign</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center space-x-2"
                onClick={openSheet}
              >
                <span>
                  <Image
                    src={"/icons/delete.svg"}
                    alt="moreIcon"
                    width={16.25}
                    height={16.25}
                  />
                </span>
                <p>Delete</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="grid grid-cols-8 space-x-4">
      <section className="col-span-6 flex flex-col space-y-7">
        <div>
          <h2 className="font-medium text-2xl">Campaign</h2>
          <p className="text-sm text-[#A8A8A8]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div>
          <Tabs defaultValue="active">
            <TabsList className="space-x-7 bg-transparent border-b rounded-none p-1 w-full justify-start pb-0">
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="active"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="processing"
              >
                Processing
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="stopped"
              >
                Stopped
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="performed"
              >
                Most Performed
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none my-0 data-[state=active]:border-b-[#F75803] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent"
                value="completed"
              >
                Completed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <UserTable data={campaignData} columns={columns} />
            </TabsContent>
            <TabsContent value="processing">
              <UserTable data={campaignData} columns={columns} />
            </TabsContent>
            <TabsContent value="stopped">
              <UserTable data={campaignData} columns={columns} />
            </TabsContent>
            <TabsContent value="performed">
              <UserTable data={campaignData} columns={columns} />
            </TabsContent>
            <TabsContent value="completed">
              <UserTable data={campaignData} columns={columns} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="col-span-2 border">
        <h2 className="p-2 border-b font-semibold">Campaign Purpose (3)</h2>
        <Accordion type="single" collapsible>
          <AccordionItem className="px-2" value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Artist/Musician <span className="text-[#F75803]">(3)</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#7E2D02]">* Lawrence Oyor</p>
              <p className="text-[#7E2D02]">* Theophilus Sunday</p>
              <p className="text-[#7E2D02]">* Godswill Oyor</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="px-2" value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Content creator
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#7E2D02]">* Lawrence Oyor</p>
              <p className="text-[#7E2D02]">* Theophilus Sunday</p>
              <p className="text-[#7E2D02]">* Godswill Oyor</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="px-2" value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Filmmaker <span className="text-[#F75803]">(3)</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#7E2D02]">* Lawrence Oyor</p>
              <p className="text-[#7E2D02]">* Theophilus Sunday</p>
              <p className="text-[#7E2D02]">* Godswill Oyor</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="px-2" value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Songwriter <span className="text-[#F75803]">(3)</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#7E2D02]">* Lawrence Oyor</p>
              <p className="text-[#7E2D02]">* Theophilus Sunday</p>
              <p className="text-[#7E2D02]">* Godswill Oyor</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
        <SheetContent className="overflow-y-auto scrollbar-hide">
          <SheetHeader>
            <SheetTitle>Campaign</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full  grid-cols-3">
                <TabsTrigger value="details">
                  <p className="text-[14px]">Details</p>
                </TabsTrigger>
                <TabsTrigger value="donation">
                  <p className="text-[14px]">Donation</p>
                </TabsTrigger>
                <TabsTrigger value="verification">
                  <p className="text-[14px]">Verification Details</p>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <div className="flex items-center space-x-1">
                  <Avatar>
                    <AvatarImage
                      className="object-contain"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-[20px] font-semibold">{profile.name}</p>
                    <div className="flex items-center space-x-2">
                      <p className="flex items-center space-x-1">
                        <span>
                          <Image
                            src={"/icons/profile.svg"}
                            height={14}
                            width={14}
                            alt="profileIcon"
                          />
                        </span>
                        <p>Creator</p>
                      </p>
                      <p className="h-1 w-1 rounded-full bg-[#C8C8C8]"></p>
                      <p className="flex items-center space-x-1">
                        <span>
                          <Image
                            src={"/icons/music.svg"}
                            height={14}
                            width={14}
                            alt="musicIcon"
                          />
                        </span>
                        <p>Artist/Musician</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex w-full justify-between items-center border-b py-2">
                    <p className="text-[#A4A4A4]">Creator Name</p>
                    <p>{profile.name}</p>
                  </div>
                  <div className="flex w-full justify-between items-center border-b py-2">
                    <p className="text-[#A4A4A4]">Reason</p>
                    <p>{profile.reason}</p>
                  </div>
                  <div className="flex w-full justify-between items-center border-b py-2">
                    <p className="text-[#A4A4A4]">Raised</p>
                    <p className="text-[#2BAC47]">{profile.raised}</p>
                  </div>
                  <div className="flex w-full justify-between items-center border-b py-2">
                    <p className="text-[#A4A4A4]">Starter</p>
                    <p className="text-[#F75803]">{profile.starter}</p>
                  </div>
                </div>
                <Button className="w-full bg-[#C83532] hover:bg-[#C83532] transition-all hover:scale-105 active:scale-95 text-white py-2 text-[14px]">
                  Stop Campaign
                </Button>
              </TabsContent>
              <TabsContent value="donation">
                <div>
                  <div className="flex justify-between items-center py-2 w-full border-b">
                    <div className="flex items-center space-x-1">
                      <Avatar>
                        <AvatarImage
                          className="object-contain"
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[14px] font-semibold">
                          {profile.name}
                        </p>
                        <p className="text-[#A4A4A4] text-[14px]">14hr ago</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#2BAC47]">+ $30</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 w-full border-b">
                    <div className="flex items-center space-x-1">
                      <Avatar>
                        <AvatarImage
                          className="object-contain"
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[14px] font-semibold">
                          {profile.name}
                        </p>
                        <p className="text-[#A4A4A4] text-[14px]">14hr ago</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#2BAC47]">+ $30</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 w-full border-b">
                    <div className="flex items-center space-x-1">
                      <Avatar>
                        <AvatarImage
                          className="object-contain"
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[14px] font-semibold">
                          {profile.name}
                        </p>
                        <p className="text-[#A4A4A4] text-[14px]">14hr ago</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#2BAC47]">+ $30</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="verification">
                <div className="py-4">
                  <div>
                    <p className="text-[14px] font-semibold">Media</p>
                    <Image
                      src={"/mediaImage.png"}
                      alt="mediaImage"
                      width={440}
                      height={240}
                    />
                  </div>
                  <div className="my-4">
                    <p className="text-[14px] font-semibold">Information</p>
                    <div className="flex w-full justify-between items-center border-b py-2">
                      <p className="text-[#A4A4A4] text-[14px]">Creator Name</p>
                      <p className="text-[14px]">{profile.name}</p>
                    </div>
                    <div className="flex w-full justify-between items-center border-b py-2 ">
                      <p className="text-[#A4A4A4] text-[14px]">Reason</p>
                      <p className="text-[14px]">{profile.reason}</p>
                    </div>
                    <div className="flex w-full justify-between items-center border-b py-2">
                      <p className="text-[#A4A4A4] text-[14px]">Raised</p>
                      <p className="text-[#2BAC47] text-[14px]">
                        {profile.raised}
                      </p>
                    </div>
                    <div className="flex w-full justify-between items-center border-b py-2">
                      <p className="text-[#A4A4A4] text-[14px]">Reason</p>
                      <p className="text-[14px]">{profile.reason}</p>
                    </div>
                    <p className="text-[14px] ">
                      Who else is ready to turn up at the meet and greet for
                      Raba? 🎉 Hit that like button if you're joining us! Let's
                      make this gathering unforgettable with good vibes, great
                      music, and even better company. See you there! 🔥
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold">
                      Starter's Facial Verification
                    </p>
                    <Image
                      src={"/facial.png"}
                      width={148}
                      height={119}
                      alt="facial"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chrisbel</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="flex items-center justify-between">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://s3-alpha-sig.figma.com/img/f3d2/faf9/56ae76eb7b82a102364b9b9a8f5a7056?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ha4KHcz4sEhTV8h5L5zQyOmupyW9L1aum5W3cIH38owlyw3W7rbpChkO6wOvyK878~Eip92GyS7vrpFKsBEqI2Kij6uPHmMmRnqD5EYycd8eN8x1d0xYBYMz2ZQ28sXQAVgH0JJbSbkxQ83x5XJLxp78sQ5XHjtBVDbSPqKH6~f79xTlW197QFqU5dJTSJ7~dI4YmdsX-h6~CxYMBXln8nDASyJjSmj6QypyE7ic5yN4A9qLIsf0-vbc-rm7oGaYueyVnP6oJzNwvqrvPS1vbQjywznBk2GG0~ovSkz6MrhKgxEeBDK1bL-ln1u9gGcB2sS5HwBCBhnb3LLOKjUj0Q__"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button className="bg-[#F75803] hover:bg-[#F75803] text-white rounded-3xl hover:scale-105 active:scale-95 transition-all">
                <PlusIcon size={15} /> <p className="text-14px">Join Forum</p>
              </Button>
            </div>
            <div className="border-b py-2">
              <p className="font-semibold">Chrisbel Otu</p>
              <p className="text-[14px] text-[#A4A4A4]">Fan</p>
              <p className="text-[14px]">
                Discovering new tunes is my passion! 🎶.💫 Also, I sell musical
                equipment—join my forum for all things music!
              </p>
            </div>
            <div>
              <p className="text-[#A4A4A4] text-[14px] mb-2">My forum</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      className="object-cover"
                      src="https://s3-alpha-sig.figma.com/img/92ef/bb4d/d3cdf215882d1ea824e192e5d759849c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2Qc1~tTvteQ1HYetrN2qN1-gshG1A8t~1gCMxNOyXUSoowKUgs0sQs2OQfV46IZa4G8P1eyyegluErwU6K9YcEA56SX-E10pP9CWt9h~EJDGISE39OxaaZD0U3cH6w9v7oNd71ZP0fh~0879EYlOl~sRJpx~n~raRrDJWcGspeRhGpe2St70RbtQ4hU8r7l1QWlEmh-9WX9Ac0cZFUUeqCTNgQ5Dhk26J8gxAhgHNOh7ZXy3qQoYlhiju9FgHRsBNYZcrO2KMy~waH9j-SViWPIPW4DyaShSCWau4td2OdOUbjtX1OjnymYI~hQEn6SOixUZilUbvoAJGonBRJptg__"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Chris quality sounds</p>
                    <p className="text-[14px] text-[#808080]">589k members</p>
                  </div>
                </div>
                <div>
                  <PlusIcon
                    color="#F75803"
                    size={18}
                    className="hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#A4A4A4] text-[14px] mb-2">
                Other forums they engage with
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      className="object-cover"
                      src="https://s3-alpha-sig.figma.com/img/2432/050e/ed50c86e382b5738589ccdcca698436b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FBi~2K9PmPLSsvVf-rIyH5enfvD4Kc0hofkMylJAxUKQbOz46XYUxxhxQ2gwyuhFebyts2~9ZeJQHJjjtiTzHGLwMPDidgNoxzdzgFcuWjVy7lJsuXGEHj5cC2eUjrVUlHZ1urpxghQR0bI79HHU7oIVzJ6gYEbbbPUBL8uUmtmSvNyfb1VdljAw~ME6CtmnlIapRk~-lpIy~IrWeybgv~zL07sYUSkW2FV-m5jDLhPywvBi83mMzrR7bIr5phJc23dnuubhNPBE9B6C5M3NRhm5wxwVkDqygX5EW7puJyunUVWppeKpqPIG0tu0sDD6iUPEZ1dZpjhXqc1ove5Xgw__"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Chris quality sounds</p>
                    <p className="text-[14px] text-[#808080]">5m members</p>
                  </div>
                </div>
                <div>
                  <PlusIcon
                    color="#F75803"
                    size={18}
                    className="hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Campaign;
