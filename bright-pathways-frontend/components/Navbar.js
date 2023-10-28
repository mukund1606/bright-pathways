import React from "react";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { Button, Link } from "@nextui-org/react";
import { auth } from "@clerk/nextjs";

export const Navbar = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="flex items-center justify-between w-full px-8 py-5 fixed top-0 bg-white">
        <div>
          {/*  <Image
          src={Logo}
          height={80}
          width={80}
          alt="logo"
          /> */}
          <h1 className="p-2 text-2xl font-bold text-center text-white bg-black border rounded-full">
            BP
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <div className="items-center hidden gap-5 md:flex">
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
          <div className="md:hidden"></div>
          {userId ? (
            <UserButton redirectUrl="/" />
          ) : (
            <Button color="primary" className="font-bold text-md">
              <SignInButton redirectUrl="/" />
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};
