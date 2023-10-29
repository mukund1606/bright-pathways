import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const FifthSection = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 px-4 py-20 md:flex-row md:px-10">
      <div>
        <h1 className="text-2xl font-bold">Find the services you need</h1>
        <p>Download our Application and start searching today</p>
      </div>
      <div className="grid w-full grid-cols-2 items-center gap-4 md:w-fit">
        <Link
          href="https://github.com/mukund1606/bright-pathways/releases/download/v1.0.0/bright-pathways-installer.apk"
          className="w-full"
        >
          <Button className="w-full bg-[#A4D5DD]">Download App</Button>
        </Link>
        <Link href="/animal-care">
          <Button className="w-full bg-[#A4D5DD]">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default FifthSection;
