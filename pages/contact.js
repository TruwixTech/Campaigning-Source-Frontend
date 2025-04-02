import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const createAlert = (message) => {
    const alertBox = document.querySelector(".alert");
    if (!alertBox) {
      console.error("Alert box not found!");
      return;
    }
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
        "template_r938qvo",
        form.current,
        "lSYWSkzq6KSqHXk_R"
      )
      .then(
        (result) => {
          createAlert("Message Sent Successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          createAlert("Message Sending Failed!, Try Again Later!");
          console.log(error.text);
        }
      );
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.link/3ik1jc', '_blank');
  };

  return (
    <>
      <Head>
        <title>Contact Us | Campaigning Source</title>
      </Head>
      <Layout>
        <main className="flex flex-col items-center justify-center min-h-screen py-12">
          <div className="flex flex-col md:flex-row w-11/12 gap-6 max-w-6xl p-8 space-y-8 bg-gray-700 backdrop-blur-sm rounded-lg shadow-md">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="alert hidden text-center p-4 bg-green-500 text-white rounded-md">
                Message Sent Successfully!
              </div>

              <h2 className="text-3xl font-bold text-center tracking-wider">Contact Us</h2>
              <form className="space-y-6 " ref={form} onSubmit={sendEmail}>
                <div className="space-y-2 ">
                  {/* <label className="block text-sm font-medium text-primaryText" htmlFor="name">
                                        Name
                                    </label> */}
                  <input
                    required
                    className="block w-full bg-gray-600 px-3 py-3  placeholder-slate-200/50  text-primaryText rounded-md border border-gray-200/50 focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="user_name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    required
                    className="block w-full bg-gray-600 px-3 py-3 placeholder-slate-200/50   text-primaryText rounded-md border border-gray-200/50 focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="user_contact"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    required
                    className="block w-full bg-gray-600 px-3 py-3 placeholder-slate-200/50  text-primaryText rounded-md border border-gray-200/50 focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="email"
                    name="user_email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <select
                    className="block w-full bg-gray-600 text-slate-200/50 px-3 py-3 border placeholder-slate-200/50 border-gray-200/50 rounded-md shadow-sm focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="service"
                    name="service"
                    required
                  >
                    <option value="None">Select</option>
                    <option value="Campaigning">Campaigning</option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Photography">Photography</option>
                    <option value="Videography">Videography</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <input
                    required
                    name="purpose"
                    className="block w-full bg-gray-600 px-3 py-3 placeholder-slate-200/50  text-primaryText rounded-md border border-gray-200/50 focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="organization"
                    placeholder="Enter your organization or company"
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    required
                    className="min-h-[100px] bg-gray-600 block w-full px-3 py-3 placeholder-slate-200/50  text-primaryText rounded-md border border-gray-200/50 focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                    id="message"
                    placeholder="Enter your message"
                    name="message"
                  />
                </div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryText transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <img
                alt="Contact Us"
                className="w-full h-full object-cover rounded-lg"
                src="/contact-us.svg"
              />
            </div>
          </div>
          <div className="w-11/12 max-w-6xl p-8 mt-12  space-y-4 text-center bg-gray-700 rounded-lg shadow-md flex flex-col md:flex-row justify-around items-center">
            <h3 className="text-3xl font-bold">Chat through Whatsapp!</h3>
            <div onClick={handleWhatsappClick}>
              <FaWhatsapp className="text-6xl text-green-500 hover:text-green-600" />
            </div>
          </div>
          <div className="w-11/12 max-w-6xl p-8 mt-12  space-y-4 text-center bg-gray-700 rounded-lg shadow-md flex flex-col md:flex-row justify-around items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-3xl font-bold">Follow Us</h3>
              <div className="flex justify-center space-x-4 text-2xl">
                <Link className="text-blue-600 hover:text-blue-800" href="#">
                  <FaFacebook />
                </Link>
                <Link className="text-blue-400 hover:text-blue-600" href="#">
                  <FaTwitter />
                </Link>
                <Link className="text-pink-600 hover:text-pink-800" href="https://instagram.com/campaigningsource/">
                  <FaInstagram />
                </Link>
                <Link className="text-blue-700 hover:text-blue-900" href="https://www.linkedin.com/company/100733755/">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div className="h-0 border-0 md:h-24 md:border md:border-1 md:border-gray-500"></div>
            <div>
              <h3 className="text-3xl font-bold">Phone</h3>
              <p className="text-gray-400">+91 95609 73844</p>
            </div>
            <div className="h-0 border-0 md:h-24 md:border md:border-1 md:border-gray-500"></div>
            <div>
              <h3 className="text-3xl font-bold">Email</h3>
              <p className="text-gray-400">
                <Link
                  className="text-gray-400 hover:text-blue-300"
                  href="mailto:info@campaigningsource.com"
                >
                  info@campaigningsource.com
                </Link>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
