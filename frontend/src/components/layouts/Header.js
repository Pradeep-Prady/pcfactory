import React from "react";
import pc from "../../assets/pc.svg";
import pc2 from "../../assets/pc-2.svg";

export default function Header() {
  return (
    <div className="w-full h-screen bg-mygreen items-center justify-center grid-cols-1 grid md:grid-cols-2 px-5 sm:px-10 md:px-20">
      <div className="text-start">
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold my-5 text-white">Build Your Own <span className="text-myorange">PC </span></h2>
        <p className="text-xl sm:text-4xl md:text-5xl font-bold text-mygray">A2D PC Factory</p>
      </div>
      <div className="flex items-center justify-center">
        <img className=" sm:h-[300px] md:h-[400px]" src={pc2} alt="BuildYourOwnPC" />
      </div>
    </div>
  );
}
