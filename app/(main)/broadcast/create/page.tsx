"use client";

import Dropzone from "@/components/Dropzone";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

interface FileWithPreview extends File {
  preview: string;
}

const Broadcast = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const closeDeleteDialog = () => setisDeleteOpen(false);
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
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
  }, [isDeleteOpen, setisDeleteOpen]);
  return (
    <div className="flex justify-between items-start">
      <div className="flex w-3/6 flex-col space-y-10">
        <div>
          <h2 className=" text-2xl">Create Broadcast</h2>
          <p className="text-sm text-[#A8A8A8]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <p className="text-[#10002E] font-medium mb-1">Description</p>
          <Textarea
            className="focus-visible:ring-transparent"
            placeholder="Enter Description"
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
                      <p className="text-[#111810] font-bold">{file.name}</p>
                      <p className="">{file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="hover:scale-105 transition-all bg-transparent text-black hover:bg-transparent text-sm font-medium cursor-pointer active:scale-95">
                      <Link href={file.preview} download={true} target="_blank">
                        Preview
                      </Link>
                    </Button>
                    <div className="bg-[#C8C8C8] rounded-full w-[4px] h-[4px]"></div>
                    <Button
                      onClick={() => {
                        setisDeleteOpen(true);
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
      </div>
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => {
            setisDeleteOpen(true);
          }}
          className="btnPlain"
        >
          Delete Post
        </Button>
        <Button className="btnColored">Upload Post</Button>
      </div>

      <Dialog open={isDeleteOpen} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-[384px]">
          <div className="flex flex-col items-center justify-center gap-2 mt-7">
            <Image
              src={"/icons/trash.png"}
              height={72}
              width={47.61}
              alt="trashIcon"
            />
            <p className="text-[20px]">Delete this Broadcast?</p>
            <p className="text-[14px] text-center text-[#808080]">
              Are you sure you want to delete this broadcast? This action is
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
    </div>
  );
};

export default Broadcast;
