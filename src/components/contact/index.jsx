import React, { useState } from 'react';
import style from './style.module.css';
import { validateForm } from '../../Utils/vaidateForm';
import InputField from '../UI/FormInput';
import TextareaField from '../UI/FormTextArea';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }
    };

    return (
        <div id="contact" className="bg-[var(--lightBg)] text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-[80px] py-5">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-teal-400">
                    ANIMATED & RESPONSIVE CONTACT US PAGE
                </h1>
                <p className="text-center text-gray-300 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt
                    laudantium enim possimus repellat debitis et quis!
                </p>
                <div className="grid md:grid-cols-2 gap-20">
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
                    <div className={`relative p-[2px] rounded-sm ${style.ContactFormCont}`}>
                        <div className='p-[20px] bg-[--lightBg]'>
                            <form className="p-[40px] pt-[10px] bg-[#2b2b2b]" onSubmit={handleSubmit}>
                                <InputField
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    label="Name"
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-[10px] mt-[7px]  ">{errors.name} &#33;</p>}
                                <InputField
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    label="Email"
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500 text-[10px] mt-[7px]  ">{errors.email} &#33;</p>}
                                <TextareaField
                                    name="message"
                                    value={formData.message}
                                    label="Message"
                                    onChange={handleChange}
                                />
                                {errors.message && <p className="text-red-500 text-[10px]   ">{errors.message} &#33;</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-teal-400 mt-[14px] text-gray-900 p-3 hover:bg-teal-300 transition duration-300"
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