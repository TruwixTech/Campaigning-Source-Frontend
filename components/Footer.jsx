import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaChevronUp,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MagneticEffect from "./MagneticEffect";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-transparent bg-gradient-to-t from-blue-500/20 to-transparent">
      <div className="mx-auto relative max-w-screen-xl px-4 py-10 md:px-10">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <MagneticEffect>
            <Link
              href="#"
              className="inline-block rounded-full bg-primaryText p-2 text-white shadow transition hover:bg-indigo-500 sm:p-3 lg:p-4"
            >
              <span className="sr-only">Back to top</span>
              <FaChevronUp />
            </Link>
          </MagneticEffect>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-center md:justify-start mb-8 lg:mb-0">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>

            <div className="lg:text-right">
              <p className="mx-auto mt-6 max-w-md text-center md:text-left leading-relaxed text-gray-300">
                Your one-stop solution for political promotion and business
                development. We help you navigate the political landscape and
                grow your business.
              </p>
            </div>
          </div>
          <div>
            <ul className="mt-12 flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8 lg:gap-12">
              <li>
           
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/services"
                >
                  Services
                </a>
                
              </li>
              <li>
              <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/termsandconditions"
                >
                  Terms and Conditions
                </a></li>
                <li>
              <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/privacypolicy"
                >
                 Privacy Policy
                </a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 mb-4" />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div>
            <p className="text-center text-gray-400">
              © {year} Campaigning Source. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex justify-center lg:justify-end gap-6 md:gap-8">
              <li>
                <MagneticEffect>
                  {" "}
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-blue-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-4-w-4" />
                  </a>
                </MagneticEffect>
              </li>
              <li>
                {" "}
                <MagneticEffect>
                  <a
                    href="https://www.instagram.com/campaigningsource/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-purple-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-4-w-4" />
                  </a>
                </MagneticEffect>
              </li>
              <li>
                <MagneticEffect>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-gray-50"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter className="h-4-w-4" />
                  </Link>
                </MagneticEffect>
              </li>
              <li>
                <MagneticEffect>
                  <Link
                    href="https://www.linkedin.com/company/100733755/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-blue-600"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-4-w-4" />
                  </Link>
                </MagneticEffect>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
