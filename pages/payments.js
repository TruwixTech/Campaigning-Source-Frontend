import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/Layout';

function Payment() {
  return (
    <>
      <Head>
        <title>Payments</title>
        <meta name="description" content="TON Cryptocurrency Transfer" />
      </Head>
      <Layout>
        <div className="bg-blue-200 p-3 rounded-lg my-3">
          <h2 className="title text-black">Payments</h2>
          <div className='mx-auto w-11/12'>
            <Image src="/upiqr.jpg" alt="QR Code" className='my-2' width={1400} height={800} />
          </div>
        </div>
      </Layout>

    </>

  );
}

export default Payment;
