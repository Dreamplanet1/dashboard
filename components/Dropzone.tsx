"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import FadeLoader from "react-spinners/FadeLoader";

interface FileWithPreview {
  preview: string;
  name: string;
  size: number;
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
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setLoading(true);
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
              preview: data.secure_url,
              name: file.name,
              size: file.size,
            },
          ]);
        }
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setLoading(false);
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
    maxSize: 1024 * 1024 * 50, // 50 MB limit
    onDrop,
    onDropRejected: (fileRejections) => {
      setLoading(false);
      fileRejections.forEach((file) => {
        if (file.errors.some((err) => err.code === "file-too-large")) {
          alert("File is too large. Maximum size is 50 MB.");
        }
      });
    },
  });

  return (
    <div
      {...getRootProps({
        className: `${className} ${loading ? "pointer-events-none" : ""}`,
      })}
    >
      {!loading && <input {...getInputProps()} />}
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
          <p className="text-[#808080] text-[12px]">Maximum file size 50 MB.</p>
        </div>
      )}
    </div>
  );
}
