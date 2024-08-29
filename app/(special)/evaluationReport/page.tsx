"use client";
import Dropzone from "@/components/Dropzone";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FileWithPreview extends File {
  preview: string;
}

const page = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  console.log(files);
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  const router = useRouter();
  return (
    <section className="py-4 px-7 mx-auto max-w-screen-lg ">
      <section className="w-full flex items-center justify-between">
        <div
          onClick={() => {
            router.push("/report/overview");
          }}
          className="flex items-center cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="mr-2" />
          <p>Return to dashboard</p>
        </div>
        <Button className="bg-[#F75803] hover:bg-[#F75803] transition-all hover:scale-105 active:scale-95 w-20">
          Submit
        </Button>
      </section>
      <section className="mt-5 grid grid-cols-6 space-x-4">
        <div className="bg-white px-5 py-10 col-span-4">
          <h2 className="text-[24px] border-b pb-4 mb-6 ">Evaluation Report</h2>
          <form className="space-y-4">
            <div>
              <Label className="font-semibold">Subject</Label>
              <Input placeholder="Enter Subject" className="text-[#C8C8C8]" />
            </div>
            <div>
              <Label className="font-semibold">Description</Label>
              <Textarea
                placeholder="Type your message here."
                className="h-56"
              />
            </div>
            <div>
              <p className="text-[#10002E] font-medium mb-1">Media</p>
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
                          <p className="text-[#111810] font-bold">
                            {file.name}
                          </p>
                          <p className="">{file.size}</p>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <button className="hover:scale-105 transition-all text-sm font-medium cursor-pointer active:scale-95">
                          <Link
                            href={file.preview}
                            download={true}
                            target="_blank"
                          >
                            Preview
                          </Link>
                        </button>

                        <button
                          onClick={() => removeFile(file.name)}
                          className="text-sm text-[#BF3100] font-medium cursor-pointer hover:scale-105 active:scale-95 transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-2 bg-white h-max p-5">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage
                className="object-contain"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">Price_Dwight</p>
              <p className="text-[#808080] text-sm">Creator</p>
            </div>
          </div>
          <div className="flex justify-between border rounded-md p-3 w-full">
            <div className="flex border-r grow  flex-col space-y-1">
              <p className="text-[#808080] text-sm">Members in forum</p>
              <h2 className="font-semibold text-lg">783</h2>
            </div>
            <div className="flex flex-col space-y-1 grow justify-end">
              <p className="text-[#808080] text-sm flex justify-end">
                Post in portfolio
              </p>
              <h2 className="font-semibold text-lg flex justify-end">783</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
