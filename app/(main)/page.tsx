"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  router.push("/broadcast");
  return <div></div>;
};

export default page;
