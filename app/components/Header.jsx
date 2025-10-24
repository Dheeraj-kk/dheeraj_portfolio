import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import {Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,} from "@/components/ui/sheet";

  
const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          <Logo />
          <Sheet>
            <SheetTrigger className="cursor-pointer text-white text-[30px] ">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 m-w-[100px]" />
              <div className="flex items-center flex-col">
                <button className="btn btn-lg btn-accent mb-8">
                  <div className="flex items-center gap-x-2">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <SocialLinks
                  containerStyles="flex gap-4"
                  iconStyles="bg-accent text-white hover:bg-accent-hover transtion w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
