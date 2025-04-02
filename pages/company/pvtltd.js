import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function PrivateLimited() {
    return (
        <>
            <Head>
                <title>Private Limited | Campaigning Source</title>
            </Head>
            <Layout>
                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>PVT LTD</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            A private limited company is a business entity offering limited owner liability. It is apt for a small number of shareholders and allows up to 200 members along with flexibility in shares and shareholdings.

                            One of the most highly recommended methods for starting a business in India is to establish a private limited company, which provides its shareholders with limited liability while imposing certain ownership restrictions. When it is LLP, the partners will manage it. On the other hand, a private limited company registration allows for directors and shareholders to be separate entities.
                        </p>
                    </div>
                    <Image src='/service/documents.svg' alt='Patent' width={600} height={600} />
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto'>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Benefits of Pvt Ltd Company Registration:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Shield from personal liability and protection from risks.<br />
                            ● Increased consumer trust and credibility.<br />
                            ● Ease in procuring bank credits and attracting reliable investors.<br />
                            ● Liability protection for company assets.<br />
                            ● Greater capital contribution and stability.<br />
                            ● Potential for growth and expansion.<br />
                        </p>
                    </div>
                    <div>
                        <img src='/regis/pvtltd.png' alt='Patent' className='mx-auto'/>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Characteristics of Pvt Ltd Company: -
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Minimum of two members, maximum of 200 shareholders.<br />
                            ● Minimum of two directors, maximum of 15.<br />
                            ● Limited liability for members. - Perpetual succession.<br />
                            ● Minimum authorized share capital of ₹1 lakh.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Compliance Requirements Post-Registration:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Auditor appointment within 30 days.<br />
                            ● Director DIN KYC annually.<br />
                            ● Commencement of business within 180 days.<br />
                            ● MCA annual filings.<br />
                            ● Income tax filing using ITR-6 annually.<br />
                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Documents Required for Online Company Registration:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Identity and address proof.<br />
                            ● Registered office proof<br />
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Importance of Company Registration Certificate:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Legal proof of identity and existence.<br />
                            ● Authorization to commence activities.<br />
                            ● Necessary for business bank account, share distribution, business loan, and sale of the
                            business.<br />

                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Additional Reasons for the Importance of the Certificate:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● Business bank account.<br />
                            ● Share distribution.<br />
                            ● Business loan.<br />
                            ● Business sale.<br />
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Pvt Ltd Company Registration Package Includes:
                        </h2>
                        <p className='text-gray-400 max-w-2xl'>
                            ● DIN and DSC for two directors.<br />
                            ● Drafting of MoA & AoA.<br />
                            ● Registration fees and stamp duty.<br />
                            ● Company incorporation certificate.<br />
                            ● Company PAN and TAN.<br />
                            ● Zero balance current account powered by DBS bank<br />
                        </p>
                    </div>
                </section>

                <hr className='w-11/12 mx-auto my-8 border-gray-400' />

                <section className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between '>
                    <div>
                        <h2 className='text-3xl font-semibold text-primaryText tracking-widest md:text-4xl mb-4'>Why Campaigning Source?</h2>
                        <p className='text-gray-400 max-w-2xl'>
                            Choosing the right business structure is crucial for legal compliance, liability protection, tax
                            implications, funding opportunities, operational flexibility, and long-term goals alignment.
                            Campaigning Source is recommended for its online registration process and expert assistance
                        </p>
                    </div>
                    <Image src='/about-us.svg' alt='Patent' width={600} height={600} />
                </section>
            </Layout>
        </>
    );
}
