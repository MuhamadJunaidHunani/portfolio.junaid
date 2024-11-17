import React from 'react';
import style from './style.module.css'

const ContactForm = () => {
    return (
        <div id='contact' className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-5">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-teal-400">
                    ANIMATED & RESPONSIVE CONTACT US PAGE
                </h1>
                <p className="text-center text-gray-300 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt
                    laudantium enim possimus repellat debitis et quis!
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5 text-teal-400">Address</h2>
                        <p className="mb-4">402671 Sugar Camp Road, Owatonna, Minnesota, 55026-080</p>
                        <h2 className="text-2xl font-semibold mb-5 text-teal-400">Phone</h2>
                        <p className="mb-4">000-000-0000</p>
                        <h2 className="text-2xl font-semibold mb-5 text-teal-400">Email</h2>
                        <p className="mb-4">wrub7d7810@temporary-mail.com</p>
                        <h2 className="text-2xl font-semibold mb-5 text-teal-400">Connect with us</h2>
                        <div className="flex space-x-5 text-xl">
                            <i className="fab fa-facebook text-teal-400"></i>
                            <i className="fab fa-twitter text-teal-400"></i>
                            <i className="fab fa-linkedin text-teal-400"></i>
                        </div>
                    </div>

                    <div className={`relative p-[1px] rounded-sm shadow-lg ${style.ContactFormCont}`}>
                    <div className={`relative p-8 bg-gray-800 rounded-sm`}>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 bg-gray-700 border border-teal-400 rounded text-gray-200 focus:outline-none focus:ring focus:ring-teal-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-gray-700 border border-teal-400 rounded text-gray-200 focus:outline-none focus:ring focus:ring-teal-400"
                            />
                            <textarea
                                placeholder="Type your message..."
                                className="w-full p-3 bg-gray-700 border border-teal-400 rounded text-gray-200 focus:outline-none focus:ring focus:ring-teal-400"
                                rows="5"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-teal-400 text-gray-900 p-3 rounded hover:bg-teal-300 transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
