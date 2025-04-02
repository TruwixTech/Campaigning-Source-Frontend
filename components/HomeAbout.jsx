import { motion } from "framer-motion"

export default function HomeAbout() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", damping: 30 }}
                className="w-full py-6 md:py-12 lg:py-16 bg-slate-800"
            >
                <div className="px-4 md:px-6 bg-gray-700 w-11/12 mx-auto p-16 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="md:w-1/2">
                            <img
                                alt="Political Promotion"
                                className="mx-auto aspect-video object-cover object-center sm:w-full lg:order-last"
                                src="/political.svg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-400 bg-opacity-70 px-3 py-1 text-sm text-gray-100">
                                    Political Promotion
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Make Your Voice Heard
                                </h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We provide strategic political promotion services to ensure
                                    your message reaches the right audience at the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", damping: 30 }} className="w-full py-6 md:py-12 lg:py-16 bg-slate-800">
                <div className="px-4 md:px-6 bg-gray-700 w-11/12 mx-auto p-16 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-400 bg-opacity-70 px-3 py-1 text-sm text-gray-100">
                                    Business Development
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Grow Your Business
                                </h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                    Our business development services are designed to help you
                                    expand your business, reach new markets, and increase your
                                    bottom line.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                alt="Business Development"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                src="/business.svg"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}