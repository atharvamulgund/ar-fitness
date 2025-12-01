import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-[100px] p-4">
      {/* Logo Section */}
      <div className="flex">
        <Logo size={36} isVertical={false} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4">
        <Button>Get Started</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
