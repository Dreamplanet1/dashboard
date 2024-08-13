"use client";

import Dropzone from "@/components/Dropzone";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface FileWithPreview extends File {
  preview: string;
}

const Broadcast = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  console.log(files);
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  return (
    <div className="flex justify-between items-start">
      <div className="flex w-3/6 flex-col space-y-10">
        <div>
          <h2 className="font-medium text-2xl">Create Broadcast</h2>
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
                  <div className="space-x-2">
                    <button className="hover:scale-105 transition-all text-sm font-medium cursor-pointer active:scale-95">
                      <Link href={file.preview} download={true} target="_blank">
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
      </div>
      <div className="flex items-center space-x-4">
        <button className="rounded-sm font-bold border py-2 px-4 text-sm hover:scale-105 active:scale-95 transition-all">
          Delete Post
        </button>
        <button className="text-white rounded-sm font-bold py-2 px-4 text-sm bg-[#F75803] hover:scale-105 active:scale-95 transition-all">
          Upload Post
        </button>
      </div>
    </div>
  );
};

export default Broadcast;
