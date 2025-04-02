import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function OPC() {
    return (
        <>
            <Head>
                <title>OPC | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>One Person Company</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            As per the Companies Act, 2013 an One Person Company (OPC) is an unique entity
                            where an individual can form a company. It combines the concept of a company with
                            limited liability and succession, allowing a person to own and operate a company in
                            their name.
                            Prior to the implementation of the Companies Act of 2013 only two people could form a
                            company. The Companies Act of 2013 supports the formation of One Person Company
                            (OPC) in India. It governs the registration and functioning of one person company in
                            India.
                            In comparison with a public company a private company should have at least two
                            directors and two members however on the contrary, one person company registration
                            allows any group of people to be incorporated.
                            As per the Section 262 of Companies Act of 2013 and official registration of OPC in
                            India is legal. One person company registration in India requires a single director and a
                            single member representing the whole firm. This corporation type has very few
                            compliance requirements in comparison with a private corporation.

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
                                    <p className="mt-2 text-gray-700">Perfect for initiating company registration.</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹1499</span>{` `}₹999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Expert assisted process </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your company name is reserved in just 2 - 4 days </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DSC in just 4 - 7 days </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Incorporation Certificate </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Company PAN + TAN </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DIN for directors </span>
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
                                    <p className="mt-2 text-gray-700">7 Day company registration process</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹2999</span>{` `}₹1499 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Expert assisted process </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your company name is reserved in just 2 - 4 days </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DSC in just 4 - 7 days </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Incorporation Certificate </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Company PAN + TAN </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DIN for directors </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Zero balance current account with up to 7% interest </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> GST Registration Free </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Digital welcome kit that includes a checklist of all post-incorporation compliances </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> ADT 1 & INC 20A form filing </span>
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
                                    <p className="mt-2 text-gray-700">7 Day comprehensive package</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹34,899</span>{` `}₹21,999 </strong>
                                    </p>
                                </div>

                                <div className="p-6 sm:px-8">
                                    <p className="text-lg font-medium text-gray-400 sm:text-xl">What's included:</p>

                                    <ul className="mt-2 space-y-2 sm:mt-4">
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Dedicated account manager </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Your company name is reserved in just 24 hours </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DSC in just 24 hours Free </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> SPICe+ form filling in 7 days </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Incorporation Certificate </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Company PAN + TAN </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> DIN for Directors </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Zero balance current account with up to 7% interest </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> GST Registration Free </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Accounting & Bookkeeping (Up to 100 transactions) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> ADT 1, INC 20A, AOC 4 & MGT 7 form filing </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Annual filing(Up to turnover of 20 lakhs) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> GST Filing(Up to turnover of 20 lakhs) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Digital welcome kit that includes a checklist of all post-incorporation compliances </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500">  30-minute call with a senior CA/CS for your business planning </span>
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
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Documents Required for OPC Registration</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Identity and Address Proof<br />
                            ● Scanned copy of PAN card or passport (foreign nationals & NRIs)<br />
                            ● Scanned copy of voter ID/passport/driving<br />
                            ● Scanned copy of the latest bank statement/telephone or mobile bill/electricity or
                            gas bill<br />
                            ● Scanned passport-sized photograph specimen signature (blank document with
                            signature directors only)<br />
                            ● Registered Office Proof<br />
                            ● Scanned copy of the latest bank statement/telephone or mobile bill/electricity or
                            gas bill<br />
                            ● Scanned copy of notarised rental agreement in English<br />
                            ● Scanned copy of no-objection certificate from the property owner<br />
                            ● Scanned copy of sale deed/property deed in English (in case of owned property)<br />

                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto'>
                    <div>
                        <img src='/regis/opc.png' alt='OPC' className='w-full' />
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Advantages Of OPC Company in India</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Legal Standing<br />
                            ● Easy Access to Funding<br />
                            ● Less Conformity<br />
                            ● Easy Integration<br />
                            ● Easy to Manage<br />
                            ● Constant Repetition<br />
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Checklist for One Person Company Registration
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Maximum and minimum membership requirements must be met<br />
                            ● There should be a nominee chosen before incorporation<br />
                            ● Use Form INC-3 to request the nominee's approval<br />
                            ● The Companies (Incorporation Rules) 2014 mandate that the OPC name be
                            selected<br />
                            ● Minimum authorized capital of ₹1 Lakh<br />
                            ● DSC of the potential director<br />
                            ● Evidence of the OPC's registered office<br />
                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Restrictions on One Person Company
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Despite having major advantages, one person company registration also comes with a
                            certain set of restrictions.<br />
                            Not Apt for Scalability<br />
                            Registering your business as an OPC is a perfect option for a
                            small business structure.<br />
                            However, if you are planning to scale it up on greater levels then this might not work. At
                            any given time the total number of people in an OPC is always one. If you are planning to
                            add more members and have more shareholders you cannot register your business as
                            OPC. So OPC registration is not apt to raise further capital. This will inhibit the
                            expansion and growth of businesses.<br />
                            Higher Restrictions on Business Activities
                            As per the rules and regulations, OPC is not permitted to conduct non-banking financial
                            investment activities. Registering yourself as an OPC will not provide freedom to invest
                            in the security of other corporations.<br />
                            No Clear Distinction Between Ownership and Management<br />
                            Since the one-person company has a single person to act as both the director of the
                            company and the management there is no clear distinction between both roles. A single
                            person is permitted to take and approve all the decisions. So, there are higher chances
                            of unethical practices<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Registration Package for One Person Company in India</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Registration package provides a Digital Signature Certificate online for one of
                            your director's<br />
                            ● We will also provide a Directors Identification Number (DIN) (If the shareholders
                            are different from directors, then additional DSC is required for shareholders)<br />
                            ● Our Business experts will provide assistance with deciding the company name<br />
                            ● PAN and TAN, drafting the articles of association, paying the government stamp
                            duty and the certificate of incorporation fee, obtaining the name approval
                            certificate, and registering for GST, PF, ESI, and PT (only applicable in
                            Maharashtra) will be done with utmost care and speed<br />
                            ● A Zero balance current account will be opened in DBS or ICICI<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>
            </Layout>
        </>
    );
}
