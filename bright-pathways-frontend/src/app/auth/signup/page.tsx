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
import { LocateIcon } from "lucide-react";

type Credentials = {
  name: string;
  email: string;
  password: string;
  role: "user" | "organisation";
  orgType?:
    | "OLDAGE_HOME"
    | "ANIMAL_CARE"
    | "ADOPTION_CENTER"
    | "SPECIAL_SCHOOLS";
  coordinates?: [number, number];
  phone?: string;
  description?: string;
  address?: string;
};
function SignUp() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["user"]));
  const [selectedKeys2, setSelectedKeys2] = useState(new Set(["OLDAGE_HOME"]));
  const [credentials, setCredentials] = useState<Credentials>({
    name: "",
    email: "",
    password: "",
    role: "user",
    orgType: "OLDAGE_HOME",
  });
  const [confirmPassword, setConfimPassword] = useState("");
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  const selectedValue2 = useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2],
  );

  return (
    <div className="flex min-h-screen w-screen items-center justify-center py-4 pt-24">
      <Card className="px-4">
        <CardHeader className="text-center">
          <h2 className="text-3xl font-bold">Sign Up</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <input
              className="rounded border px-4 py-2"
              type="text"
              placeholder="Name"
              value={credentials.name}
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
            />
            <input
              className="rounded border px-4 py-2"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <input
              className="rounded border px-4 py-2"
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <input
              className="rounded border px-4 py-2"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfimPassword(e.target.value)}
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
                  const keysArray = Array.from(keys) as [
                    "user" | "organisation",
                  ];
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
            {selectedKeys.keys().next().value === "organisation" && (
              <>
                <div className="flex gap-2">
                  <input
                    className="w-fit rounded border px-2 py-2"
                    type="text"
                    placeholder="Organisation Address"
                    value={credentials.address}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        address: e.target.value,
                      })
                    }
                  />
                  <Button
                    className="w-fit"
                    onClick={() => {
                      navigator.geolocation.getCurrentPosition((position) => {
                        setCredentials({
                          ...credentials,
                          coordinates: [
                            position.coords.latitude,
                            position.coords.longitude,
                          ],
                        });
                      });
                    }}
                  >
                    <LocateIcon />
                  </Button>
                </div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue2}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys2}
                    onSelectionChange={(keys) => {
                      const keysArray = Array.from(keys) as [
                        | "OLDAGE_HOME"
                        | "ANIMAL_CARE"
                        | "ADOPTION_CENTER"
                        | "SPECIAL_SCHOOLS",
                      ];
                      setSelectedKeys2(
                        keysArray.length
                          ? new Set(keysArray)
                          : new Set(["OLDAGE_HOME"]),
                      );
                      setCredentials({
                        ...credentials,
                        orgType: keysArray[0],
                      });
                    }}
                  >
                    <DropdownItem key="OLDAGE_HOME">Oldage Home</DropdownItem>
                    <DropdownItem key="ANIMAL_CARE">Animal Care</DropdownItem>
                    <DropdownItem key="ADOPTION_CENTER">
                      Adoption Center
                    </DropdownItem>
                    <DropdownItem key="SPECIAL_SCHOOLS">
                      Special Schools
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <input
                  className="rounded border px-4 py-2"
                  type="number"
                  value={credentials.phone}
                  placeholder="Organisation Phone Number"
                  onChange={(e) =>
                    setCredentials({ ...credentials, phone: e.target.value })
                  }
                />
                <textarea
                  className="rounded border px-4 py-2"
                  placeholder="Organisation Description"
                  value={credentials.description}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      description: e.target.value,
                    })
                  }
                />
              </>
            )}
            <div className="flex items-center justify-center gap-2">
              <Button
                className="w-full bg-[#A4D5DD]"
                onClick={() => {
                  console.log(credentials);
                  if (
                    credentials.role === "user" &&
                    (!credentials.name ||
                      !credentials.email ||
                      !credentials.password ||
                      !confirmPassword)
                  ) {
                    alert("Please fill all the fields");
                    return;
                  }
                  if (
                    credentials.role === "organisation" &&
                    (!credentials.name ||
                      !credentials.email ||
                      !credentials.password ||
                      !confirmPassword ||
                      !credentials.address ||
                      !credentials.orgType ||
                      !credentials.phone ||
                      !credentials.description)
                  ) {
                    alert("Please fill all the fields");
                    return;
                  }
                  if (credentials.password !== confirmPassword) {
                    alert("Passwords do not match");
                    return;
                  }
                  signIn("credentials", {
                    email: credentials.email,
                    password: credentials.password,
                    role: credentials.role,
                    name: credentials.name,
                    orgType: credentials.orgType,
                    phone: credentials.phone,
                    description: credentials.description,
                    address: credentials.address,
                    coordinates: JSON.stringify(credentials.coordinates),
                    isLogin: "false",
                    callbackUrl: "/",
                  })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                }}
              >
                SignUp
              </Button>
              <Link href="/auth/signin" className="w-full">
                <Button className="w-full bg-[#A4D5DD]">SignIn</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SignUp;
