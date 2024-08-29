import { Bell, CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 sticky  top-0 flex items-center justify-between border-b z-30">
      <div>
        <Image
          src={"/DreamPlanetLogoName.png"}
          width={184}
          height={24}
          alt="Logo"
        />
      </div>
      <div className="flex items-center space-x-3">
        <Bell color="#808080" />
        <CircleUserRound color="#808080" />
        <h2 className="font-bold">Human Resources</h2>
      </div>
    </div>
  );
};

export default Navbar;
