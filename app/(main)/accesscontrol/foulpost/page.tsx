"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const FoulPost = () => {
  const [isOpen, setisOpen] = useState(false);
  const closeDialog = () => setisOpen(false);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const closeDeleteDialog = () => setisDeleteOpen(false);
  const [isRestoreOpen, setisRestoreOpen] = useState(false);
  const closeRestoreDialog = () => setisRestoreOpen(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const closeButton = document.querySelector(
        "button.absolute.right-4.top-4"
      );
      console.log(closeButton);

      if (closeButton) {
        closeButton.remove();
      }
    }, 0); // Delay of 0 ensures it happens after the render cycle

    return () => clearTimeout(timer);
  }, [isOpen, setisOpen]);
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h2 className="font-medium text-2xl">Foul Post</h2>
        <p className="text-sm text-[#A8A8A8]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Repeatable Card */}
        <div
          className="border rounded-md transition-all hover:scale-105 active:scale-90"
          onClick={() => {
            setisOpen(true);
          }}
        >
          <div className="relative w-full h-[201px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/0478/42ba/3c812f02a3f72966c72e98d38f88eb79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Px~UHe0rbpoAmXUAIQ47qqsTrEbemJLPbVZAfIeEMY~Vv8pWLAU9xEwBGYR3bvpNE3uylIQYsO5oc6OREikMUA962XeTyW-iuNsb4S9Ir0mhpJbPmGyW32xX9RvAX2Y3lKr0QdcqCJ9S8WlrDM-eN4RR5qzHp8bF8764LfD3tXxVeeQL71qJTR6nZ5ewq7Xm2iefDAbLKpFRdAtu5KFL3zOI4Tey4gdKyz8ySLMHsXZemKYiyTfW483N5J0QhxcNVx1hc3y4d8Kp1iyaJNv4oQavOyzfNqkzB08FDsXtOGVWbEJOF8On-nWSHDyTBUOb4rjLuQDmmKrz9F3iZs5K~A__"
              layout="fill"
              objectFit="cover"
              alt="foulpost"
            />
          </div>
          <p className="text-[14px] my-2 text-[#5B5B5B] px-4">
            Lorem ipsum dolor sit amet consectetur. Ipsum...view more.
          </p>
          <div className="flex space-x-4 my-2 px-4">
            <p className="text-[#A4A4A4] text-[12px] flex items-center space-x-1">
              <span className="mr-2">
                <Image
                  src={"/icons/likeIcon.svg"}
                  height={14}
                  width={14}
                  alt="likeicon"
                />
              </span>
              1,000,645
            </p>
            <div className="border-l border-[#E0E0E0] h-4"></div>
            <p className="text-[#A4A4A4] text-[12px] flex items-center">
              <span className="mr-2">
                <Image
                  src={"/icons/messageIcon.svg"}
                  height={14}
                  width={14}
                  alt="messageicon"
                />
              </span>
              1,000,645
            </p>
          </div>
        </div>
        <div className="border rounded-md transition-all hover:scale-105 active:scale-90">
          <div className="relative w-full h-[201px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/435c/0823/e0826fd756a44c598ceda33bb41512ce?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gk0deDW6SScG5j2lKWVBIVbfNKVbeExT2vSvXXrlm1Z85it1xYn5JBarK65h86BonGHow5-foD4U-Xlyt8bGqW5HubQD8I2CWaqQ0krdKk0KTj8HG1RfOfKW1okYvZhRAyHAhE9Zit2jnUFmZGNejVrt~FDYNVgjoYAXrqufREYQtwDywS2HLcP1wa6OYWkuwrF-Ljrr20EBzosE6MYhTM8UTVipv7SwWjWcDoGT8NPEQVQUhVkZCu6kTC3Srs~fDTc-4DQUrpd9S67O7oVzPKwT7Wpds2-3jt6FDuTuMfQz9Rp~qFW9cjtlST~2ts0dQq-EQ~s8gQjJRk8zMyytQA__"
              layout="fill"
              objectFit="cover"
              alt="foulpost"
            />
          </div>
          <p className="text-[14px] my-2 text-[#5B5B5B] px-4">
            Lorem ipsum dolor sit amet consectetur. Ipsum...view more.
          </p>
          <div className="flex space-x-4 my-2 px-4">
            <p className="text-[#A4A4A4] text-[12px] flex items-center space-x-1">
              <span className="mr-2">
                <Image
                  src={"/icons/likeIcon.svg"}
                  height={14}
                  width={14}
                  alt="likeicon"
                />
              </span>
              1,000,645
            </p>
            <div className="border-l border-[#E0E0E0] h-4"></div>
            <p className="text-[#A4A4A4] text-[12px] flex items-center">
              <span className="mr-2">
                <Image
                  src={"/icons/messageIcon.svg"}
                  height={14}
                  width={14}
                  alt="messageicon"
                />
              </span>
              1,000,645
            </p>
          </div>
        </div>
        <div className="border rounded-md transition-all hover:scale-105 active:scale-90">
          <div className="relative w-full h-[201px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/36ec/d26e/856e11cbb50e46ea3636fa8f97ce5ebf?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W9x6bEzfbJdm31KgBmEwTDMtxctRperr0WbhCtUsLfunbZEujzZTLt-zw3bpsgLhgB4HxToH75UpmgjDDZTR1liy0vhncAyBsC2eoeEAR7sw0FQabbpsJ0AVHMQLotrGNAdjZa0wF7lz92Le4OVgK3mkDK~SiGsCsk8dcwJgobqMPmZyKMlGvHb0KiDlrmla7tSf0GPMJH~G6oR167J93wQqNnM-gLmT6rTyC1HQcKmwvTcXB8R-ps98pbphPGWLSOrdoImWvqhmbfUWk~MC4J9xY188Q28n-rrFNXNNQXZ~hkJeYRZIRfC0X2L4LMACB9v98gH7RBjtQiSBcwmtxw__"
              layout="fill"
              objectFit="cover"
              alt="foulpost"
            />
          </div>
          <p className="text-[14px] my-2 text-[#5B5B5B] px-4">
            Lorem ipsum dolor sit amet consectetur. Ipsum...view more.
          </p>
          <div className="flex space-x-4 my-2 px-4">
            <p className="text-[#A4A4A4] text-[12px] flex items-center space-x-1">
              <span className="mr-2">
                <Image
                  src={"/icons/likeIcon.svg"}
                  height={14}
                  width={14}
                  alt="likeicon"
                />
              </span>
              1,000,645
            </p>
            <div className="border-l border-[#E0E0E0] h-4"></div>
            <p className="text-[#A4A4A4] text-[12px] flex items-center">
              <span className="mr-2">
                <Image
                  src={"/icons/messageIcon.svg"}
                  height={14}
                  width={14}
                  alt="messageicon"
                />
              </span>
              1,000,645
            </p>
          </div>
        </div>
        <div className="border rounded-md transition-all hover:scale-105 active:scale-90">
          <div className="relative w-full h-[201px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/0478/42ba/3c812f02a3f72966c72e98d38f88eb79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Px~UHe0rbpoAmXUAIQ47qqsTrEbemJLPbVZAfIeEMY~Vv8pWLAU9xEwBGYR3bvpNE3uylIQYsO5oc6OREikMUA962XeTyW-iuNsb4S9Ir0mhpJbPmGyW32xX9RvAX2Y3lKr0QdcqCJ9S8WlrDM-eN4RR5qzHp8bF8764LfD3tXxVeeQL71qJTR6nZ5ewq7Xm2iefDAbLKpFRdAtu5KFL3zOI4Tey4gdKyz8ySLMHsXZemKYiyTfW483N5J0QhxcNVx1hc3y4d8Kp1iyaJNv4oQavOyzfNqkzB08FDsXtOGVWbEJOF8On-nWSHDyTBUOb4rjLuQDmmKrz9F3iZs5K~A__"
              layout="fill"
              objectFit="cover"
              alt="foulpost"
            />
          </div>
          <p className="text-[14px] my-2 text-[#5B5B5B] px-4">
            Lorem ipsum dolor sit amet consectetur. Ipsum...view more.
          </p>
          <div className="flex space-x-4 my-2 px-4">
            <p className="text-[#A4A4A4] text-[12px] flex items-center space-x-1">
              <span className="mr-2">
                <Image
                  src={"/icons/likeIcon.svg"}
                  height={14}
                  width={14}
                  alt="likeicon"
                />
              </span>
              1,000,645
            </p>
            <div className="border-l border-[#E0E0E0] h-4"></div>
            <p className="text-[#A4A4A4] text-[12px] flex items-center">
              <span className="mr-2">
                <Image
                  src={"/icons/messageIcon.svg"}
                  height={14}
                  width={14}
                  alt="messageicon"
                />
              </span>
              1,000,645
            </p>
          </div>
        </div>

        {/* Repeat the same structure for other cards */}
      </div>

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[375px] p-0 rounded-sm">
          <div className="flex px-2 py-2 items-center justify-between">
            <div className="flex items-center space-x-1">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={
                    "https://s3-alpha-sig.figma.com/img/ca9b/8186/93a3470ebce5d867977c8a74e082ca1a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmd0M4meW0V58p-r2-hSqLTvPlF6zkdRjJXsSirQv9i3qlMCtMCkTBm5xsWSFF08dlsuJpqXm7wFwLQWT5rmIMiGWha2OO8~WwhlTNSRURFscCvdyYuMxuELIHrrG-JBayIVp-r7py7aNBAbf~NKndO~IPQOJh~TavdlhmrBZdDWHfZ2W~WIu6la4E16WSCUXgQpvOLv6dtHTnWbI6YBOVRpoqIPufyDaDnLsHTWp-KdnVFMYCDeZWVCfpGf1Xn32RLHvJhI9R-bfIUa-~gozZdTcm2wtstOvizayn0DCzm40lsDIYvnDYTF73rvcL5Sp~DjQv4vgFjyzL5vdQm87A__"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[14px] flex items-center space-x-2 font-semibold">
                  Mack.Sprinka
                  <span className="flex items-center space-x-2">
                    <div className="h-1 w-1 ml-2 bg-[#A4A4A4] rounded-full"></div>
                    <p className="text-[#A4A4A4] text-[12px]">3d</p>
                  </span>
                </p>
                <p className="text-[12px] text-[#A4A4A4]">Creator</p>
              </div>
            </div>
            <div>
              <DropdownMenu>
                <div className="relative">
                  <DropdownMenuTrigger asChild>
                    <div className="w-4 h-4 cursor-pointer text-[#808080]">
                      <Ellipsis className="w-4 h-4 cursor-pointer text-[#808080]" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => {
                        setisOpen(false);
                        setisDeleteOpen(true);
                      }}
                    >
                      <Image
                        src="/icons/deletepost.svg"
                        alt="deletepost"
                        width={14}
                        height={14}
                        className="mr-3"
                      />
                      <span>Delete Post</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setisOpen(false);
                        setisRestoreOpen(true);
                      }}
                    >
                      <Image
                        src="/icons/restorepost.svg"
                        alt="restorepost"
                        width={14}
                        height={14}
                        className="mr-3"
                      />
                      <span>Restore Post</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            </div>
          </div>
          <div className=" rounded-md transition-all ">
            <div className="relative w-full h-[201px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/435c/0823/e0826fd756a44c598ceda33bb41512ce?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gk0deDW6SScG5j2lKWVBIVbfNKVbeExT2vSvXXrlm1Z85it1xYn5JBarK65h86BonGHow5-foD4U-Xlyt8bGqW5HubQD8I2CWaqQ0krdKk0KTj8HG1RfOfKW1okYvZhRAyHAhE9Zit2jnUFmZGNejVrt~FDYNVgjoYAXrqufREYQtwDywS2HLcP1wa6OYWkuwrF-Ljrr20EBzosE6MYhTM8UTVipv7SwWjWcDoGT8NPEQVQUhVkZCu6kTC3Srs~fDTc-4DQUrpd9S67O7oVzPKwT7Wpds2-3jt6FDuTuMfQz9Rp~qFW9cjtlST~2ts0dQq-EQ~s8gQjJRk8zMyytQA__"
                layout="fill"
                objectFit="cover"
                alt="foulpost"
              />
            </div>
            <p className="text-[14px] my-2 text-[#5B5B5B] px-4">
              Capturing the essence of Beyoncé's power and grace, I immerse
              myself in the soul-stirring melody of 'Hello' 🎤✨ With every
              note, I channel her energy, infusing each lyric with
              raw#BeyonceVibes #HelloCover
            </p>
            <div className="flex space-x-2 my-2 px-4">
              <p className="text-[#A4A4A4] text-[12px] flex items-center space-x-1">
                <span className="">
                  <Image
                    src={"/icons/likeIcon.svg"}
                    height={14}
                    width={14}
                    alt="likeicon"
                  />
                </span>
                1,000,645
              </p>

              <p className="text-[#A4A4A4] text-[12px] flex items-center">
                <span className="">
                  <Image
                    src={"/icons/messageIcon.svg"}
                    height={14}
                    width={14}
                    alt="messageicon"
                  />
                </span>
                1,000,645
              </p>
              <Image
                src={"/icons/shareIcon.svg"}
                height={14}
                width={14}
                alt="shareicon"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteOpen} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-[384px]">
          <div className="flex flex-col items-center justify-center gap-2 mt-7">
            <Image
              src={"/icons/trash.png"}
              height={72}
              width={47.61}
              alt="trashIcon"
            />
            <p className="text-[20px]">Delete Foul Post?</p>
            <p className="text-[14px] text-center text-[#808080]">
              Are you sure you want to delete this Foul Post? This action is
              irreversible.
            </p>
          </div>

          <DialogFooter>
            <div className="flex w-full justify-center items-center space-x-2">
              <Button
                className="w-full text-[14px] text-black bg-transparent hover:bg-transparent transition-all hover:scale-105 active:scale-95 border"
                type="submit"
              >
                Cancel
              </Button>
              <Button
                className="w-full text-[14px] text-white bg-[#C83532] hover:bg-[#C83532] transition-all hover:scale-105 active:scale-95"
                type="submit"
              >
                Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isRestoreOpen} onOpenChange={closeRestoreDialog}>
        <DialogContent className="sm:max-w-[384px]">
          <div className="flex flex-col items-center justify-center gap-2 mt-7">
            <Image
              src={"/icons/restoreIcon.svg"}
              height={72}
              width={47.61}
              alt="trashIcon"
            />
            <p className="text-[20px]">Restore Foul Post?</p>
            <p className="text-[14px] text-center text-[#808080]">
              Are you sure you want to restore this Foul Post? This action is
              irreversible.
            </p>
          </div>

          <DialogFooter>
            <div className="flex w-full justify-center items-center space-x-2">
              <Button
                className="w-full text-[14px] text-black bg-transparent hover:bg-transparent transition-all hover:scale-105 active:scale-95 border"
                type="submit"
              >
                Cancel
              </Button>
              <Button
                className="w-full text-[14px] text-white bg-[#2BAC47] hover:bg-[#2BAC47] transition-all hover:scale-105 active:scale-95"
                type="submit"
              >
                Restore
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoulPost;
