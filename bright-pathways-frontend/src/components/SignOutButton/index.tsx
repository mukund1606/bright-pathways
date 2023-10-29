"use client";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <Button
      onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
      className="w-full bg-[#A4D5DD]"
    >
      Logout
    </Button>
  );
}

export default SignOutButton;
