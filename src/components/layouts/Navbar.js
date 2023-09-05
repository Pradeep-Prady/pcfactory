import React from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-myblack flex items-center justify-between px-5 sm:px-16 md:px-30 lg:px-40 py-5 text-mygreen ">
      <div>
        <img src={logo} alt="logo" className="h-[40px] sm:h-[50px]" />
      </div>
      <div className="">
        <a
          className="font-bold hover:underline px-2 py-1 text-xl rounded-lg"
          href="https://wa.me/+919025380083"
          target="_blank"
          rel="noreferrer"
        >
          Sales Enquiry
        </a>
      </div>
    </div>
  );
}
