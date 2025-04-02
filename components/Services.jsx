import WordSphere from "./WordSphere";

export default function Services() {
    return (
        <section className="w-full py-12 md:py-24 md:px-8 select-none">
            <div className="px-4 md:px-6">
                <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Services</h2>
                        <p className="text-gray-500 md:text-xl">
                            We provide a wide range of services to cater to your business and political promotion needs.
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="text-xl font-bold">Business Promotion</h3>
                                <p className="text-gray-500">
                                    We help businesses reach their target audience through strategic marketing and advertising campaigns.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold">Political Campaign Management</h3>
                                <p className="text-gray-500">
                                    Our team of experts can manage your political campaign from start to finish, ensuring maximum reach
                                    and impact.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold">Social Media Marketing</h3>
                                <p className="text-gray-500">
                                    We leverage the power of social media to help you connect with your audience and build a strong online
                                    presence.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold">Website and Applications</h3>
                                <p className="text-gray-500">
                                    We create beautiful and functional websites and applications to help you reach your goals, ensuring
                                    maximum user engagement.
                                </p>
                            </li>
                        </ul>
                        <div>
                            <a href="/contact" className="inline-block px-2 py-1.5 mt-4 text-lg font-bold text-gray-800 bg-primaryText rounded shadow hover:bg-sky-600">
                                and many more...
                            </a>
                        </div>
                    </div>
                    <div className="h-80 md:h-96 md:w-1/2 md:mt-12">
                        <WordSphere />
                    </div>
                </div>
            </div>
        </section>
    )
}

