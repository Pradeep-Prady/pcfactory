import React from "react";
import calsi from "../../assets/calsi.png";

export default function About() {
  return (
    <div className="w-full h-auto pt-10 pb-20 sm:h-screen bg-myblack flex items-center justify-center  sm:flex sm:items-center sm:justify-center">
      <div className="w-5/6  h-auto  sm:flex sm:items-center sm:justify-center">
        <div className="w-full h-[300px] sm:w-[300px] sm:h-[420px] bg-myorange shadow-md flex items-center justify-center">
          <img src={calsi} alt="about" className="" />
        </div>
        <div
          className="w-full h-auto sm:w-[300px] sm:h-[420px]   bg-myorange scale-110 shadow-md text-white
      "
        >
          <div className="w-full flex items-center justify-center">
            <h2 className="text-center text-xl my-2 text-myblack font-bold pb-1  w-2/5">
              About US
            </h2>
          </div>
          <div className="mx-5">
            <p className="text-sm tracking-wide leading-relaxed ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore
              et dolor sit amet, consectetur adip incididunt ut labore et dolor
              sit amet ut labore et dolor sit amet ut labore et dolor sit amet
              Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore
              Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore
              et dolor sit amet, consectetur adip incididunt ut labore et dolor
            </p>
          </div>
          <div className="w-full flex items-center justify-center my-5">
            <button className="bg-mygreen hover:bg-myblack hover:text-mygreen py-1 w-full rounded-sm mx-2 text-myblack font-semibold">
              Contact Now
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 my-5 pb-5">
            <a
              className="text-3xl hover:text-mygreen text-myblack"
              href="https://wa.me/+919025380083"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              className="text-3xl hover:text-mygreen text-myblack"
              href="https://twitter.com/A2D_Army/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              className="text-3xl hover:text-mygreen text-myblack"
              href="https://www.instagram.com/a2dpcfactory"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              className="text-3xl hover:text-mygreen text-myblack"
              href="https://youtu.be/Z7PfX565AKY"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
