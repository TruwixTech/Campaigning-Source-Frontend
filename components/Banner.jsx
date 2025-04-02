import { Montserrat, Satisfy } from "next/font/google"
import Link from "next/link"
import MagneticEffect from "./MagneticEffect"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: ['400']
})

const satisfy = Satisfy({
    subsets: ['latin'],
    weight: ['400']
})

export default function Banner() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-800 to-gray-600">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center text-white">
                    <div className="space-y-2">
                        <h1 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl ${montserrat.className}`}>
                        "Empowering Your Digital Transformation"
                        </h1>
                        <p className="mx-auto max-w-[700px] text-lg md:text-xl">We provide innovative solutions for your business growth.</p>
                    </div>
                    <MagneticEffect>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                        href="/contact"
                    >
                        Learn More
                    </Link></MagneticEffect>
                </div>
            </div>
        </section>
    )
}
