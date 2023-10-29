"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

function SignIn() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["user"]));
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <div className="flex min-h-screen w-screen items-center justify-center py-4 pt-24">
      <Card className="w-96 px-4">
        <CardHeader className="text-center">
          <h2 className="text-4xl font-bold">Sign In</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <input
              className="rounded border px-4 py-2"
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <input
              className="rounded border px-4 py-2"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {
                  const keysArray = Array.from(keys) as string[];
                  setSelectedKeys(
                    keysArray.length ? new Set(keysArray) : new Set(["user"]),
                  );
                  setCredentials({
                    ...credentials,
                    role: keysArray[0] ?? "user",
                  });
                }}
              >
                <DropdownItem key="user">User</DropdownItem>
                <DropdownItem key="organisation">Organisation</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div className="flex items-center justify-center gap-2">
              <Button
                className="w-full bg-[#A4D5DD]"
                onClick={() => {
                  signIn("credentials", {
                    email: credentials.email,
                    password: credentials.password,
                    role: credentials.role,
                    name: null,
                    orgType: null,
                    phone: null,
                    description: null,
                    address: null,
                    isLogin: "true",
                    callbackUrl: "/",
                  })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                }}
              >
                Sign In
              </Button>
              <Link href="/auth/signup" className="w-full">
                <Button className="w-full bg-[#A4D5DD]">Sign Up</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SignIn;
