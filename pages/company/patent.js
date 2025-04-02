import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function Patent() {
    return (
        <>
            <Head>
                <title>Patent | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>What is Patent?</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            A patent provides an individual or a business with rights to protect their invention from
                            illegal importing, producing, or selling of the product without the permission of the
                            patent holder. To protect their innovative ideas from being taken advantage of, inventors
                            often choose to file for a patent. Filing a patent in India is a legally complex process and
                            it is time-consuming. Fortunately, Campaigning Source offers a hassle-free solution for
                            patent registration, allowing inventors to complete their registration quickly and
                            efficiently.
                        </p>
                    </div>
                    <Image src='/service/gstPage.svg' alt='Patent' width={600} height={600} />
                </section>
                <div className='w-11/12 mx-auto'>
                    <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Pricing</h2>
                </div>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center'>

                    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Starter
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Perfect for initial discussion on protecting your invention</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹799</span>{` `}₹399 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Assured callback from our Patent agent in the next 2 hours </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Consultation call with a registered patent agent for 30 mins </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Guidance on patentability/novelty/innovative nature of the
                                                patent/process/dispute </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Get 5% discount when filing for a patent application </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Standard
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Perfect for Complete Specification Patent Filing</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹24,299</span>{` `}₹16,999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />


                                            <span className="text-gray-500"> Consultation call with a registered patent agent for 30 mins </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />


                                            <span className="text-gray-500"> Drafting and filing of Complete Specification Patent between 12-14 days </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />


                                            <span className="text-gray-500"> Unlimited consultation calls with a patent agent on how to apply the patent </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />


                                            <span className="text-gray-500"> 10% discount on subsequent stages of the patent if paid for the Patent Registration service </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Fast Track
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Perfect for Expedited Complete Specification Patent Filing</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹34,899</span>{` `}₹21,999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />
                                            <span className="text-gray-500"> Dedicated IP lawyer to guide you throughout the process </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />
                                            <span className="text-gray-500"> Drafting and filing of Complete Specification Patent between 5-7 days</span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />
                                            <span className="text-gray-500"> Unlimited consultation calls with a patent agent on how to apply the patent </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />
                                            <span className="text-gray-500"> 10% discount on subsequent stages of the patent if paid for the Patent Registration service </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />
                                            <span className="text-gray-500"> Accelerated publication and Request for early examination</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <p className='text-center mt-3 text-gray-500'>
                    <span className='text-primaryText'>Note:</span> Govt. fees and taxes are not included in the prices
                </p>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Patent in India</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            The Patents Act, 1970, which was amended in 2005 to conform to worldwide norms,
                            regulates the patent status in India. According to the Act, patents are given for
                            brand-new innovations that are inventive, non-obvious, and applicable to industry. There
                            are several stages in the Indian patent application procedure, including filing the
                            application, having it examined, and having it published. After review, a claim may be
                            approved or rejected. Once issued, a patent gives its proprietor the sole authority to
                            make, market, and use the creation for a predetermined amount of time.
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>What is Patent Registration?</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            Patent registration in India is legally demanding. It includes securing exclusive rights to
                            an invention by its creator or owner. It is granted by the government for a specific
                            duration, generally for 20 years, to prevent others from making, using, or selling the
                            invention without the patent owner's permission. In return, the patent owner must
                            disclose all details and specifications of the invention to the public for further research
                            and development. Campaigning Source can complete the patent filing online with expert
                            support
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>What can be patented and what now in India?</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            Registration of Patent in India allows inventions related to products, processes,
                            and methods to be patented. This includes but is not limited to chemicals, drugs,
                            pharmaceuticals, software, and other latest improvements to the existing innovations.
                            However, the invention must be novel, non-obvious, and have industrial applicability.
                        </p>

                        <p className='text-xl text-gray-400 mt-4'>
                            Patent registration in India does not allow the following inventions to be patented:
                        </p>
                        <ul className='text-gray-500 list-disc flex flex-col gap-2 mt-4'>
                            <li>The discovery of a natural law or scientific principle</li>
                            <li>Literary, theatrical, musical, or artistic works are examples of aesthetic creations</li>
                            <li>Plans, guidelines, or techniques for engaging in mental activity, playing games, or conducting business Inventions that violate morality or public order</li>
                            <li>Inventions that might be harmful to the environment, animals, or people</li>
                        </ul>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-start justify-around'>
                    <div className='max-w-xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Importance of Patent Registration</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            Registration of patent in India provides several benefits, including:
                        </p>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>Exclusive rights to the inventor or owner for the invention</li>
                            <li>The capacity to prevent unauthorized production, use, or sale of the invention</li>
                            <li>The capacity to sell, license, or otherwise dispose of the patent</li>
                            <li>The capacity to pursue compensation and legal action against patent infringers</li>
                            <li>Encourages research and development and innovation, both of which can stimulate economic growth</li>
                        </ul>
                    </div>
                    <div className='max-w-xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Eligibility Criteria for Patent Register</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            For completing the patent registration process following eligibility criteria has to be
                            fulfilled in order to file for registration of patent in India:
                        </p>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>Be the inventor or owner of the invention</li>
                            <li>The invention must be new</li>
                            <li>The invention should not be published in the public</li>
                            <li>The applicant must provide a detailed description and specifications of the invention</li>
                        </ul>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-start justify-around'>
                    <div className='max-w-xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Documents for Filing Patent Registration Application</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            The following documents are to be submitted along with a patent registration application:
                        </p>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>A complete specification of the invention, including the details of how it works and its applications</li>
                            <li>A provisional application for the patent</li>
                            <li>A declaration of inventor</li>
                        </ul>
                    </div>
                    <div className='max-w-xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Forms Required to be Filed for Patent Registration Application</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            For the registration of a patent in India, the following forms must be submitted to the Indian Patent Office:
                        </p>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li><strong>Form 1:</strong> This is the application form for the grant of a patent and includes details of the applicant, the invention, and its claims</li>
                            <li><strong>Form 2:</strong> This form is used to furnish the details of the priority application filed by the applicant, if any</li>
                            <li><strong>Form 3:</strong> This form is used to furnish the details of the inventors of the patent</li>
                            <li><strong>Form 5:</strong> It is used to furnish the details of the government undertaking, if any, to which the patent is to be assigned</li>
                            <li><strong>Form 26:</strong> This form is used to furnish the details of the exclusive marketing rights, if any, claimed by the applicant</li>
                        </ul>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div className='max-w-xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Where to File a Patent Application?</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            It's filed at the appropriate patent office using Form-1 and a provisional/complete
                            specification, along with the required fee. The following factors are used to determine a
                            patent office's jurisdiction:
                        </p>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>
                                The jurisdiction of the patent office is determined by the applicant's place of
                                residence, domicile, or business, with the first mentioned applicant's place
                                considered in the case of joint applicants
                            </li>
                            <li>
                                The origin of the invention also plays a role in determining the patent office's
                                jurisdiction
                            </li>
                            <li>
                                If the applicant is a foreign entity without a business or domicile in India, the
                                designated address for service in India is taken into consideration
                            </li>
                            <li>
                                Considering these factors is crucial for accurate and efficient processing of
                                patent registration in India.
                            </li>
                        </ul>
                    </div>
                    <div className='grid md:grid-cols-2 gap-3 max-w-3xl'>
                        <div className='outline rounded-lg p-5 outline-1'>
                            <h2 className='text-xl'>Mumbai Patent Office</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4'>
                                <li>The Mumbai Patent Office is responsible for patent-related matters in multiple territories</li>
                                <li>These territories include the states of Gujarat, Maharashtra, Madhya Pradesh,
                                    Chhattisgarh, Goa</li>
                                <li> The Mumbai Patent Office is also responsible for patent-related matters in the
                                    Union Territories of Daman & Diu, and Dadra & Nagar Haveli.</li>
                            </ul>
                        </div>
                        <div className='outline rounded-lg p-5 outline-1'>
                            <h2 className='text-xl'>Delhi Patent Office</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4'>
                                <li>The Delhi Patent Office has jurisdiction over several states and territories in India.</li>
                                <li>These include Haryana, Himachal Pradesh, Jammu and Kashmir, Punjab,
                                    Rajasthan, Uttar Pradesh, Uttarakhand, and the national capital territory of Delhi</li>
                                <li> The Delhi patent office is also responsible for patent-related matters in the Union
                                    Territory of Chandigarh.</li>
                            </ul>
                        </div>
                        <div className='outline rounded-lg p-5 outline-1'>
                            <h2 className='text-xl'>Chennai Patent Office</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4'>
                                <li>The Chennai Patent Office is responsible for managing patent-related affairs in
                                    multiple regions</li>
                                <li> These regions include the states of Andhra Pradesh, Karnataka, Kerala, and Tamil
                                    Nadu</li>
                                <li> The Chennai Patent Office is also responsible for patent-related matters in the
                                    Union Territories of Pondicherry and Lakshadweep.</li>
                            </ul>
                        </div>
                        <div className='outline rounded-lg p-5 outline-1'>
                            <h2 className='text-xl'>Kolkata Patent Office</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4'>
                                <li>The Kolkata Patent Office has jurisdiction over several territories in India.
                                </li>
                                <li>These territories include the states of Bihar, Orissa, West Bengal, Sikkim, Assam,
                                    Meghalaya, Manipur, Tripura, Nagaland, and Arunachal Pradesh.
                                </li>
                                <li>The Kolkata Patent Office is also responsible for patent-related matters in the
                                    Union Territory of Andaman and Nicobar Islands, covering a significant portion of
                                    India</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Requirements for protection</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li>A mark needs to be recognizable in the sense that it needs to be able to pinpoint
                                    the origin of a particular good.
                                </li>
                                <li> It calls for a brand-new, worthwhile, and interesting invention</li>
                                <li>A work ought to be distinctive, creative, and physically generated.
                                </li>
                            </ul>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Terms of Protection</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li>Whenever the trademark is used commercially
                                </li>
                                <li> 20 years of patent</li>
                                <li>Author's lifespan plus 70 years for copyright
                                </li>
                            </ul>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Rights granted</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li>Right to make use of the mark and to forbid third parties from making use of the
                                    same mark in a manner that might lead to confusion regarding the source of the
                                    products or services.
                                </li>
                                <li>Right to prevent the patented invention from being manufactured, sold, or
                                    imported by others.
                                </li>
                                <li>Copyrighted works have the authority to restrict their use, distribution,
                                    performance in public, and display.
                                </li>
                            </ul>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Rules to keep in mind while filing the patent application</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li>The patent application must be filed with the Indian Patent Office
                                </li>
                                <li>The patent application must be filed in the name of the inventor(s).
                                </li>
                                <li>The patent application must be complete and accurate.
                                </li>
                                <li>The patent application must be accompanied by the prescribed fees
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div className='grid md:grid-cols-1 gap-6'>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Drafting a Patent Application</h2>
                            <p className='text-gray-400 mt-4'>
                                The drafting of a patent application is a complex process that requires a deep
                                understanding of patent law and a thorough understanding of the invention. The patent
                                application must be drafted in a clear and concise manner, and it must meet all of the
                                requirements of the Indian Patent Act, 1970.
                            </p>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li>Title: The title of the patent application should be clear and concise, and it should
                                    accurately describe the invention.
                                </li>
                                <li> Abstract: The abstract is a brief summary of the invention. It should be no more
                                    than 150 words, and it should be written in a clear and concise manner.
                                </li>
                                <li>Description: The description is a detailed explanation of the invention. It should
                                    include
                                </li>
                            </ul>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <img src='/regis/patent.png' alt='Patent'  className='mx-auto'/>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Will Patent Registration in India Protect My Invention Outside India
                                as Well?</h2>
                            <p className='text-gray-400 mt-4'>
                                A patent that has been registered in India is only valid there, and its owner is not
                                permitted to use its rights outside of India. However, if the patent holder desires patent
                                protection in additional countries, they must submit an application within 12 months
                                following the patent's registration in India.
                            </p>
                        </div>
                        <div className='outline outline-1 p-6 md:p-12 rounded-xl'>
                            <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Types of Patent Application in India</h2>
                            <ul className='text-gray-400 flex flex-col gap-3 mt-4 list-disc'>
                                <li><strong>Ordinary Application</strong>: This is the most common type of application and is filed by
                                    the applicant directly with the patent office
                                </li>
                                <li><strong>Convention Application</strong>: It is filed by an applicant who has already filed a patent
                                    application in a convention country
                                </li>
                                <li><strong>PCT International Application</strong>: This application is filed under the Patent
                                    Cooperation Treaty (PCT) and is recognized in all member countries.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />


                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Why Campaigning Source?</h2>
                        <p className='text-gray-400 max-w-2xl mt-4'>
                            Campaigning Source is an excellent choice for businesses and individuals looking to
                            protect their intellectual property through patent registration services. With their
                            experienced and knowledgeable team of patent attorneys, Campaigning Source
                            provides comprehensive patent registration services that cover all aspects of the
                            process, from conducting patent searches to filing the patent application and obtaining
                            the patent registration certificate. Our user-friendly online platform makes it easy for
                            you to track the status of their patent application, and our competitive pricing and
                            transparent fee structure ensure that clients get the best value for their money. Overall,
                            Campaigning Source's patent registration services are an excellent investment for any
                            business or individual looking to protect their innovative ideas and inventions.
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>
            </Layout>
        </>
    );
}
