import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import PCCalculator from "./layouts/PCCalculator";
import About from "./layouts/About";
import Testimonial from "./layouts/Testimonial";

export default function Home() {
  return (
    <div className="w-full h-auto   scroll">
      <Navbar />
      <Header />
      <About />

      <PCCalculator />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}
