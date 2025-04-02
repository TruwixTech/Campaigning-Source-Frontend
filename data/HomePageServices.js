import { GoFileMedia } from "react-icons/go"
import { RiAdvertisementFill } from "react-icons/ri"
import { MdCall, MdSms, MdWeb } from "react-icons/md"
import { FaMobile } from "react-icons/fa"

const HomePageServices = [
    {
        id: 1,
        logo: <GoFileMedia />,
        link: '/services/twitter',
        title: 'Social Media Marketing',
        content: 'We can provide you with social media marketing for your business development. We can promote your business on social media.'
    },
    {
        id: 2,
        logo: <RiAdvertisementFill />,
        link: '/services/meta',
        title: 'Advertisements',
        content: 'We can provide you with advertisements for your business promotions. We can advertise your business on social media.'
    },
    {
        id: 3,
        logo: <MdCall />,
        link: '/services/ivr',
        title: 'IVR Calls',
        content: 'We can provide you with IVR calls for your business management. We can send IVR calls to your customers'
    },
    {
        id: 4,
        logo: <MdSms />,
        link: '/services/sms',
        title: 'Broadcast Messages',
        content: 'We can provide you with broadcast messages for your business management. We can send broadcast messages to your customers.'
    },
    {
        id: 5,
        logo: <MdWeb />,
        link: '/services/website',
        title: 'Website Development',
        content: 'We can provide you with website development for your business development. We can develop your website for your business campaign.'
    },
    {
        id: 6,
        logo: <FaMobile />,
        link: '/services/app',
        title: 'App Development',
        content: 'We can provide you with app development for your business development. We can develop your app for your business campaign.'
    },
]

export default HomePageServices