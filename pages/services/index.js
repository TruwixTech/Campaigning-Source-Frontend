import Layout from "@/components/Layout";
import Head from "next/head";
import { IoMdSearch } from "react-icons/io";
import services from "@/data/services";
import Link from "next/link";
import { useState } from "react";
import { FaRegBuilding } from "react-icons/fa6";

const Services = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredServices = services
        .filter(service => {
            return service.title.toLowerCase().includes(searchQuery.toLowerCase())
        })
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
            <Head>
                <title>Services | Campaigning Source</title>
                <meta name="description" content="Services page" />
            </Head>
            <Layout>
                <div className="flex flex-col gap-12 px-4 py-6 md:px-6 md:py-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl/none">Our Services</h1>
                        <p className="max-w-[700px] text-gray-500 md:text-xl">
                            We specialize in political promotion and business development, providing a range of services tailored to your
                            needs.
                        </p>
                        <div className="relative">
                            <input
                                className="w-full p-2 pl-10 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                                placeholder="Search services..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <IoMdSearch className="absolute top-2.5 left-3 h-5 w-5 text-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {filteredServices.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">Services We Offer</h2>
                                <div className="grid gap-4 md:grid-cols-4 lg:gap-6">
                                    {filteredServices?.map((item) => (
                                        <Link href={item.link} key={item.id}>
                                            <div className="p-4 border rounded-lg text-gray-400 md:hover:scale-[0.98] min-h-48 transition-all flex flex-col justify-center">
                                                <h3 className="flex items-center font-bold text-xl text-primaryText">
                                                    <span className="mr-2 text-gray-200 text-2xl">{item.logo}</span>
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 text-wrap">{item.desc.length > 160 ? `${item.desc.slice(0, 160)}...` : item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    <Link href={'/company'}>
                                        <div className="p-4 border rounded-lg text-gray-400 md:hover:scale-[0.98] min-h-48 transition-all flex flex-col justify-center">
                                            <h3 className="flex items-center font-bold text-xl text-primaryText">
                                                <span className="mr-2 text-gray-200 text-2xl"><FaRegBuilding /></span>
                                                Company Registration
                                            </h3>
                                            <p className="text-gray-500 text-wrap">Want to register your company, LLP, OPC (One Person Company) or want to register your Intelluctual Property, we can do that for you.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Services;
