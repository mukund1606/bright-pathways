"use client";

import { AlignRight } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
} from "@nextui-org/react";

function MobileNav() {
  return (
    <div className="md:hidden">
      <Dropdown>
        <DropdownTrigger>
          <button className="rounded-full border p-3">
            <AlignRight />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem>
            <Link href="/oldage-home" className="text-lg" color="foreground">
              Find Homes
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/animal-care" className="text-lg" color="foreground">
              Animal Care
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href="/adoption-center"
              className="text-lg"
              color="foreground"
            >
              Adoption Center
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href="/special-schools"
              className="text-lg"
              color="foreground"
            >
              Special Schools
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default MobileNav;
