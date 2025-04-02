import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { FaDoorOpen, FaPhone, FaUsers, FaWikipediaW, FaMobile, FaVideo, FaTwitter } from "react-icons/fa"
import { GoGraph, GoFileMedia, GoBroadcast } from "react-icons/go"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { PiTelevisionSimpleLight } from "react-icons/pi"
import { MdOutlineArticle, MdWeb, MdOutlineEventSeat } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"

import { IoCheckmark } from "react-icons/io5";

const montserrat = Montserrat({
    subsets: ["latin"],
    weights: [400, 500, 600, 700],
})

const services = [
    {
        icon: <FaDoorOpen />,
        title: "Door-to-Door Campaigning",
        description: "We understand the value of personal connections. Our D2D campaigns establish genuine rapport, ensuring your message reaches your intended audience on a personal level."
    },
    {
        icon: <GoGraph />,
        title: "Surveys and Data Analysis",
        description: "Informed decisions pave the path to success. Our meticulously designed surveys and insightful data analysis provide the foundation for strategic excellence.",
    },
    {
        icon: <GoFileMedia />,
        title: "Social Media Management",
        description: "In the digital landscape, SMM is paramount. Our skilled team excels in online engagement, amplifying your business or campaign's visibility."
    },
    {
        icon: <AiOutlineFundProjectionScreen />,
        title: "Graphics and Visual Communication",
        description: "Visuals hold immense power. Our creative experts craft captivating graphics that resonate deeply, leaving a lasting imprint on your audience."
    },
    {
        icon: <FaPhone />,
        title: "Interactive Voice Response (IVR)",
        description: "Merge automation with a personal touch. Our IVR solutions engage audiences effectively, delivering tailored messages and collecting invaluable feedback."
    },
    {
        icon: <GoBroadcast />,
        title: "Broadcast Messages",
        description: "Reach the masses effortlessly. Our broadcast messaging solutions disperse your message across diverse platforms, expanding your outreach significantly."
    },
    {
        icon: <PiTelevisionSimpleLight />,
        title: "TV and Social Platform Ads",
        description: "Capture attention on both traditional and digital channels with our targeted TV and social media advertising strategies."
    },
    {
        icon: <FaUsers />,
        title: "Bulk Calls",
        description: "Establish direct connections with a wide audience through our bulk calling services, ensuring your message is heard."
    },
    {
        icon: <MdOutlineArticle />,
        title: "Articles and Content Creation",
        description: "Craft compelling articles and content that resonate with your audience, positioning you as an authoritative voice in your industry."
    },
    {
        icon: <FaWikipediaW />,
        title: "Wikipedia Management",
        description: "Enhance your online presence with professional Wikipedia page creation and management, boosting credibility and visibility."
    },
    {
        icon: <MdWeb />,
        title: "Website Development",
        description: "Develop an engaging and user-friendly website that serves as the cornerstone of your online presence. Level up the user experience with our expertise.",
    },
    {
        icon: <FaMobile />,
        title: "Application and Software Development",
        description: "Innovate with custom applications and software solutions tailored to your unique needs. Our experts are well-versed in the latest technologies."
    },
    {
        icon: <FaVideo />,
        title: "Videos",
        description: "Harness the power of video content to tell your story and engage audiences visually. Our video production services are second to none."
    },
    {
        icon: <MdOutlineEventSeat />,
        title: "Event Management",
        description: "Plan and execute successful events that leave a lasting impression on attendees. Our event management services are designed to deliver excellence."
    },
    {
        icon: <FaTwitter />,
        title: "Twitter Trend Management",
        description: "Lead conversations and trends on Twitter, leveraging the platform's influence. Our Twitter trend management services are designed to boost your visibility."
    }
]

