import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
const EightSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 px-4 py-10 md:grid-cols-4 md:px-10">
      <div className="flex flex-col gap-1">
        <Mail size={30} />
        <h1 className="text-lg font-bold">Email</h1>
        <p className="text-sm">For any enquiries</p>
        <p>Hello@gmail.com</p>
      </div>
      <div className="flex flex-col gap-1">
        <MessageSquare size={30} />
        <h1 className="text-lg font-bold">Live Chat</h1>
        <p className="text-sm">
          {" "}
          chat with our support team for immediate assitance
        </p>
        <Link href={"/"}>
          <p>Start new chat</p>
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <Phone size={30} />
        <h1 className="text-lg font-bold">Phone</h1>
        <p className="text-sm">Call us for any questions or concerns</p>
        <p>+91864656556</p>
      </div>
      <div className="flex flex-col gap-1">
        <MapPin size={30} />
        <h1 className="text-lg font-bold">Office</h1>
        <p className="text-sm"> Visit our office for in-person assitance</p>
        <p>123 / gurugram near DLF cyberpark</p>
      </div>
    </div>
  );
};

export default EightSection;
