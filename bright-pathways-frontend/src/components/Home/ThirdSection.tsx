import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  return (
    <div className="flex w-full flex-col px-4 pt-24 md:h-screen md:flex-row md:px-8 md:pt-0">
      <div className="flex h-full flex-col justify-center gap-8 md:w-1/2 md:px-20">
        <div className="font-bold md:w-[70%]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Find shelters and services for the well-being of animals in need.
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-lg font-bold">Benifits</h1>
            <p>
              Connect with furry friends, offer them a loving home, and support
              animal welfare organisations.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Services</h1>
            <p className="">
              {" "}
              Real-time location services, user reviews, and facility
              notifications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center pt-8 md:w-1/2">
        <Image
          src="/AdoptionCenters.svg"
          width={500}
          height={500}
          alt="oldageHomeimg"
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
