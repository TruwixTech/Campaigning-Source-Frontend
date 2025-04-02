import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Company logos (replace with your actual client logos)
const companies = [
  { name: "Iskcon Wavecity", logo: "/iskcon.webp" },
  { name: "Kisan Kumbh", logo: "/kisan.png" },
  { name: "RM Rental Furniture", logo: "/rm.png" },
  { name: "Skywall", logo: "/skywall.webp" },
  { name: "Lemanda Chocolate House", logo: "/lemanda.webp" },
  { name: "Mentor Education", logo: "/mentor.png" },
  { name: "AstroNarad", logo: "/ag.png" },
  { name: "NSNP L2 Health", logo: "/nslp.png" },
  { name: "Mr.Loanji", logo: "/loanji.png" },
  { name: "Tax Rishi", logo: "/tax.png" },
  { name: "Jaipur Jeweller", logo: "/jaipur.png" },
  { name: "Veloxify", logo: "/veloxify1.jpg" },
  { name: "OmSolar", logo: "/om.png" },
];

const CompanyCard = ({ company, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.08,
      }}
      className="relative group h-40"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
      <div className="relative bg-white rounded-xl h-full flex flex-col items-center justify-center p-6 border border-gray-800 group-hover:border-blue-400 transition-colors duration-300 overflow-hidden">
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={company.logo}
            alt={company.name}
            className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-end justify-center pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
          <span className="relative text-white font-medium text-sm">
            {company.name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

function PortfolioSection() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: -50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={sectionInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h2 className="relative text-5xl md:text-6xl font-bold text-primaryText ">
                Our Notable Clients
              </h2>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We've empowered{" "}
            <span className=" font-medium">
              industry leaders
            </span>{" "}
            with cutting-edge digital solutions that drive real results.
          </motion.p>
        </motion.div>

        {/* Companies Grid */}
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          >
            {companies.map((company, index) => (
              <CompanyCard
                key={company.name}
                company={company}
                index={index}
              />
            ))}
          </motion.div>


        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl text-blue-400 opacity-20">
            "
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
            <span className="bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-bold">
              Campaigning Source
            </span>{" "}
            transformed our digital strategy with their innovative approach.
            The results were{" "}
            <span className="text-blue-300">
              beyond our wildest expectations
            </span>{" "}
            - 3x engagement and 2.5x conversion in just 3 months!
          </blockquote>
        </motion.div>


      </div>

      <style jsx global>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
    </>
  );
}

export default PortfolioSection;