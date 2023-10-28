import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex h-screen ">
      <div className="flex h-full w-6/12 flex-col  justify-center gap-5 border border-white px-20 ">
        <div className="w-[70%]">
          <h1 className=" text-5xl font-bold">
            Find your perfect home for new begining.
          </h1>
        </div>
        <div className="w-[70%]">
          <p className="text-lg text-black/70">
            Discover a wide range of old age homes, animals shelters, dog and
            baby adoption centers and blind schools near new.
          </p>
        </div>
        <div className=" flex  gap-4">
          <Button className="bg-[#A4D5DD]">Explore</Button>
          <Button className="bg-[#A4D5DD]">Download App</Button>
        </div>
      </div>
      <div className="flex h-full w-6/12 items-center justify-center border border-white">
        <Image
          src="/mainImg.svg"
          width={500}
          height={500}
          alt="mainImg"
          className=" object-contain"
        />
      </div>
    </div>
  );
}
