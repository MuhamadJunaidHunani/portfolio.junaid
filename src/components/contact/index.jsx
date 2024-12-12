import React, { useState } from 'react';
import style from './style.module.css';
import { validateForm } from '../../Utils/vaidateForm';
import InputField from '../UI/FormInput';
import TextareaField from '../UI/FormTextArea';
import LocationCard from '../UI/LocationCard';
import {  FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';

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
                <h1 className="text-3xl md:text-5xl text-center mb-6 text-teal-400">
                    Reach Me
                </h1>
                <p className="text-center text-gray-300 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt
                    laudantium enim possimus repellat debitis et quis!
                </p>
                <div className="flex justify-between items-center lg:flex-row flex-col">
                    <div className='flex flex-col gap-[45px]'>
                        <LocationCard icon={<FaLocationDot/>} title={'Address'} text={'Karachi , Pakistan'} />
                        <LocationCard icon={<MdEmail/>} title={'Email'} text={'junaidhunani890@gmail.com'} />
                        <LocationCard icon={<FaPhoneAlt/>} title={'Phone'} text={'0321-89*****'} />
                        <div className="flex items-center text-2xl gap-[6px] mt-[30px]">
                            <BsTwitterX/>
                            <div className='border-b-2 border-[#f0f0f0] w-[30px]'></div>
                            <FaLinkedinIn/>
                            <div className='border-b-2 border-[#f0f0f0] w-[30px]'></div>
                            <VscGithub/>
                        </div>
                    </div>
                    <div className={` max-w-[420px] w-full relative p-[2px] rounded-sm ${style.ContactFormCont}`}>
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