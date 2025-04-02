import { motion } from "framer-motion";
import { Satisfy } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Component() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[41rem] md:w-1/2">
          <div className="max-w-2xl mb-28">
            <h2 className="text-3xl font-semibold text-gray-300 tracking-widest md:text-5xl">Make Your Startup a<br /><span className={`text-primaryText font-bold md:text-7xl ${satisfy.className}`}>Brand</span></h2>

            <p className="mt-4 text-sm text-gray-500 md:text-base">Your one-stop solution for political promotion and business development. We help you navigate the political landscape and grow your business.</p>

            <div className="flex flex-col mt-6 gap-2 md:flex-row">
              <Link href="/services" className="px-5 py-2 text-sm font-medium text-center text-white transition bg-primaryText/50 rounded-md hover:bg-primaryText/70">Get Started</Link>
              <Link href="/about" className="px-5 py-2 text-sm font-medium text-center text-gray-100 transition hover:text-gray-800 border border-gray-200 rounded-md md:mx-4 hover:bg-gray-300">Learn More</Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full md:w-1/2 mx-auto p-2">
          <div className="w-full h-full mx-auto">
            <Image src="/hero.svg" width={1000} height={1000} alt="hero image" className="opacity-90 -translate-x-24 md:translate-x-0" />
          </div>
        </motion.div>
      </section>
      <Tooltip />
    </>
  );
}
