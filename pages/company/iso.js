import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Iso() {
    return (
        <>
            <Head>
                <title>ISO | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>What is ISO?</h2>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>
                                ISO certification stands as a seal of approval from a third-party body, indicating
                                compliance with international standards established by the International Organization
                                for Standardization (ISO).
                            </li>
                            <li>
                                ISO, an independent, non-governmental organization, develops and publishes over
                                22,000 standards across various domains such as quality management, environmental
                                management, food safety, information security, and social responsibility.
                            </li>
                            <li>
                                Certification is voluntary but demonstrates an organization's commitment to quality,
                                safety, and efficiency
                            </li>
                        </ul>
                    </div>
                    <Image src='/service/gstPage.svg' alt='ISO' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-around'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Benefits?</h2>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>Increased customer confidence</li>
                            <li>Improved product and service quality</li>
                            <li>Reduced costs</li>
                            <li>Increased efficiency</li>
                            <li>Improved compliance with regulations</li>
                            <li>Enhanced brand reputation</li>
                        </ul>
                    </div>
                    <Image src='/service/business.svg' alt='ISO' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Documents required for the process</h2>
                        <ul className='text-gray-400 list-disc grid md:grid-cols-2 gap-x-12 gap-y-2 mt-4'>
                            <li>Application Form</li>
                            <li>Scope of Certification</li>
                            <li>Quality management system (QMS) documentation</li>
                            <li>Records</li>
                            <li>Management review minutes</li>
                            <li>Internal Audit Reports</li>
                            <li>Corrective and Preventive action (CAPA) Records</li>
                            <li>Organizational Records</li>
                            <li>Employee training records</li>
                            <li>Supplier assessment reports</li>
                            <li>Customer satisfaction surveys</li>
                            <li>ID Proofs</li>
                        </ul>
                    </div>
                    <Image src='/service/documents.svg' alt='ISO' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-start justify-around'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Pre-requisites</h2>
                        <ul className='text-gray-400 list-disc flex flex-col gap-3 mt-4'>
                            <li>Select the appropriate ISO standard</li>
                            <li>Assess the current situation</li>
                            <li>Develop a plan for improvement</li>
                            <li>Implement the improvement plan</li>
                            <li>Conduct internal audits</li>
                            <li>Choose a certification body</li>
                            <li>Undergo the certification audit</li>
                            <li>Receive certification upon successful assessment</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>ISO Certification Process</h2>
                        <ol className='text-gray-400 list-decimal flex flex-col gap-3 mt-4'>
                            <li>Submit Application</li>
                            <li>Document Review</li>
                            <li>Pre-assessment</li>
                            <li>Action Plan</li>
                            <li>Onsite Inspection or Audit</li>
                            <li>Final Audit</li>
                            <li>Obtain ISO Certification</li>
                        </ol>
                    </div>
                </section>

                <p className='text-center mt-3 text-gray-500'>
                    <span className='text-primaryText'>Note:</span> Processing time varies based on the organization's size and complexity
                </p>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div className='text-left md:text-center'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-3'>ISO Certification Renewal</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Organizations undergo a recertification audit to renew their certification, ensuring
                            ongoing adherence to ISO standards
                        </p>
                    </div>
                    <div className='text-left md:text-center'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-3'>ISO Standards</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Serve as blueprints for optimal performance across various domains.
                        </p>
                    </div>
                    <div className='text-left md:text-center'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-3'>Certification and Compliance</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Various certifications ensure compliance with regulations and standards.
                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around'>
                    <div className='flex flex-col gap-4 max-w-2xl'>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl'>Why Campaigning Source?</h2>
                        <p className='text-gray-500 text-lg'>
                            Campaigning Source is a preferred choice for ISO certification due to its expertise, custom
                            solutions, transparency, and commitment to client satisfaction, simplifying the ISO certification
                            process for organizations in India.
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='ISO' width={600} height={600} />
                </section>
            </Layout>
        </>
    )
}