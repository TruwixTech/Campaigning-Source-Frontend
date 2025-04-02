import HomePageServices from "@/data/HomePageServices"

export default function HomeServices() {
    return (
        <section className="bg-bg text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                    <p className="mt-4 text-gray-300">
                        At Campaigning Source, we help you navigate the political landscape and grow your business.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {HomePageServices.map((service) => (
                        <a
                            key={service.id}
                            className="block rounded-xl border border-bg/20 bg-slate-800 p-8 shadow-xl transition hover:border-primaryText/10 hover:shadow-primaryText/30"
                            href={service.link}
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full text-2xl bg-primaryText/10">
                                {service.logo}
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">{service.title}</h2>

                            <p className="mt-1 text-sm text-gray-300">{service.content}</p>
                        </a>
                    ))}

                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/contact"
                        className="inline-block rounded bg-primaryText/90 px-12 py-3 text-sm font-medium text-gray-50 transition hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-pink-500"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    )
}