import Image from 'next/image'

const customers = [
    {
        id: 1,
        img: "/pastCustomers/aastha.png",
    },
    {
        id: 2,
        img: "/pastCustomers/fabnic.png",
        className: "bg-white p-2"
    },
    {
        id: 3,
        img: "/pastCustomers/saviralFoods.png",
    },
    {
        id: 4,
        img: "/pastCustomers/daankaro.png",
    },
    {
        id: 5,
        img: "/pastCustomers/aap.png",
    },
    {
        id: 6,
        img: "/pastCustomers/bjp.png",
    },
    {
        id: 7,
        img: "/pastCustomers/inc.png",
    },
    {
        id: 8,
        img: "/pastCustomers/rjd.png",
    },
    {
        id: 9,
        img: "/pastCustomers/crm.png",
        className: "mix-blend-multiply"
    },
    {
        id: 10,
        img: "/pastCustomers/shopify.png",
    },
    {
        id: 11,
        img: "/pastCustomers/sonic.jpg",
    },
    {
        id: 12,
        img: "/pastCustomers/bharatbus.svg",
    },
    {
        id: 13,
        img: "/pastCustomers/burger.png",
    },
    {
        id: 14,
        img: "/pastCustomers/earthstore.png",
    },
    {
        id: 15,
        img: "/pastCustomers/education.png",
    },
    {
        id: 16,
        img: "/pastCustomers/evisa.svg",
    },
    {
        id: 17,
        img: "/pastCustomers/organic.svg",
    },
    {
        id: 18,
        img: "/pastCustomers/iapple.png",
    },
]

export default function Customers() {
    return (
        <>
            <div className="flex justify-center items-center flex-wrap gap-12">
                {
                    customers.map((image) => (
                        <Image key={image.id} src={image.img} width={500} height={500} alt="partners" className={`w-36 object-cover rounded-md ${image.className}`} />
                    ))
                }
            </div>
        </>
    )
}
