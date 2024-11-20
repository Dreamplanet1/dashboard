"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import FadeLoader from "react-spinners/FadeLoader";

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
  const [loading, setLoading] = useState(false); // State for loading status

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setLoading(true); // Set loading to true when file is dropped
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
      );

      try {
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
      } catch (error) {
        console.error("Upload failed:", error);
        // Handle upload error (e.g., show an alert or message)
      } finally {
        setLoading(false); // Set loading to false when upload is complete
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
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white flex flex-col items-center justify-center w-[432px] h-[160px] rounded-lg shadow-lg space-y-[8px]">
          <FadeLoader color="#7E2D02" />
          <p className="text-[#111810] text-[20px]">Processing...</p>
        </div>
      </div> 
      ) : isDragActive ? (
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
