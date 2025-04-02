import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser"

export default function Component() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const createAlert = (message) => {
        const alertBox = document.querySelector('.alert');
        alertBox.innerHTML = message;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n0tshcg', 'template_r938qvo', form.current, 'Rv5e_uBZzEM1DIk9W')
            .then((result) => {
                createAlert('Message Sent Successfully!');
                console.log(result.text);
            }, (error) => {
                createAlert('Message Sending Failed!, Try Again Later!');
                console.log(error.text);
            });

        setName('');
        setEmail('');
        setContact('');
        setMessage('');
    };

    return (
        <div className="flex flex-col-reverse md:flex-row gap-8 p-16">
            <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
                    <p className="text-gray-300 dark:text-gray-300">
                        We would love to hear from you. Please fill out the form below and we'll get back to you as soon as
                        possible.
                    </p>
                </div>
                <form className="space-y-4 text-gray-100" ref={form} onSubmit={sendEmail}>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="user_name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="user_email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            name="user_mobile"
                            className="mt-1 block w-full py-2 px-3 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                            id="contact"
                            placeholder="Enter your contact number"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            className="min-h-[100px] mt-1 block w-full py-2 px-3 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                            id="message"
                            placeholder="Enter your message"
                        />
                    </div>
                    <button className="w-full transition py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryText hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryText">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2">
                <img
                    alt="Contact Us"
                    className="md:w-5/6 h-full mx-auto"
                    src="/contact.png"
                    style={{
                        aspectRatio: "500/500",
                        objectFit: "cover",
                    }}
                    width="500"
                />
            </div>
            <div className="alert"></div>
        </div>
    )
}

