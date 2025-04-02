import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function FSSAI() {
    return (
        <>
            <Head>
                <title>FSSAI | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>FSSAI Registration and License Online</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            If you're in the food business, getting FSSAI registration is a must. Whether you're
                            involved in processing, manufacturing, packaging, distribution, or selling, you need a
                            Food License. It is issued by the Food Safety and Standards Authority of India (FSSAI),
                            which oversees food businesses adhering to the regulations in the FSSAI Act of 2006.
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
                                    <p className="mt-2 text-gray-700">Ideal for basic food license customers</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹3399</span>{` `}₹2499 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 15-minutes call with food license experts </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Assistance with selecting the right license type </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your food license application filing done in 24 hours </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 99% faster application approval </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Standard - FSSAI Certificate
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Ideal for starting a food business with basic food license + GST compliances</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹6599</span>{` `}₹4499 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 15-minutes call with food license experts </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Assistance with selecting the right license type </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your food license application filing done in 24 hours </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 99% faster application approval </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Fast Track - FSSAI Certificate + GST
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Comprehensive package for running the food business + brand protection</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹34,899</span>{` `}₹21,999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 15-minutes call with food license experts </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Assistance with selecting the right license type </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your food license application filing done in 24 hours </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 99% faster application approval </span>
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
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Food License Process</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            <strong>Step 1:</strong> Once you get in touch with our experts, Our agents will set up a call with you
                            later and collect all the necessary documents to start the registration process<br />
                            <strong>Step 2:</strong> Our expert team will start the registration process for your food business. The
                            process will be completely transparent. You will get timely updates from our experts.<br />
                            <strong>Step 3:</strong> The officials from the food department will inspect your food business. After
                            successful inspection, your food business is now registered and you will get the 14 digit
                            FSSAI license
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse gap-x-6 items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Benefits of FSSAI Registration</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            The food business owners can benefit from having an FSSAI license by doing the
                            following:
                            Legal advantage<br />
                            Maintain food safety<br />
                            Increase goodwill<br />
                            Make consumers aware<br />
                            It helps with import food regulation, production, storage, distribution, and sale
                            When an entrepreneur holds an FSSAI license, raising money from investors is simple
                            Food goods with FSSAI trademarks assure consumers of the products' high quality. The
                            registration number visible on the food premises denotes that the location complies
                            with criteria for cleanliness and quality.

                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse gap-x-6 items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Procedure for Renewal</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            An FSSAI license is valid for a period of one to five years and can be renewed before it
                            expires. Any person or organization that has a Food license is eligible to apply for a
                            renewal of their license by submitting an application no later than 30 days before their
                            license expires. The renewal process is similar to the application process and requires
                            the same documents. Any FSSAI renewal application submitted after the expiration date
                            is subject to a ₹100 per day late fee. The Food Business Operator must stop all
                            operations at the location if the food license has expired. If you want to change your
                            business address or any other details on your license, you will need to apply for a new
                            license. You can do this by filling out the online application form and providing the
                            required documents.

                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Who is Required to Apply for FSSAI Registration?
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            From hawkers, home vendors to giant food chains everyone operating in the food
                            industry needs to register with FSSAI. Irrespective of whether you are operating online
                            or offline, or whether you are a local player or into the import or export of food products,
                            you need to register with FSSAI. Based on their size and the places they operate, they
                            have to get one of the 3 types of registration/license that are discussed below. If your
                            business falls in any one of the below-listed categories, then a food license is
                            mandatory for you:<br />
                            ● Procurement<br />
                            ● Manufacture<br />
                            ● Distribution<br />
                            ● Processing<br />
                            ● Packaging<br />
                            ● Storage<br />
                            ● Selling<br />
                            In other words, an individual or a company that operates with food substances from
                            farm to plate must obtain the food license.
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>FSSAI License Government Fees (FoSCoS)</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            When submitting the form, the applicant or FBO needs to pay the below-mentioned fees.<br />
                            ● Fee for FSSAI Basic Registration: ₹100<br />
                            ● Fees for the FSSAI State License range from ₹2,500 to ₹ 3000<br />
                            ● Fee for FSSAI Central License: ₹7,500.
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Penalty for Not Registering
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            A food business operator (FBO) who runs their business without registering under
                            FSSAI may face imprisonment and a penalty of up to ₹5 lakhs for the same.
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Documents for FSSAI License
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Form-B<br />
                            ● Address proof for production site<br />
                            ● Production site layout<br />
                            ● Proof of premises rent<br />
                            ● Business certificate<br />
                            ● Factory license (if any)<br />
                            ● Power details for the unit<br />
                            ● Contacts for partners, directors, members<br />
                            ● ID and address proof for managers or signers<br />
                            ● Water test report from a certified lab<br />
                            ● Form IX (if you're nominated by the business owner)<br />
                            ● NOC from the manufacturer<br />
                            ● List of food items to be made<br />
                            ● Food safety management plan<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Penalty for Non-Compliance
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Non-compliance with FSSAI regulations can result in penalties and legal action by the
                            authorities. Here are some of the penalties for FSSAI non-compliance:
                            ● Penalty for selling unsafe or substandard food is up to ₹5 lakhs<br />
                            ● Penalty for misleading advertising is up to ₹10 lakhs<br />
                            ● Penalty for obstructing or failing to cooperate with FSSAI officials is up to ₹2
                            lakhs<br />
                            ● Penalty for violating FSSAI regulations is up to ₹2 lakhs<br />
                            ● Penalty for carrying out food business without FSSAI license is up to ₹5 lakhs<br />
                            ● Penalty for manufacturing or selling misbranded food is up to ₹3 lakhs<br />
                            ● Penalty for manufacturing or selling food containing extraneous matter is up to
                            ₹1 lakh<br />
                            ● Penalty for causing injury or death due to the consumption of unsafe food:
                            Imprisonment of up to 6 years and a fine of up to ₹5 lakhs<br />

                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Why Campaigning Source?</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Campainging Source provides an end-to-end service for food licensing and FSSAI
                            registration. With us you get:
                            Food License registration within the smallest time frame
                            Comprehensive help with food license online application filling
                            Guidance on selecting the right food license type
                            Support through the entire registration procedure
                            Solution to all your questions and concerns
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>
            </Layout>
        </>
    );
}
