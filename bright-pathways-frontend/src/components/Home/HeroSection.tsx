import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col px-4 pt-24 md:h-screen md:flex-row md:px-8 md:pt-0">
      <div className="flex h-full flex-col gap-5 border border-white md:w-6/12 md:justify-center md:px-20 ">
        <div className="md:w-[70%]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Find your perfect home for new begining.
          </h1>
        </div>
        <div className="md:w-[70%]">
          <p className="text-black/70 md:text-lg">
            Discover a wide range of old age homes, animals shelters, dog and
            baby adoption centers and blind schools near new.
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-4 md:justify-start">
          <Link href="/oldage-home">
            <Button className="bg-[#A4D5DD]">Explore</Button>
          </Link>
          <Link href="https://github.com/mukund1606/bright-pathways/releases/download/v1.0.0/bright-pathways-installer.apk">
            <Button className="bg-[#A4D5DD]">Download App</Button>
          </Link>
        </div>
      </div>
      <div className="flex h-full items-center justify-center border border-white pt-8 md:w-6/12">
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
