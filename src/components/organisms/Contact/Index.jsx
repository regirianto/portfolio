import React, { forwardRef, useEffect, useRef, useState } from "react";
import TitleSection from "../../atom/TitleSection";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";

const Contact = forwardRef(({}, ref) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_sybu3bk",
        "template_cads2in",
        formRef.current,
        "NAKvSO7dItigCzNn_"
      );
      setLoading(true);
      console.log(response);
      if (response.text === "OK") {
        setMessage("Thank you, your email was sent successfully");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="my-20" ref={ref}>
      <TitleSection title="Contact" />
      <form
        className="flex justify-center flex-col items-center"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <p className="text-primary font-bold text-center text-xl mb-5">
          Have a question or want to work together?
        </p>
        <div className="md:w-[700px] w-[350px] flex flex-col gap-5  justify-center  p-5">
          <p
            className={`${
              !message && "opacity-0"
            } bg-teal-400 text-white py-3 px-3 rounded transition-opacity flex items-center justify-between`}
          >
            {message} <AiFillCheckCircle className="text-2xl" />
          </p>

          <input
            type="text"
            name="user_name"
            className="py-4 px-4 w-full bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="py-4 px-4 w-full bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
            placeholder="Enter email"
            required
          />
          <textarea
            name="message"
            id=""
            required
            placeholder="Your Message"
            className="w-full h-32 py-4 px-4  bg-slate-200 rounded focus:ring-2 focus:ring-primary outline-none placeholder:font-semibold"
          ></textarea>
          <button
            className={`${
              !loading ? "bg-primary hover:bg-primary/90" : "bg-slate-500"
            }  font-semibold text-xl  text-white py-2 rounded-full font-inter uppercase tracking-wide`}
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default Contact;
