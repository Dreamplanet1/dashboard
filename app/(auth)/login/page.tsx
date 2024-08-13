"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center border p-8 items-center space-y-4 rounded-md shadow-md">
        <div className="flex items-center flex-col mb-4">
          <Image
            src={"/DreamPlanetLogo.png"}
            height={48}
            width={65.22}
            alt="dreamplanetlogo"
          />
          <p className="text-2xl font-semibold">Dream Planet</p>

          <p className="text-[#A4A4A4]">
            Please enter your details to sign in.
          </p>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            className="text-[#A4A4A4]"
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
          <Input
            id="password"
            placeholder="Enter your password"
            className="text-[#A4A4A4]"
          />
        </div>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="bg-[#F75803] transition-all hover:scale-105 active:scale-95 text-white w-80 py-2 rounded-md"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
