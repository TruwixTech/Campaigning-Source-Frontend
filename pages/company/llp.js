import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function LLP() {
    return (
        <>
            <Head>
                <title>LLP | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>DIR-3 E-KYC filing Limited Liability Partnership (LLP)</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            An LLP, or Limited Liability Partnership, is a popular form of partnership where
                            partners enjoy limited liability, providing protection for personal assets against debts, liabilities,
                            and damages. It operates as a corporate body and a separate legal entity, registered under the
                            LLP Act, 2008.
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
                                    <p className="mt-2 text-gray-700">Simplifying company registration</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹499</span>{` `}₹399 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 30-minute consultation with our Incorporation expert </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500">  Company name reserved in 2-4 days </span>
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
                                    <p className="mt-2 text-gray-700">Initiating Company Registration with Exclusive Offers
                                    </p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹2999</span>{` `}₹1999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Everything in the Starter pack + </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DSC in just 4-7 days </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> LLP Incorporation form filing in 14 days </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> LLP Incorporation Certificate </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500">  LLP agreement form filing in 14 days (Post Incorporation) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Company PAN+TAN </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DIN for directors </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500">  Zero balance current account with up to 7% interest </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-6 sm:px-8">
                                    <h2 className="text-lg font-medium text-primaryText">
                                        Premium
                                        <span className="sr-only">Plan</span>
                                    </h2>
                                    <p className="mt-2 text-gray-700">Comprehensive Solution (LLP Incorporation + Annual Compliance)</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹16999</span>{` `}₹8499 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Everything in the Standard Pack +  </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> GST Registration </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Digital welcome kit with a checklist of post-incorporation compliances </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> 30-minute call with a senior CA/CS for business planning </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Annual compliance filed by our experts (Form 8 & 11) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> ITR Filings </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500">  DIR-3 E-KYC filing </span>
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
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Advantages of Partnership Firm Registration Online</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Minimum Compliance: Whenever a private limited company is involved,
                            something else always gets in the way (unless you hire someone to handle this
                            for you). You avoid this hassle when you form a partnership. Seriously you don't
                            want to start out your business burdened with compliance work. You simply want
                            to concentrate on your company.<br />
                            ● Simple to Begin: One of the simplest types of businesses to launch is a
                            partnership. In most cases, a partnership deed registration is the only necessity
                            for register partnership firm in india. As a result, a partnership can be established
                            today. On the other hand, an LLP enrollment would take between 5 and 10
                            working days to complete because the MCA must be contacted for the electronic
                            signature, DIN, name approval, and incorporation.<br />
                            ● Comparatively Economical: You will have to pay at least ₹15,000 to establish a
                            private limited company, not to mention compliance and auditor fees. When
                            you're just getting started, do you want all this baggage? A partnership, however,
                            will only set you back about ₹2,000
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>An LLP agreement is essential
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            A registered office must be established. Stages of Incorporation of LLP:<br />
                            1. Procure Digital Signature Certificate: - Applicants and partners of the LLP need a Digital
                            Signature Certificate (DSC) with a validity of 2 years PAN CARD to file online forms with the
                            MCA.<br />
                            2. Reserve LLP Name: - Utilize the web form 'RUN-LLP' (Reserve Unique Name - Limited
                            Liability Partnership) for reserving a unique name for the LLP. - The form replaces the old LLP
                            Form 1 and requires basic details and the significance of the desired name.<br />
                            Applicants can provide up to 2 names in order of preference, ensuring compliance with
                            applicable provisions for name reservation.<br />
                            If none of the names provided are approved, there is an opportunity to apply for two more names.<br />
                            Government fees for the RUN form follow the Register Office Fees Rules. - DSC and DIN are
                            not required for filing the RUN form, but having an MCA portal account is mandatory. - Once the
                            name is allotted for the LLP, it is reserved for 90 days from the date of approval.<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-start justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Apply for PAN and TAN:</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            LLPs must apply for PAN and TAN separately through offline or online mode directly to the
                            Income Tax Department using forms 49A and 49B. The Certificate of Incorporation serves as
                            supporting proof.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Drafting and Filing LLP Agreement:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            The LLP Agreement, a foundational document, is crafted to meet specific partner requirements.

                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Essential Details in the LLP Agreement
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● LLP's Name.<br />
                            ● Partners and Designated Partners' Details.<br />
                            ● Business Objectives.<br />
                            ● Place of Business.<br />
                            ● Contribution and Interest on Contribution.<br />
                            ● Profit Sharing Ratio<br />
                            ● Rights and Duties of Partners.<br />
                            ● Proposed Business.<br />
                            ● LLP Governance<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

            </Layout>
        </>
    );
}
