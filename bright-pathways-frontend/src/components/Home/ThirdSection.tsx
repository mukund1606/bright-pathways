import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  return (
    <div className="flex h-screen w-full ">
      <div className="flex h-full w-1/2 flex-col justify-center gap-5 px-20 ">
        <div className="w-[70%] font-bold">
          <h1 className="text-3xl">
            Find shelters and services for the well-being of animals in need.
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <h1 className="text-lg font-bold">Benifits</h1>
            <p>
              Connect with furry friends, offer them a loving home, and support
              animal welfare organisations.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-lg font-bold">Services</h1>
            <p className="">
              {" "}
              Real-time location services, user reviews, and facility
              notifications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full  w-1/2 items-center justify-center">
        <Image
          src="/animalShelters.jpg"
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
