import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-myblack grid grid-cols-1 sm:grid-cols-2 px-3 sm:px-7 md:px-40 text-center  py-5">
      <div className="flex-col text-start w-full flex items-center justify-center ">
        <img className="h-[50px]" src={logo} alt="logo" />
        <p className="text-mywhite md:w-3/6 py-3">
          Across multimedia, engineering, development, and more, our expert team
          listens, analyzes, builds, tests, and delivers for you.
        </p>
        <div className="flex items-center justify-center gap-5 my-5">
          <a
            className="text-3xl text-mygreen hover:text-myorange"
            href="https://wa.me/+919025380083"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            className="text-3xl text-mygreen hover:text-myorange"
            href="https://twitter.com/A2D_Army/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="text-3xl text-mygreen hover:text-myorange"
            href="https://www.instagram.com/a2dpcfactory"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="text-3xl text-mygreen hover:text-myorange"
            href="https://youtu.be/Z7PfX565AKY"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="text-white  border-t sm:border-t-0 text-sm w-full flex  justify-center">
        <div className="text-start md:w-3/6">
          <h2 className="text-center my-5 text-xl ">Contact</h2>

          <p className="my-5">
            <i className="fa-solid fa-location-crosshairs mx-2"></i> Kundrathur,
            Chennai-600069
          </p>
          <p className="my-5">
            <i className="fa-solid fa-phone mx-2"></i> +91 9445747768 +91
            9025380083
          </p>
          <p className="my-5">
            <i className="fa-solid fa-envelope mx-2"></i>
            enquiries@a2dpcfactory.com
          </p>
        </div>
      </div>
    </div>
  );
}