const team = [
    {
        img: "/team/vansh.jpg",
        name: "Mr. Vansh Tyagi",
        position: "Founder & CEO",
        linkedin: "https://www.linkedin.com/in/vansh-tyagi-a04355210/"
    },
    {
        img: "/team/vanshika.jpg",
        name: "Ms. Vanshika Gupta",
        position: "CFO",
        linkedin: "https://www.linkedin.com/in/vanshika-gupta23052003/"
    },
    {
        img: "/team/harsh.jpg",
        name: "Mr. Harsh",
        position: "Managing Director",
        linkedin: "https://www.linkedin.com/"
    },
    {
        img: "/team/umang.jpg",
        name: "Mr. Umang Gupta",
        position: "CMO",
        linkedin: "https://www.linkedin.com/"
    },
    // {
    //     img: "/team/pranav.jpeg",
    //     name: "Mr. Pranav Tripathi",
    //     position: "CTO",
    //     linkedin: "https://www.linkedin.com/in/tripathipranav14/"
    // },
    {
        img: "/team/sushant.jpeg",
        name: "Mr. Sushant Sharma",
        position: "Chief Operation Manager",
        linkedin: "https://www.linkedin.com/in/sushant2021cs101/"
    },
    {
        img: "/team/tanishk.jpg",
        name: "Mr. Tanishk Attri",
        position: "Cheif Startup Developer",
        linkedin: "https://www.linkedin.com/in/tanishk-attri-a49027220/"
    },
    {
        img: "/team/tanishka.jpg",
        name: "Ms. Tanishka Garg",
        position: "Customer Compliance Manager",
        linkedin: "https://www.linkedin.com/in/tanishka-garg-21885622a"
    },
    {
        img: "/team/shaily.jpg",
        name: "Ms. Shaily Bhati",
        position: "Customer Success Manager",
        linkedin: "https://www.linkedin.com/in/shaily-bhati-8b875524b"
    },
    {
        img: "/team/akshay.jpg",
        name: "Mr. Akshay Kumar Sharma",
        position: "Public Relations Manager",
        linkedin: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager/"
    },
]

const About = () => {
    return (
        <>
            <Head>
                <title>About | Campaigning Source</title>
            </Head>
            <Layout>
                <main className="flex flex-col items-center w-11/12 mx-auto max-w-6xl rounded-lg my-7 bg-gray-700 px-4 py-8 space-y-8 md:px-6 lg:py-16">
                    <section className="w-full max-w-4xl space-y-6">
                        <h1 className="text-4xl font-bold text-center">About Us</h1>
                        <iframe className="mx-auto rounded-lg" width="100%" height="360" src="https://www.youtube-nocookie.com/embed/GAd8CUfLuIs?si=4CtGI_sd0ZP3-nA2&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </section>
                    <section className="w-full max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold text-center">Dive Deeper</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <p className="w-full md:w-1/2 text-lg text-center text-gray-400">
                                We are a dedicated team of professionals committed to helping political candidates and businesses succeed.
                                Our mission is to provide top-notch political promotion and business management services that drive growth
                                and success.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    alt="About us"
                                    className="w-72"
                                    src="/about-us.svg"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="w-full max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold text-center">Our Values</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center space-y-4">
                                <IoCheckmark className="h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold text-gray-300">Integrity</h3>
                                <p className="text-center text-gray-400">
                                    We believe in doing the right thing, always. We uphold the highest standards of integrity in all of our
                                    actions.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <IoCheckmark className="h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold text-gray-300">Excellence</h3>
                                <p className="text-center text-gray-400">
                                    We strive for excellence in everything we do. We take pride in our work and aim to deliver the best
                                    results possible.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <IoCheckmark className="h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold text-gray-300">Innovation</h3>
                                <p className="text-center text-gray-400">
                                    We are committed to innovation. We constantly seek new and better ways to serve our clients.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <IoCheckmark className="h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold text-gray-300">Collaboration</h3>
                                <p className="text-center text-gray-400">
                                    We believe in the power of collaboration. We work together, across boundaries, to meet the needs of our
                                    clients and to help our company win.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold text-center">Our Team</h2>
                        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-around p-3 rounded-lg m-1 w-full h-56 text-center hover:scale-105 transition ease-in-out duration-200"
                                >
                                    <div className="relative overflow-hidden transition duration-300 transform rounded-full lg:hover:-translate-y-2 hover:shadow-2xl">
                                        <Image
                                            src={member.img}
                                            alt="member"
                                            className="rounded-full"
                                            width={120}
                                            height={120}
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center px-5 py-4 transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                            <Link href={member.linkedin} target="_blank" className="text-white hover:text-blue-600 text-3xl">
                                                <FaLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-300">{member.name}</h3>
                                    <p className="text-center font-thin text-gray-300">{member.position}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="w-full max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold text-center">Our Services</h2>
                        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {services.map((service, index) => (
                                <div className="flex flex-col items-center space-y-4 mx-auto text-center bg-gray-600 p-5 rounded-lg" key={index}>
                                    <span className="text-4xl">{service.icon}</span>
                                    <h3 className="text-xl font-bold text-gray-300">{service.title}</h3>
                                    <p className="text-center text-sm text-gray-400">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
};

export default About;
