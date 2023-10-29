import { getServerAuthSession } from "@/server/auth";
import { Button, Link } from "@nextui-org/react";
import MobileNav from "./mobileNav";
import SignOutButton from "../SignOutButton";
import Image from "next/image";

export const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <>
      <nav className="fixed top-0 z-[9999] flex w-full items-center justify-between border-b bg-white px-8 py-2 shadow-lg">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Bright Pathways Logo"
              width={100}
              height={100}
              className="h-24 w-24"
            />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/oldage-home" className="text-lg" color="foreground">
              Find Homes
            </Link>
            <Link href="/animal-care" className="text-lg" color="foreground">
              Animal Care
            </Link>
            <Link
              href="/adoption-center"
              className="text-lg"
              color="foreground"
            >
              Adoption Center
            </Link>
            <Link
              href="/special-schools"
              className="text-lg"
              color="foreground"
            >
              Special Schools
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            {session ? (
              <SignOutButton />
            ) : (
              <Link href="/auth/signin">
                <Button>Login</Button>
              </Link>
            )}
          </div>
          <MobileNav />
        </div>
      </nav>
    </>
  );
};
