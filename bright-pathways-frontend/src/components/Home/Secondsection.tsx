import Image from "next/image";
import React from "react";

const Secondsection = () => {
  return (
    <div className="flex h-screen w-full ">
      <div className="flex h-full w-1/2 flex-col justify-center gap-5 px-20 ">
        <div className="w-[70%] font-bold">
          <h1 className="text-3xl">
            Discover the Benefits of Old Ages Homes and senior Living
            Communities
          </h1>
        </div>
        <div className="w-[70%]">
          <p className="text-lg text-black/80">
            our app is designed to help you find the perfect old age home or
            senior living community for yourself or your loved ones. With a wide
            range of options and comprehensive information, we make the process
            of finding the right place easier and more convenient.
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <h1 className="text-lg font-bold">Benifits</h1>
            <p>
              Experience a supportive and caring environments that promotes
              independence and well-being
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Services</h1>
            <p className="">
              Real-time location services, user reviews, and facility
              notifications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full  w-1/2 items-center justify-center">
        <Image
          src="/oldAgeHome.jpg"
          width={500}
          height={500}
          alt="oldageHomeimg"
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default Secondsection;
