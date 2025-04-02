import Image from 'next/image'

export default function Advisors() {
    return (
        <>
        <div className="flex justify-center items-center flex-wrap gap-12">
            <Image src="/pastCustomers/advisors/wadhwani.webp" width={500} height={500} alt="advisors" className="w-44" />
        </div>
        </>
    )
}