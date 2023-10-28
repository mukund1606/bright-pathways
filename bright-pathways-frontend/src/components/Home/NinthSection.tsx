import Link from "next/link";
import React from "react";
import { Input, Button, Spacer } from "@nextui-org/react";

const NinthSection = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-between px-10 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold">Logo</h1>
          <div className="flex gap-2">
            <Link href="/" className="text-lg" color="foreground">
              Find Homes
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Animal Care
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Adoption Center
            </Link>
            <Link href="/" className="text-lg" color="foreground">
              Special Schools
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Subscribe</h1>
          <div className="flex items-center gap-2">
            <Input
              type="email"
              label="Email"
              size="sm"
              className=" rounded-lg border border-black"
            />
            <Button className="bg-[#A4D5DD] py-[25px]" radius="sm">
              Subscribe
            </Button>
          </div>
          <p>By subscribing you agree to our privacy policy</p>
        </div>
      </div>
      <div className="flex flex-col px-10 py-10 ">
        <div className="h-5 w-full">
          <Spacer className="h-[3px] w-full bg-gray-800/20" />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <Link href={"/"}>privacy Policy</Link>
            <Link href={"/"}> Terms of Services </Link>
            <Link href={"/"}> Cookie settings</Link>
          </div>
          <h2> © symbolsDB.com</h2>
        </div>
      </div>
    </div>
  );
};

export default NinthSection;
