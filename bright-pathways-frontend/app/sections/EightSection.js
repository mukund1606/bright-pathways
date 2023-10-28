
import { Mail,MessageSquare,Phone,MapPin} from "lucide-react";
import Link from "next/link";
import React from "react";
const EightSection = () => {
  return (
    <div className="grid grid-cols-4 px-10 py-10">
      <div className="flex flex-col gap-1">
      <Mail size={30} />
    <h1 className="font-bold text-lg">Email</h1>
    <p className="text-sm">For any enquiries</p>
    <p>Hello@gmail.com</p>
      </div>
      <div className="flex flex-col gap-1"><MessageSquare size={30}  />
      <h1 className="font-bold text-lg">Live Chat</h1>
    <p className="text-sm"> chat with our support team for immediate assitance</p>
    <Link href={'/'}><p>Start new chat</p></Link>
      </div>
      <div className="flex flex-col gap-1"><Phone size={30} />
      <h1 className="font-bold text-lg">Phone</h1>
    <p className="text-sm">Call us for  any questions or concerns</p>
    <p>+91864656556</p>
      </div>
      <div className="flex flex-col gap-1"><MapPin size={30} />
      <h1 className="font-bold text-lg">Office</h1>
    <p className="text-sm"> Visit our office  for in-person assitance</p>
    <p>123 / gurugram near DLF cyberpark</p>
      </div>
    </div>
  );
};

export default EightSection;
