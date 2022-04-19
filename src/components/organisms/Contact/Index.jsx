import React, { forwardRef, useEffect } from "react";
import TitleSection from "../../atom/TitleSection";

const Contact = forwardRef(({}, ref) => {
  return (
    <div className="my-20" ref={ref}>
      <TitleSection title="Contact" />
      <form className="flex justify-center flex-col items-center">
        <p className="text-primary font-bold text-center text-xl mb-5">
          Have a question or want to work together?
        </p>
        <div className="md:w-[700px] w-[350px] flex flex-col gap-5  justify-center  p-5">
          <input
            type="text"
            className="py-4 px-4 w-full bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="py-4 px-4 w-full bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
            placeholder="Enter email"
            required
          />
          <textarea
            name=""
            id=""
            required
            placeholder="Your Message"
            className="w-full h-32 py-4 px-4  bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
          ></textarea>
          <button className="bg-primary hover:bg-primary/90 font-semibold text-xl  text-white py-2 rounded-full font-inter uppercase tracking-wide">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default Contact;
