import Image from "next/image";
import React from "react";

const FourthSection = () => {
  return (
    <div className="flex h-screen w-full ">
      <div className="flex h-full w-1/2 flex-col justify-center gap-5 px-20 ">
        <div className="w-[70%] font-bold">
          <h1 className="text-3xl">
            Discover educational institutions for individuals with visual
            impairments.
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2 ">
            <h1 className="text-lg font-bold">Benifits</h1>
            <p>
              Access educational resources, make informed choices, and foster
              inclusivity in education.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-lg font-bold">Services</h1>
            <p className="">
              A resource center, information on schools, and a caring community.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full  w-1/2 items-center justify-center">
        <Image
          src="/specialSchool.jpg"
          width={500}
          height={500}
          alt="oldageHomeimg"
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default FourthSection;
