import React from "react";
import NavLinks from "./NavLinks";
import { MdFileDownload } from "react-icons/md";
import Logo from "./Logo";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-full py-16">
      <div className="flex flex-col h-full justify-between items-center mx-auto">
        <Logo />
      <NavLinks containerStyles="flex flex-col gap-6" />
      <Link  href="/CVV.pdf" download={true} className="btn btn-lg btn-tertiary mb-8">
        <div className="flex items-center gap-x-2">
          <span>Download CV</span>
          <MdFileDownload className="text-xl" />
        </div>
      </Link>

      </div>
      
    </nav>
  );
};

export default MainNav;
