import { FaMobile, FaUsers, FaHeadphones } from 'react-icons/fa'
import { GoFileMedia, GoGraph } from 'react-icons/go'
import { AiOutlineShop } from 'react-icons/ai'
import { GiMagnifyingGlass, GiClapperboard } from 'react-icons/gi'
import { RiAdvertisementFill } from 'react-icons/ri'
import { MdWeb, MdCall, MdSms } from 'react-icons/md'

const businessData = [
    {
        id: 1,
        logo: <MdWeb />,
        link: '/services/web',
        title: 'Website Development',
        content: 'We delve into in-depth research to understand your requirements, ensuring a customized online presence that aligns with your business.'
    },
    {
        id: 2,
        logo: <FaMobile />,
        link: '/services/app',
        title: 'App Development',
        content: 'Got an idea for a mobile app? We can help you with that. We can develop mobile apps for your business or startup.'
    },
    {
        id: 3,
        logo: <GoFileMedia />,
        link: '/services/business',
        title: 'Social Media Marketing',
        content: 'We can provide you with social media marketing for your business development. We can promote your business on social media.'
    },
    {
        id: 4,
        logo: <RiAdvertisementFill />,
        link: '/services/business',
        title: 'Advertisements',
        content: 'We can provide you with advertisements for your business promotions. We can advertise your business on social media.'
    },
    {
        id: 5,
        logo: <MdCall />,
        link: '/services/ivr',
        title: 'IVR Calls',
        content: 'We can provide you with IVR calls for your business management. We can send IVR calls to your customers'
    },
    {
        id: 6,
        logo: <MdSms />,
        link: '/services/sms',
        title: 'Broadcast Messages',
        content: 'We can provide you with broadcast messages for your business management. We can send broadcast messages to your customers.'
    },
    {
        id: 7,
        logo: <FaUsers />,
        link: '/services/call',
        title: 'Bulk Calls',
        content: 'We can provide you with bulk calls for your business management. We can bulk calls to your customers.'
    },
    {
        id: 8,
        logo: <FaHeadphones />,
        link: '/services/business',
        title: 'CRM',
        content: 'We can provide you with CRM for your business management. We can manage your CRM.'
    },
    {
        id: 9,
        logo: <GiClapperboard />,
        link: '/services/video',
        title: 'Videos',
        content: 'We can provide you with videos for your business management. We can make videos for your business.'
    },
    {
        id: 10,
        logo: <GoGraph />,
        link: '/services/business',
        title: 'Analytics',
        content: 'We can provide you with analytics for your business management. We can manage your analytics.'
    },
    {
        id: 11,
        logo: <AiOutlineShop />,
        link: '/services/business',
        title: 'Sales Management',
        content: 'We can provide you with sales management for your business management. We can manage your sales.'
    },
    {
        id: 12,
        logo: <GiMagnifyingGlass />,
        link: '/services/seo',
        title: 'SEM & SEO',
        content: 'We can provide you with SEM & SEO for your business management. We can manage your SEM & SEO.'
    }
]


export default businessData