import Link from 'next/link';

export default function AdBanner() {
    return (
        <div className="w-full py-1 text-center bg-primaryText/80 text-white">
            <p className='font-semibold font-sans'>
                ✨ Having some problems in registering your startup? {" "}
                <Link href="/company" className='underline text-black'>
                    click here!
                </Link>
                ✨
            </p>
        </div>
    )
}