import React from 'react'
import { mainImg } from "@/assests";
import {Button, ButtonGroup} from "@nextui-org/react";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex h-screen ">
    <div className="w-6/12 h-full border border-white flex flex-col gap-5 justify-center px-20 ">
    <div className="w-[70%]"><h1 className=" text-5xl font-bold">Find your perfect home for new begining.</h1></div>
    <div className="w-[70%]"> <p className="text-lg text-black/70">Discover a wide range of old age homes, animals shelters, dog and baby adoption centers and blind schools near new.</p></div>
    <div className=" flex  gap-4">
    <Button color="primary">
    Explore
  </Button>
  <Button color="primary">
    Download App
  </Button>
    </div>
    </div>
    <div className="w-6/12 h-full border border-white flex justify-center items-center">
    <Image
    src={mainImg}
    width={500}
    height={500}
    alt="mainImg"
    className=" object-contain"
    />
    </div>

  </div>
  )
}

export default Home