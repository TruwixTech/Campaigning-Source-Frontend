import { useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Tabs from '@/components/Tabs';
import Banner from '@/components/Banner';
import FloatingForm from '@/components/FloatingForm';
import HomeAbout from '@/components/HomeAbout';
import HomeServices from '@/components/HomeService';
import AdBanner from '@/components/AdBanner';

const Home = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormVisibility(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setFormVisibility(false);
  };

  return (
    <>
      <Head>
        <meta name="title" content="Campaigning Source: Political & Business Development Firm" />
        <meta name="description" content="Unlock complete business development with us - from web-app creation to impactful broadcast services (SMS, Email, WhatsApp), Twitter trending, and expert profile management" />
        <meta name="keywords" content="Political promotion, Business development, Press Release, Wikipedia Management, Meta Advertisement, Google Ads, Twitter Trending, Website Development, App Development, WhatsApp Broadcast, IVR, Bulk Calling, Graphic Designing, SEO, SEM, Video Editing, Motion Graphics, Event Management, Affiliate Marketing, Customized Printing, Profile Management, Email Marketing, Bulk Sms, Digital marketing, Campaigning" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Vansh Tyagi" />
        <title>Campaigning Source</title>
    <meta name="google-site-verification" content="wuImTDqbWJwqAK-DAqsRtO-vJP6fxbe5wDrnEFc29Lw" />
      </Head>
      <AdBanner />
      <Layout>
        {/* <SocialMedia /> */}
        <Hero />
        <HomeAbout />
        <Services />
        <Banner />
        <HomeServices />
        <Tabs />
        <Contact />
        {isFormVisible && <FloatingForm closeForm={closeForm} />}
      </Layout>
    </>
  );
};

export default Home;
