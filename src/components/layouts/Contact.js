import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../assets/contact.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikp8xes",
        "template_rqd2mme",
        form.current,
        "GIm9L2rMJrBh_7YRG"
      )
      .then(form.current.reset());
  };
  return (
    <div id="contact" className="w-full h-auto py-1 bg-mygray ">
      <div className="w-full h-1/6 py-5 text-center">
        <h2 className="text-3xl head-font md:mb-10  text-white font-bold">
          <span className="text-myorange ">C</span>ontact
          <span className="text-myorange  pl-2 ">U</span>s
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-end">
          <img className="w-[300px] md:w-[400px]  py-5 md:py-0" src={contact} alt="contactImage" />
        </div>
        <div className="w-full h-5/6 flex items-center justify-center md:justify-start ">
          <form
            className="bg-mygreen z-50 p-7 rounded-sm shadow"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="flex-col my-1">
              <label className="w-full  text-white font-semibold ">
                Name *
              </label>
              <input
                className="w-full my-2 shadow text-white  p-2 bg-myorange h-[40px] border-none rounded-sm outline-none"
                type="text"
                name="user_name"
                htmlFor="name"
                required
              ></input>
            </div>
            <div className="flex-col my-1">
              <label className="w-full text-white font-semibold ">
                Email Address*
              </label>
              <input
                className="w-full my-2 shadow text-white p-2 bg-myorange h-[40px] border-none rounded-sm outline-none"
                type="email"
                name="user_email"
                htmlFor="email"
                required
              ></input>
            </div>
            <div className="flex-col my-1">
              <label className="w-full text-white font-semibold ">
                Your Message *
              </label>
              <textarea
                className="w-full my-2 shadow text-white p-2 resize-none bg-myorange h-[100px] rounded-sm border-none outline-none"
                type="text"
                name="message"
                htmlFor="text"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button className="bg-myorange text-white px-6 py-2 font-semibold rounded-sm shadow">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
