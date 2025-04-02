import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function Partnership() {
    return (
        <>
            <Head>
                <title>Partnership | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>What Is Partnership Firm?</h2>
                        <p className='text-gray-500 max-w-2xl'>
                            Partnership Company registration in India is an arrangement between two or more
                            people to conduct business operations together. In this type of partnership, profits and
                            liabilities are shared among members, making it a common choice for small businesses
                            and entrepreneurs. The legal document used to establish a partnership
                            company registration is known as a partnership deed. The Indian Partnership
                            Registration Act of 1932 is the primary governing partnership registration law in India. A
                            partnership, as defined by the law, is a union of individuals who have consented to
                            divide the profits from a company that they all, or any of them, act for a banking
                            business.
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
                                    <p className="mt-2 text-gray-700">Perfect for starting partnership registration.</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹3399</span>{` `}₹2499 </strong>
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

                                            <span className="text-gray-500"> Partnership deed drafting in 3 days </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Deed submission to the local registrar on your behalf </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> PAN Card </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Zero balance current account with 7% interest </span>
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
                                    <p className="mt-2 text-gray-700">Perfect for Partnership registration + GST registration</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹7149</span>{` `}₹4999 </strong>
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

                                            <span className="text-gray-500"> GST registration </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> GSTR-1 & 3B for 12 months(Up to 300 transactions) </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Accounting software (1 year license) </span>
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
                                    <p className="mt-2 text-gray-700">Complete solution for Partnership registration</p>
                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-primaryText sm:text-4xl"> <span className='line-through text-xl text-red-500'>₹13899</span>{` `}₹8999 </strong>
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

                                            <span className="text-gray-500"> ITR Filing for one financial year (Up to 10 lakhs) </span>
                                        </li>

                                        <li className="flex items-center gap-4">
                                            <FaCheck className="size-6 text-primaryText" />

                                            <span className="text-gray-500"> Trademark Registration for your Brand </span>
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
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Documents Required for Partnership Firm Registration
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Registering a partnership firm in India is a common business structure that allows two
                            or more individuals to collaborate and share responsibilities, making it essential to
                            complete the necessary documentation and legal formalities for a smooth and
                            compliant operation. Documents required for partnership firm registration are as
                            follows.
                        </p>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Partnership Deed< br />
                            ● Address Proof< br />
                            ● Identity Proof of Partners< br />
                            ● Passport-sized Photographs< br />
                            ● Address Proof of Partners< br />
                            ● Registration Certificate (if applicable)< br />
                            ● Bank Account Proof< br />
                            ● Specimen Signature< br />
                            ● Partnership Firm's PAN Card< br />
                            ● GST Registration (if applicable)< br />
                            ● Power of Attorney< br />
                            ● NOC from the Property Owner< br />
                            ● Affidavit< br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Eligibility for Partnership Firm Registration Online</h2>
                        <p className='text-gray-400 flex flex-col gap-y-3'>
                            <span>Anyone with the legal capacity to enter into a contract may enter into the partnership
                                agreement. Every individual who meets the legal requirements for majority, is of sound
                                mind, and is not prohibited from contracting by any laws to which they are subject, may
                                form a partnership.</span>
                            <span>The following people are eligible to enter into a partnership:</span>
                            <span>Individual: A person who has the legal capacity to enter into a contract may join
                                the partnership firm as a partner. An individual can be a partner in a company
                                with more than two partners both as himself and as a representative known as
                                Karta of the Hindu undivided family.</span>
                            <span>Firm: Because a partnership firm is not a person, it cannot form a partnership
                                with another firm or person. Yet, a partner in a partnership firm is free to form a
                                partnership with another individual and split the firm's profits with his other
                                parent company partners.</span>
                            <span>Hindu Undivided Family: As long as the member has contributed their own effort
                                and ability, a Karta of the Hindu undivided family may join a partnership in his or
                                her individual capacity.</span>
                            <span>Company: If permitted to do so by its goals, a business may join a partnership
                                firm registration as a partner because it is a juristic person.
                                Trustees: Unless its constitution or goals forbid it, trustees of private religious
                                trusts, family trusts, Hindu mutts, and other religious endowments are legal
                                persons and can thus form partnerships.</span>
                        </p>
                    </div>
                    <div>
                        <img src='/regis/partnership.png' className='mx-auto'/>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Characteristics of Partnership Firm
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Number of Partners: A partnership registration must have at least two partners.
                            When performing banking transactions, the maximum is 10; in all other
                            situations, the maximum is 20.<br />
                            Voluntary Registration: Although it is not required to register a partnership, it is
                            always advisable to do so because doing so has many additional advantages.
                            Contractual partner: There is a contractual tie between each partner. A original
                            partnership deed registration format proposes that in order on various aspects
                            governs the relationship. Each and every partner signs the deed, binding each
                            and each of them.<br />
                            Competency of the Partners: According to the Act, the partners entering into the
                            agreement must be competent adults and cannot be minors.<br />
                            Profit and Loss Sharing: The partners divide the profits or losses according to the
                            percentages that were agreed upon and recorded in the agreement.<br />
                            Unlimited Liability: In all partnership firm registration governed by the
                            aforementioned Act, each partner is jointly and severally liable for any losses
                            incurred by the firm.<br />
                            Interest Transfer: A partner's interest may not be transferred without the other
                            partners' approval.<br />
                            Principal-agent relationship: Partners and the firm have a principal-agent
                            relationship. The agent acts on behalf of the company, so it is expected that he
                            will act in the company's best interests. Any one of the partners may act on
                            behalf of the other partners, or the entire partnership may carry out the business
                            jointly.<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Need and Importance of Partnership Firm:</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Pooling of Resources: Partnership firms enable individuals to combine their
                            resources, including capital, skills, and experience, to initiate and manage a
                            business. This is particularly beneficial for small businesses lacking the
                            resources to start independently.<br />
                            ● Shared Responsibility and Decision-Making: Partners share the responsibility of
                            running the business and making decisions. This collaboration allows partners to
                            leverage each other's strengths and expertise.<br />
                            ● Tax Flexibility: Partnership firms are taxed as pass-through entities, where profits
                            are passed on to partners and taxed at their individual rates. This offers tax
                            advantages, especially for partners in lower tax brackets.<br />
                            ● Easy Formation and Dissolution: Partnership firms are relatively easy to establish
                            and dissolve. A partnership agreement outlining terms such as profit-sharing
                            ratios and responsibilities is essential for formation<br />
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>
            </Layout>
        </>
    );
}
