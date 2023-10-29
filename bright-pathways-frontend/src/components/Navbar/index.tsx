import { getServerAuthSession } from "@/server/auth";
import { Button, Link } from "@nextui-org/react";
import MobileNav from "./mobileNav";

export const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <>
      <nav className="fixed top-0 z-[9999] flex w-full items-center justify-between bg-white px-8 py-5">
        <div>
          <Link
            href="/"
            className="rounded-full border bg-black p-2 text-center text-2xl font-bold text-white"
          >
            BP
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
              <Link href="/api/auth/signout">
                <Button>Logout</Button>
              </Link>
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
