import {
    FaSms,
    FaVoteYea,
    FaVideo,
    FaUsers,
    FaFire,
    FaFlag,
    FaChessRook,
    FaDoorOpen,
} from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

const politicsData = [
    {
        id: 1,
        logo: <FaVoteYea />,
        link: "/services/graphics",
        title: "Graphics",
        content:
            "We can provide you with graphics for your political campaign. We can design your logo, flyers, banners, and many more.",
    },
    {
        id: 2,
        logo: <FaSms />,
        link: "/services/call",
        title: "Bulk SMS/Calls",
        content:
            "We can provide you with bulk SMS and calls for your political campaign. We can send SMS and calls to your voters.",
    },
    {
        id: 3,
        logo: <GoFileMedia />,
        link: "/services/politics",
        title: "Social Media Marketing",
        content:
            "We can provide you with social media marketing for your political campaign. We can promote your political campaign on social media.",
    },
    {
        id: 4,
        logo: <RiAdvertisementFill />,
        link: "/services/meta",
        title: "Advertisements",
        content:
            "We can provide you with advertisements for your political campaign. We can advertise your political campaign on social media.",
    },
    {
        id: 5,
        logo: <FaVideo />,
        link: "/services/video",
        title: "Video/Reels",
        content:
            "We can provide you with video/reels for your political campaign. We can make video/reels for your political campaign.",
    },
    {
        id: 6,
        logo: <MdVerified />,
        link: "/services/twitter",
        title: "Blue Tick Verification",
        content:
            "We can provide you with blue tick verification for your political campaign. We can verify your social media accounts.",
    },
    {
        id: 7,
        logo: <FaUsers />,
        link: "/services/politics",
        title: "Fan Page Management",
        content:
            "We can provide you with fan page management for your political campaign. We can manage your social media accounts.",
    },
    {
        id: 8,
        logo: <FaFire />,
        link: "/services/video",
        title: "Roast Videos",
        content:
            "We can provide you with roast videos for your political campaign. We can make roast videos for your political campaign.",
    },
    {
        id: 9,
        logo: <FaFlag />,
        link: "/services/printing",
        title: "Flag Printing",
        content:
            "We can provide you with flag printing for your political campaign. We can print flags for your political campaign.",
    },
    {
        id: 10,
        logo: <FaChessRook />,
        link: "/services/politics",
        title: "Election War Room",
        content:
            "We can provide you with an election war room for your political campaign. We can manage your election war room.",
    },
    {
        id: 11,
        logo: <FaDoorOpen />,
        link: "/services/politics",
        title: "D2D Campaigning",
        content:
            "We can provide you with D2D campaigning for your political campaign. We can do D2D campaigning for your political campaign.",
    },
    {
        id: 12,
        logo: <GiMagnifyingGlass />,
        link: "/services/politics",
        title: "Political Research",
        content:
            "We can provide you with political research for your political campaign. We can do political research for your political campaign.",
    },
];

export default politicsData;