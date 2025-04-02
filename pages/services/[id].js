import Link from "next/link"
import Head from "next/head"
import Layout from "@/components/Layout"
import services from "@/data/services"
import { useState } from "react"
import Banner from "@/components/Banner"
import GraphicsCarousel from "@/components/GraphicsCarousel"
import Testimonials from "@/components/Testimonials"

export default function ServicePage({ service }) {

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const displayDescription =
        showFullDescription ? service.desc : service.desc.substring(0, 300);

    return (
        <>
            <Head>
                <title>{`${service.title} | Campaigning Source`}</title>
            </Head>
            <Layout>
                <main className="w-full">
                    <section className="md:w-11/12 mx-auto py-12 md:p-20">
                        <div className="px-4 md:px-6">
                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-wide md:text-5xl text-center md:text-left">{service.title}</h1>
                                        <p className="text-gray-500 max-w-xl md:text-lg text-center md:text-left">
                                            {displayDescription}
                                            {service.desc.length > 300 && (
                                                <span onClick={toggleDescription} className="text-gray-300 text-xs">
                                                    {showFullDescription ? " Read less" : " ... Read more"}
                                                </span>
                                            )}
                                        </p>
                                        <div className="my-4">
                                            <Link
                                                className="inline-flex h-9 items-center justify-center rounded-md outline outline-1 outline-gray-50 px-3 py-1 text-lg mt-2 font-bold text-gray-300 hover:text-gray-800 shadow transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="/pricing"
                                            >
                                                Pricing
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    alt="Service Picture"
                                    src={service.image}
                                    className="w-full h-auto max-w-lg"
                                />
                            </div>
                        </div>
                    </section>

                    {service.example ? (
                        <section className="bg-gray-800 mb-12">
                            <h2 className="text-3xl font-bold tracking-wide md:text-5xl text-center py-3">Examples</h2>
                            <div className="py-2">
                                <GraphicsCarousel />
                            </div>
                        </section>
                    ) : null}

                    {service.what ?
                        (
                            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                                <div className="px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                        <div className="space-y-2 flex flex-col gap-3">
                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
                                                What We Offer
                                            </h2>
                                            <div className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center">
                                                {Object.entries(service.what).map(([title, description]) => (
                                                    <div key={title} className="flex flex-col gap-4 w-80 items-center justify-center min-h-40 py-3 px-2 bg-gray-900 rounded-2xl hover:bg-gray-900/70 hover:scale-95 transition-all">
                                                        <h3 className="text-xl font-bold text-gr">{title}</h3>
                                                        <p className="text-gray-300">{description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                        : null}

                    {service.where && (
                        <section className="w-full py-12 md:py-24 lg:py-32">
                            <div className="px-4 md:px-6">
                                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                    <div className="space-y-2 flex flex-col gap-3">
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
                                            Where We Deliver
                                        </h2>
                                        <div className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center">
                                            <p className="text-gray-500 text-xl">
                                                {service.where}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {service.benefits ?
                        (
                            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                                <div className="px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                        <div className="space-y-2 flex flex-col gap-3">
                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
                                                Benefits you get
                                            </h2>
                                            <div className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center">
                                                {Object.entries(service.benefits).map(([title, description]) => (
                                                    <div key={title} className="flex flex-col gap-4 w-80 items-center justify-center min-h-40 py-3 px-2 outline-gray-300 outline rounded-2xl hover:bg-gray-900/70 hover:scale-95 transition-all">
                                                        <h3 className="text-xl font-bold text-gr">{title}</h3>
                                                        <p className="text-gray-300">{description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                        : null}

                    <section>
                        <Testimonials />
                    </section>


                    <section>
                        <Banner />
                    </section>
                </main>
            </Layout>
        </>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;

    const service = services.find((service) => service.key === id);

    if (!service) {
        return {
            notFound: true,
        };
    }

    // Convert logo to a JSON-serializable data type (string)
    const serviceWithSerializableLogo = {
        ...service,
        logo: service.logo.toString() // Convert symbol to string
    };

    return {
        props: {
            service: serviceWithSerializableLogo,
        },
    };
}
