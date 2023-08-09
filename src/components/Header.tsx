"use client";

import React, { useState } from "react";
import { LeftNavMenu } from "./NavMenu";
import { TfiMenu } from "react-icons/tfi";
import { Logo } from "./UIElements";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between w-full px-2 py-5 bg-slate-100 sm:flex-col sm:justify-center sm:gap-2">
      <Logo width={50} height={50} />
      <LeftNavMenu isOpen={isOpen} handleOnClose={() => setIsOpen(false)} />
      <div className="cursor-pointer sm:hidden" onClick={() => setIsOpen(true)}>
        <TfiMenu />
      </div>
    </div>
  );
};

export default Header;
