import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PortfolioSection from "@/components/PortfolioSection";

function Portfolio() {
  const slides = [
    {
      title: "Iskcon Wavecity",
      description: "We're extremely pleased with the website Campaigning Source created for ISKCON Wave City (iskconwavecity.com). They designed a spiritual, visually appealing, and user-friendly platform that perfectly represents our temple's mission. The team paid great attention to details like event calendars, donation integration, and devotional content presentation. The site loads quickly, works smoothly on all devices, and has a serene yet engaging design. Highly recommend their services for religious or community-based websites!",
      heading: 'Digital Devotion: A Sacred Online Experience',
      img: "/iskcon.png"
    },
    {
      title: "Kisan Kumbh",
      description: "Working with Campaigning Source on our Kisan Kumbh 2025 website has been an outstanding experience! They transformed our vision into a visually appealing, user-friendly, and highly functional platform that effectively highlights our mission of empowering farmers, driving agritech innovation, and promoting sustainable agriculture. Their expertise in web development and digital strategy made the process seamless, and the final result exceeded our expectations. Highly recommended for anyone looking to build a strong digital presence!",
      heading: 'About the Event of the Kisan Kumbh',
      img: "/kisankumbh.png"
    },
    {
      title: "RM Rental Furniture",
      description: "Working with Campaigning Source has been an incredible experience! Their team truly understood our vision and executed everything with precision, creativity, and professionalism. From branding to digital strategy and web development, every aspect of their work exceeded our expectations. The attention to detail, seamless execution, and commitment to delivering high-quality results made our project a huge success. Campaigning Source is the perfect partner for anyone looking for innovative and effective solutions. Highly recommended!",
      heading: 'Website Development for the Brands',
      img: "/rmrental.png"
    },
    {
      title: "Lemanda Chocolate House",
      description: "I’m really impressed with the website Campaigning Source created for us—Lemanda.in! They delivered a sleek, modern, and easy-to-navigate design that perfectly represents our brand. The team was professional, understood our vision, and executed it beautifully. The site loads fast, looks great on mobile, and has a clean layout. Highly recommend their services for anyone needing a high-quality, professional website!",
      heading: 'Design the Chocolate Legacy',
      img: "/lemandachocolate.png"
    },
    {
      title: "Mentor Education",
      description: "Campaigning Source did an excellent job designing MentorSudhir.com! The website looks professional, clean, and well-organized, making it easy for visitors to find information. The team was responsive, understood our requirements clearly, and delivered a fast, mobile-friendly site with a polished finish. Highly recommend their web design services—they truly deliver quality work!",
      heading: 'Transforming Education Through Digital Excellence',
      img: "/mentoreducation.png"
    },
    {
      title: "AstroNarad",
      description: "Campaigning Source did an exceptional job designing AstroNarad.com! They created a mystical yet professional astrology platform that perfectly reflects our brand. The website combines beautiful visuals with excellent functionality, featuring seamless consultation bookings, fast loading speeds, and intuitive navigation. What impressed us most was how they made complex astrological content accessible while maintaining a spiritually uplifting aesthetic. Their team understood our unique needs perfectly and delivered a site that exceeds our expectations in every way. We highly recommend their services for any spiritual or astrology-based business looking for a transformative online presence.",
      heading: 'AstroNarad Website Design Story',
      img: "/Aastronarad.png"
    },
    {
      title: "NSNP L2 Health",
      description: "Campaigning Source did an excellent job creating our NSNP L2 Health website (nsnpl2health.com). They delivered a clean, professional design that makes our healthcare services easy to understand and access. The site works perfectly across all devices, loads quickly, and presents information clearly. Their team understood our needs perfectly and delivered beyond our expectations. Highly recommended for medical or wellness websites!",
      heading: 'NSNP L2 Health: A Healthcare Website Done Right',
      img: "/nsnpl2health.png"
    },
    {
      title: "Mr. Loanji",
      description: "Campaigning Source created an outstanding financial website for MrLoanji.com. They designed a clean, professional platform that makes loan information easily accessible. The site loads quickly, works perfectly on mobile, and presents complex financial details in simple terms. Their team understood our requirements perfectly and delivered excellent results. Highly recommended for any finance-related business!",
      heading: 'Mr.Loanji: Financial Clarity Through Design',
      img: "/mrloanji.png"
    },
    {
      title: "Tax Rishi",
      description: "Campaigning Source did a fantastic job designing TaxRishi.in! They created a professional, easy-to-navigate tax consultancy website with excellent clarity. The clean layout makes complex tax topics simple to understand, and the mobile-friendly design works perfectly. Quick loading speed and organized information showcase their attention to detail. Highly recommended for financial/tax advisory services!",
      heading: 'TaxRishi: Simplifying Tax Consultancy Online',
      img: "/taxrishi.png"
    },
    {
      title: "Jaipur Jeweller",
      description: "Campaigning Source designed a stunning, luxurious website for Jaipur Jeweller that perfectly showcases our jewelry collections. The elegant visuals, smooth browsing experience, and secure product displays have significantly enhanced our online presence. Their team understood our brand's premium aesthetic and delivered exceptional results. Highly recommended for jewelry businesses!",
      heading: 'Jaipur Jeweller: Luxury Redefined Online',
      img: "/Jaipurjewellers.png"
    },
    {
      title: "Veloxify",
      description: "Campaigning Source built our Veloxify.in website with a perfect blend of speed and modern design. The clean interface, fast loading times, and seamless user experience have significantly boosted our digital presence. Their team delivered exactly what we envisioned – a high-performance website that converts. Top-notch work!",
      heading: 'Veloxify: High-Fidelity Digital Experiences',
      img: "/veloxify.png"
    },
    {
      title: "OmSolar",
      description: "Campaigning Source created a high-performing solar solutions website for OMSolar.in that perfectly balances technical information with user-friendly design. The clean layout effectively showcases our sustainable energy products while maintaining fast loading speeds across devices. Their team demonstrated excellent understanding of the renewable energy sector and delivered a website that converts visitors into leads. Highly recommended for industrial or B2B businesses.",
      heading: 'Powering Solar Success Through Digital Innovation',
      img: "/omsolar.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Campaigning Source</title>
        <meta name="description" content="Portfolio page showcasing our work." />
      </Head>
      <Layout>
        <div className="relative w-full pt-16 flex-col h-auto flex overflow-hidden justify-center items-center bg-[#191919] text-white">
          <div className="w-full max-w-8xl overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-5 md:px-20 flex flex-col items-center">
                  <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-[#4cb9e7]">
                    {item.title}
                  </h2>
                  <p className="sm:text-lg mt-4 text-[#636975] md:text-2xl">{item.title} Case Study</p>
                  <div className="w-full h-auto flex flex-col md:flex-row justify-between mt-7 md:gap-6">
                    <div className="w-full md:w-[45%] h-auto flex flex-col">
                      <p className="mt-4 text-xl sm:text-3xl md:text-5xl font-bold text-center md:text-start">{item.heading}</p>
                      <p className="mt-4 md:mt-8 text-[#6D6D6D] text-sm md:text-lg text-center md:text-start">{item.description}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="mt-6 w-full md:w-[50%] mx-auto h-auto md:h-96 object-contain rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PortfolioSection />
      </Layout>
    </>
  );
}

export default Portfolio;
