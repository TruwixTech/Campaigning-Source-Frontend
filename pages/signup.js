import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        contactNumber: '',
        designation: '',
        socialProfile: '',
        state: '',
        region: '',
        companyName: '',
        college: '',
        course: '',
        services: '',
        email: '',
        password: '',
    };

    const { data: session } = useSession();
    const [formData, setFormData] = useState(initialFormData);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [socialProfile, setSocialProfile] = useState('');
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');
    const [services, setServices] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const Router = useRouter();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'contactNumber':
                setContactNumber(value);
                break;
            case 'designation':
                setDesignation(value);
                break;
            case 'socialProfile':
                setSocialProfile(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'region':
                setRegion(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'college':
                setCollege(value);
                break;
            case 'course':
                setCourse(value);
                break;
            case 'services':
                setServices(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', formData);
            setFormData(initialFormData);
            if (response.data.success) {
                Router.push('/signin');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage("User with the same email already exists!");
            } else {
                console.error('Error:', error);
            }
        }
    };

    useEffect(() => {
        if (session)
            Router.push('/')
    }, [session])
    return (
        <>
            <Head>
                <title>Sign Up | Campaigning Source</title>
            </Head>
            <main className="min-h-screen flex flex-col md:flex-row justify-center gap-6 py-6 px-4 md:px-6">
                <div className="md:p-8">
                    <div className="mx-auto space-y-6 bg-gray-700 p-8 rounded-lg">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <p className="text-gray-500">Enter your information to create an account</p>
                        </div>
                        <form className='text-gray-700' onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-primaryText" htmlFor="first-name">
                                            First name
                                        </label>
                                        <input
                                            className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText  rounded-md"
                                            id="first-name"
                                            placeholder="John"
                                            required
                                            name='firstName'
                                            value={firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-primaryText" htmlFor="last-name">
                                            Last name
                                        </label>
                                        <input
                                            className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText  rounded-md"
                                            id="last-name"
                                            placeholder="Doe"
                                            required
                                            name='lastName'
                                            value={lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-primaryText" htmlFor="contact-number">
                                        Contact Number
                                    </label>
                                    <input
                                        className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                        id="contact-number"
                                        placeholder="1234567890"
                                        required
                                        name='contactNumber'
                                        value={contactNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-primaryText" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                        id="email"
                                        placeholder="john@example.com"
                                        type="email"
                                        required
                                        name='email'
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className="block text-sm font-medium text-primaryText" htmlFor="first-name">
                                        Designation
                                    </label>
                                    <select
                                        id="designation"
                                        name="designation"
                                        value={designation}
                                        onChange={handleInputChange}
                                        className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 bg-gray-600 placeholder-gray-500 text-primaryText rounded-md"
                                        required
                                    >
                                        <option value="">Select Designation</option>
                                        <option value="Influencer">Influencer</option>
                                        <option value="Political Worker">Political Worker</option>
                                        <option value="Business/ Corporate Worker">Business/ Corporate Worker</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="Student">Student</option>
                                    </select>
                                    {
                                        designation === 'Influencer' || designation === 'Freelancer' ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    id="socialProfile"
                                                    name="socialProfile"
                                                    value={socialProfile}
                                                    onChange={handleInputChange}
                                                    placeholder="Social Profile Username"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                                    required
                                                />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        designation === 'Political Worker' ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={state}
                                                    onChange={handleInputChange}
                                                    placeholder="State"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    id="region"
                                                    name="region"
                                                    value={region}
                                                    onChange={handleInputChange}
                                                    placeholder="Region"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                                    required
                                                />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        designation === 'Business/ Corporate Worker' ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    name="companyName"
                                                    value={companyName}
                                                    onChange={handleInputChange}
                                                    placeholder="Company Name"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                                    required
                                                />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        designation === 'Student' ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    id="college"
                                                    name="college"
                                                    value={college}
                                                    onChange={handleInputChange}
                                                    placeholder="College"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText rounded-md"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    id="course"
                                                    name="course"
                                                    value={course}
                                                    onChange={handleInputChange}
                                                    placeholder="Course"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText  rounded-md"
                                                    required
                                                />
                                            </div>
                                        ) : null
                                    }
                                    {
                                        designation === 'Freelancer' ? (
                                            <div>
                                                <textarea
                                                    id="services"
                                                    name="services"
                                                    value={services}
                                                    onChange={handleInputChange}
                                                    placeholder="Services You Provide"
                                                    className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText  rounded-md"
                                                    required
                                                ></textarea>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-primaryText" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="mt-1 focus:ring-primaryText focus:outline-0 block w-full shadow-sm sm:text-sm bg-transparent border-gray-300 placeholder-gray-500 text-primaryText  rounded-md"
                                        id="password"
                                        required
                                        type="password"
                                        placeholder='********'
                                        name='password'
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryText hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div>
                            {errorMessage && <div className="bg-red-600 text-white p-3 rounded-md w-1/6 text-center mx-auto my-3">{errorMessage}</div>}
                        </div>
                        <div>
                            <p className="text-center text-sm text-gray-300">
                                Already have an account?{" "}
                                <Link
                                    className="font-medium text-primaryText hover:text-indigo-500"
                                    href="/signin"
                                >
                                    Sign in
                                </Link>
                            </p>
                            <p className="text-center text-sm text-gray-300 mt-4">
                                OR
                            </p>
                        </div>
                        <div className="space-y-4">
                            <button
                                className="w-full flex justify-center py-2 px-4 border border-gray-100/30 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-transparent hover:bg-gray-100/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="button"
                                onClick={() => signIn('google')}
                            >
                                <FcGoogle className="text-xl mr-2" />
                                 Sign up with Google
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 flex flex-col items-center justify-center">
                    <Image
                        alt="sign up"
                        className="object-cover h-full w-full"
                        src="/signup.svg"
                        width={500}
                        height={500}
                    />
                    <a className="text-xs text-gray-600 m-0" href="https://storyset.com/people">People illustrations by Storyset</a>
                </div>
            </main>
        </>

    )
};

export default SignUp;
