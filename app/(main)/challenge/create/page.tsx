"use client";

import Dropzone from "@/components/Dropzone";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface FileWithPreview {
  preview: string; // Cloudinary URL
  name: string; // Original file name
  size: number; // File size
}

const CreateChallenge = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const closeDeleteDialog = () => setisDeleteOpen(false);
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  const router = useRouter();
  return (
    <div className="flex justify-between items-start">
      <div className="flex w-3/6 flex-col space-y-[24px]">
        <div>
          <p
            onClick={() => {
              router.push("/challenge");
            }}
            className="text-[#F75803] cursor-pointer flex items-center transition-all active:scale-95"
          >
            <Image
              src={"/icons/arrowleftChallenge.svg"}
              alt="arrowleft"
              width={15}
              height={12.5}
            />
            <span className="ml-[8px]">Go back to overview</span>
          </p>
          <div className="mt-[13.5px]">
            <h2 className="text-2xl">Create Challenges</h2>
          </div>
        </div>

        <form className="space-y-[24px]">
          <div className="flex items-center space-x-4 w-full">
            <div className="w-full">
              <Label
                className="text-[#10002E] text-[14px] font-medium mb-1"
                htmlFor="title"
              >
                Title
              </Label>
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px] "
                type="title"
                placeholder="Enter Title"
              />
            </div>
            <div className="w-full">
              <Label
                className="text-[#10002E] text-[14px] font-medium mb-1"
                htmlFor="hashtag"
              >
                Hashtag
              </Label>
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px]"
                type="hashtag"
                placeholder="Enter Hashtag"
              />
            </div>
          </div>

          <div className="w-full">
            <Label
              className="text-[#10002E] text-[14px] font-medium mb-1"
              htmlFor=""
            >
              Duration
            </Label>
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-full mt-1 focus:ring-0 focus:ring-offset-0 focus:outline-none text-[#373737] text-[14px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px]"
                type="days"
                placeholder="Enter Days"
              />
            </div>
          </div>
          <div className="w-full">
            <Label
              className="text-[#10002E] text-[14px] font-medium mb-1"
              htmlFor="price"
            >
              Price
            </Label>
            <Input
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px]"
              type="price"
              placeholder="Enter Price"
            />
          </div>

          <div className="w-full">
            <Label htmlFor="link">Link URL(Optional)</Label>
            <Input
              className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px]"
              type="link"
              placeholder="Enter Link"
            />
          </div>

          <div>
            <p className="text-[#10002E] text-[14px] font-medium mb-1">
              Instruction
            </p>
            <Textarea
              className="focus-visible:ring-transparent w-full h-[168px] placeholder:text-[#C8C8C8] mt-1 placeholder:text-[14px]"
              placeholder="Enter Instruction"
            />
          </div>
          <div>
            <p className="text-[#10002E] text-[14px] font-medium mb-1">Media</p>
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
                        <p className="text-[#111810] font-bold">{file.name}</p>
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
                        onClick={() => {
                          removeFile(file.name);
                        }}
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
          <div className="flex items-center justify-between">
            <Label className="text-[#10002E]" htmlFor="switch">
              Delete challenges after duration
            </Label>

            <Switch
              id="switch"
              className="[&[data-state='checked']]:bg-[#F75803]"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="btnPlain">Cancel</Button>
        <Button className="btnColored">Upload</Button>
      </div>
    </div>
  );
};

export default CreateChallenge;
