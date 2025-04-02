import {
  MdOutlineAlternateEmail,
  MdOutlineBusiness,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FloatingForm = ({ closeForm }) => {
  const form = useRef();

  const createAlert = (message) => {
    const alertBox = document.querySelector(".alert");
    alertBox.innerHTML = message;
    alertBox.style.display = "block";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n0tshcg",
        "template_ko5s0h6",
        form.current,
        "lSYWSkzq6KSqHXk_R"
      )
      .then(
        (result) => {
          createAlert("Message Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          createAlert("Message Sending Failed!, Try Again Later!");
          console.log(error.text);
        }
      );

    closeForm();
  };
  return (
    <AnimatePresence>
      {" "}
      <motion.div
        initial={{ opacity: 0, y:50 }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0, y:50 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      >
        <div className="mx-auto max-w-lg bg-gray-700 opacity-90 rounded-lg p-8 shadow-lg">
          <button className="absolute text-xl" onClick={closeForm}>
            <IoMdClose className="text-gray-400 hover:text-gray-200 transition" />
          </button>
          <h1 className="text-center text-2xl font-bold text-primaryText sm:text-3xl">
            Get Started Today!
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Dive into the world of Campaigning Source and start building your
            next project today.
          </p>
          <form className="mt-6 space-y-4" ref={form} onSubmit={sendEmail}>
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="Name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg placeholder-slate-200/50 bg-gray-600 border-gray-200/50 focus:border-sky-400 p-4 pe-12 text-sm shadow-sm"
                placeholder="Name"
                name="from_name"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FaRegUserCircle className="text-gray-200" />
              </span>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg placeholder-slate-200/50 bg-gray-600 border-gray-200/50 focus:border-sky-400 p-4 pe-12 text-sm shadow-sm"
                placeholder="Email"
                name="from_email"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdOutlineAlternateEmail className="text-gray-200" />
              </span>
            </div>

            {/* Job Title Input */}
            <div className="relative">
              <label htmlFor="Job" className="sr-only">
                Job Title
              </label>
              <input
                type="text"
                className="w-full rounded-lg placeholder-slate-200/50 bg-gray-600 border-gray-200/50 focus:border-sky-400 p-4 pe-12 text-sm shadow-sm"
                placeholder="Job Title"
                name="job"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <IoBriefcaseOutline className="text-gray-200" />
              </span>
            </div>

            {/* Business Name Input */}
            <div className="relative">
              <label htmlFor="Business" className="sr-only">
                Business
              </label>
              <input
                type="text"
                className="w-full rounded-lg placeholder-slate-200/50 bg-gray-600 border-gray-200/50 focus:border-sky-400 p-4 pe-12 text-sm shadow-sm"
                placeholder="Your business"
                name="business"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdOutlineBusiness className="text-gray-200" />
              </span>
            </div>

            {/* Whatsapp Contact Input */}
            <div className="relative">
              <label htmlFor="Whatsapp" className="sr-only">
                Whatsapp Contact
              </label>
              <input
                type="text"
                className="w-full rounded-lg placeholder-slate-200/50 bg-gray-600 border-gray-200/50 focus:border-sky-400 p-4 pe-12 text-sm shadow-sm"
                placeholder="WhatsApp Contact Number"
                name="whatsapp"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdOutlineWhatsapp className="text-gray-200" />
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-primaryText px-5 py-3 text-sm font-medium text-white hover:text-primaryText transition border-primaryText border hover:bg-transparent hover:backdrop-blur-sm"
            >
              Dive in
            </button>
          </form>
          <div className="alert"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingForm;
