import Layout from "@/components/Layout"
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Satisfy } from "next/font/google"
import Link from "next/link"
import Contact from "@/components/Contact"

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
})

const data = [
  {
    title: "ISO Certification",
    link: "/company/iso",
  },
  {
    title: "Patent Filing",
    link: "/company/patent",
  },
  {
    title: "FSSAI Registration",
    link: "/company/fssai",
  },
  {
    title: "GST Registration",
    link: "/company/gst",
  },
  {
    title: "Copyright Filling",
    link: "/company/copyright",
  },
  {
    title: "PVT LTD Registration",
    link: "/company/pvtltd",
  },
  {
    title: "Trademark Registration",
    link: "/company/trademark",
  },
  {
    title: "OPC Registration",
    link: "/company/opc",
  },
  {
    title: "Partnership Firm",
    link: "/company/partnership",
  },
  {
    title: "LLP Registration",
    link: "/company/llp",
  },
]

function SubmitIdea() {
  return (
    <>
      <Head>
        <title>Submit an Idea | Campaigning Source</title>
      </Head>
      <Layout>
        <section className="flex flex-col md:flex-row items-center justify-center w-11/12 mx-auto overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
            className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[32rem] md:w-1/2">
            <div className="max-w-2xl mb-28">
              <h2 className="text-3xl font-semibold text-gray-300 tracking-widest md:text-5xl">Want your Business<br /><span className={`text-primaryText font-bold md:text-7xl ${satisfy.className}`}>Registered</span></h2>

              <p className="mt-4 text-sm text-gray-500 md:text-base">Make your dreams true with Campaigning Source, do any kind of registrations for your company with us.</p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
            className="w-full md:w-1/2 mx-auto p-2">
            <Image src={"/service/gstPage.svg"} alt="Submit an Idea" width={600} height={600} />
          </motion.div>
        </section>

        <section className="w-11/12 mx-auto my-12">
          <h2 className="text-3xl font-semibold text-primaryText tracking-widest md:text-5xl mb-4">Services we offer</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {data.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-center justify-center px-4 py-12 outline outline-1 rounded-lg hover:scale-95 transition-all">
                <h3 className="text-lg font-semibold text-primaryText">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <Contact />
      </Layout>

    </>
  )
}

export default SubmitIdea
