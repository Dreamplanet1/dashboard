"use client";
import Dropzone from "@/components/Dropzone";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useReport from "@/hooks/useReport";
import { RootState } from "@/redux/store";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface FileWithPreview {
  preview: string; // Cloudinary URL
  name: string; // Original file name
  size: number; // File size
}

const page = () => {
  const { creatorData } = useSelector((state: RootState) => state.report);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  const { createReport } = useReport();
  const router = useRouter();
  return (
    <section className="py-4 px-7 mx-auto max-w-screen-lg ">
      <section className="w-full flex items-center justify-between">
        <div
          onClick={() => {
            router.push("/report/overview");
          }}
          className="flex items-center cursor-pointer transition-all  active:scale-95 text-[14px]"
        >
          <ArrowLeft width={20} height={20} className="mr-2" />
          <p>Return to dashboard</p>
        </div>
        {subject && description && files.length > 0 ? (
          <Button
            onClick={async () => {
              const filePreviews = files.map((file) => file.preview);
              await createReport(subject, description, filePreviews);
              setSubject("");
              setDescription("");
              setFiles([]);
              router.push("/report/submitted");
            }}
            className="btnColored"
          >
            Submit
          </Button>
        ) : (
          <Button className="btnColoredInactive">Submit</Button>
        )}
      </section>
      <section className="mt-5 grid grid-cols-6 space-x-4">
        <div className="bg-white px-5 py-10 col-span-4">
          <h2 className="text-[24px] border-b pb-4 mb-6 ">Evaluation Report</h2>
          <form className="space-y-[20px]">
            <div>
              <Label className="font-medium mb-[8px]">Subject</Label>
              <Input
                placeholder="Enter Subject"
                className=" placeholder:text-[#C8C8C8] border-[#C8C8C8] placeholder:text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[8px]"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div>
              <Label className="font-medium mb-[8px]">Description</Label>
              <Textarea
                placeholder="Type your message here."
                className="h-56  placeholder:text-[#C8C8C8] border-[#C8C8C8] placeholder:text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[8px]"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="text-[#10002E] font-medium mb-[8px]">Media</p>
              <Dropzone
                files={files}
                setFiles={setFiles}
                className="w-full border border-dashed cursor-pointer h-32 rounded-md flex justify-center items-center"
              />
              <div className="mt-4">
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="border flex items-center p-4  justify-between "
                    >
                      <div className="flex items-center space-x-2">
                        <div className="border p-2 rounded-md">
                          <Image
                            src={"/icons/picturefileImage.svg"}
                            height={13}
                            width={17}
                            alt="fileImage"
                          />
                        </div>

                        <div>
                          <p className="text-[#111810] font-medium">
                            {file.name}
                          </p>
                          <p className="text-[12px] text-[#808080]">
                            {file.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button className="hover:scale-105 transition-all bg-transparent text-black hover:bg-transparent text-sm font-medium cursor-pointer active:scale-95">
                          <Link
                            href={file.preview}
                            download={true}
                            target="_blank"
                          >
                            Preview
                          </Link>
                        </Button>
                        <div className="bg-[#C8C8C8] rounded-full w-[4px] h-[4px]"></div>
                        <Button
                          onClick={() => {
                            removeFile(file.name);
                          }}
                          className="text-sm text-[#BF3100] font-medium bg-transparent hover:bg-transparent cursor-pointer hover:scale-105 active:scale-95 transition-all"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-2 bg-white h-max p-5">
          <div className="flex pb-[20px] border-b space-x-[6px] items-center">
            <Avatar>
              <AvatarImage
                className="object-cover"
                src={creatorData?.user_image}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{creatorData?.user_name}</p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span>
                    <Image
                      src={"/icons/profile.svg"}
                      height={16}
                      width={16}
                      alt="profileIcon"
                    />
                  </span>
                  <p className="text-[#808080] text-[14px]">
                    {creatorData?.admin_role}
                  </p>
                </div>
                {creatorData?.content_creator_type && (
                  <p className="h-1 w-1 rounded-full bg-[#C8C8C8]"></p>
                )}

                {creatorData?.content_creator_type && (
                  <div className="flex items-center space-x-1">
                    <span>
                      <Image
                        src={"/icons/music.svg"}
                        height={16}
                        width={16}
                        alt="musicIcon"
                      />
                    </span>
                    <p className="text-[#808080] text-[14px]">
                      Artist/Musician
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-md px-3 w-full mt-[20px]">
            <div className="flex flex-col space-y-1">
              <p className="text-[#808080] text-[12px]">Members in forum</p>
              <h2 className="font-Recoleta font-medium text-[20px]">
                {creatorData?.no_of_investors}
              </h2>
            </div>
            <div className="h-[48px] w-[1px] bg-[#E4E4E4]"></div>
            <div className="flex flex-col space-y-1 ">
              <p className="text-[#808080] text-[12px]">Post in portfolio</p>
              <h2 className="font-Recoleta font-medium text-[20px]">783</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
