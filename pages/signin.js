import { useSession, signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Signin = () => {
    const router = useRouter()
    const { data: session } = useSession()
    if (session) {
        router.push("/")
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })

            if (res.error) {
                setError("Invalid Credentials")
            }

            if (res.success) {
                router.push("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <Head>
                <title>Sign In | Campaigning Source</title>
            </Head>
            <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6">
                    <div className="sm:w-1/2 flex justify-start items-center">
                        <div className="max-w-md w-full space-y-8 p-6 bg-gray-700 rounded-lg shadow-md">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Sign In</h1>
                                <p className="text-gray-500">Enter your information and get into your account</p>
                            </div>
                            <div className="mt-8 space-y-6">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <label className="sr-only" htmlFor="email-address">
                                                Email address
                                            </label>
                                            <input
                                                autoComplete="email"
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-t-md focus:outline-none focus:ring-primaryText focus:border-primaryText focus:z-10 sm:text-sm"
                                                id="email-address"
                                                name="email"
                                                placeholder="Email address"
                                                required
                                                type="email"
                                                value={email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="sr-only" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                autoComplete="current-password"
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-transparent border border-gray-300 placeholder-gray-500 text-primaryText rounded-b-md focus:outline-none focus:ring-primaryText focus:border-primaryText focus:z-10 sm:text-sm"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                required
                                                type="password"
                                                value={password}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="group relative w-full transition flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryText hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                                
                                <div>
                                    {error && <div className="bg-red-600 text-white p-3 rounded-md w-1/6 text-center mx-auto my-3">{error}</div>}
                                </div>
                                <div>
                                    <p className="text-center text-sm text-gray-300">
                                        Don't have an account?{" "}
                                        <Link
                                            className="font-medium text-primaryText transition hover:text-indigo-500"
                                            href="/signup"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                    <p className="text-center text-sm text-gray-300 mt-4">
                                        OR
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="w-full flex justify-center py-2 px-4 border border-gray-100/30 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-transparent hover:bg-gray-100/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => signIn("google")}
                                    >
                                        <FcGoogle className="text-xl" />
                                        <span className="ml-4 ">Sign in with Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 flex flex-col items-center justify-center">
                        <Image
                            alt="signin"
                            className="w-full h-full object-cover"
                            src="/login.svg"
                            width={500}
                            height={500}
                        />
                        <a className="text-xs text-gray-600 m-0" href="https://storyset.com/people">People illustrations by Storyset</a>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Signin