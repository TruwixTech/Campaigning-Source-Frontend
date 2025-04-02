import Image from 'next/image'

const images = [
    {
        id: 1,
        src: '/pastCustomers/partners/aayam.jpg',
    },
    {
        id: 2,
        src: '/pastCustomers/partners/cgc.png',
    },
    {
        id: 3,
        src: '/pastCustomers/partners/cvc.png',
    },
    {
        id: 4,
        src: '/pastCustomers/partners/esummit.png',
    },
    {
        id: 5,
        src: '/pastCustomers/partners/f6s.png',
    },
    {
        id: 12,
        src: '/pastCustomers/partners/iitD.png',
    },
    {
        id: 6,
        src: '/pastCustomers/partners/iste.png',
    },
    {
        id: 7,
        src: '/pastCustomers/partners/moe.png',
    },
    {
        id: 8,
        src: '/pastCustomers/partners/msme.png',
    },
    {
        id: 9,
        src: '/pastCustomers/partners/sih.webp',
    },
    {
        id: 10,
        src: '/pastCustomers/partners/googleads.png',
    },
    {
        id: 11,
        src: '/pastCustomers/partners/meta.png',
    }
]

export default function Partners() {
    return (
        <>
            <div className="flex justify-center items-center flex-wrap gap-12">
                {
                    images.map((image) => (
                        <Image key={image.id} src={image.src} width={500} height={500} alt="partners" className="w-36 object-cover rounded-md" />
                    ))
                }
            </div>
        </>
    )
}