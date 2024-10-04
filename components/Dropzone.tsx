"use client";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

interface FileWithPreview {
  preview: string; // Cloudinary URL
  name: string; // Original file name
  size: number; // File size
}

export default function Dropzone({
  className,
  setFiles,
  files,
}: {
  className?: string;
  setFiles: Dispatch<SetStateAction<FileWithPreview[]>>;
  files: FileWithPreview[];
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setFiles((prevFiles) => [
          ...prevFiles,
          {
            preview: data.secure_url, // Cloudinary URL
            name: file.name, // Original file name
            size: file.size, // File size
          },
        ]);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "video/mp4": [],
      "video/mov": [],
    },
    maxSize: 1024 * 2000, // 2 MB limit
    onDrop,
  });

  return (
    <div
      {...getRootProps({
        className: className,
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex items-center flex-col">
          <Image
            src={"/icons/fileImage.svg"}
            height={40}
            width={40}
            alt="fileImage"
          />
          <p className="text-[#808080]">
            <span className="underline underline-offset-4 text-[14px]">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-[#808080] text-[12px]">Maximum file size 2 MB.</p>
        </div>
      )}
    </div>
  );
}
