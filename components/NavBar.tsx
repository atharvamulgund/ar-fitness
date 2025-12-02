"use client"
import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const {push} = useRouter()
  return (
    <div className="flex justify-between items-center w-full h-[100px] p-4">
      {/* Logo Section */}
      <div className="flex">
        <Logo size={36} isVertical={false} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4">
        <Button onClick={()=> push("get-started")}>Get Started</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
