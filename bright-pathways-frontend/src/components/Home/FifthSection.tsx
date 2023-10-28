import React from "react";
import { Button } from "@nextui-org/react";

const FifthSection = () => {
  return (
    <div className="flex items-center justify-between px-10 py-20">
      <div>
        {" "}
        <h1 className="text-2xl font-bold">Find the services you need</h1>
        <p>Download our Application and start searching today</p>
      </div>
      <div className=" flex items-center gap-4">
        <Button className="bg-[#A4D5DD]">Download App</Button>
        <Button className="bg-[#A4D5DD]">Learn More</Button>
      </div>
    </div>
  );
};

export default FifthSection;
