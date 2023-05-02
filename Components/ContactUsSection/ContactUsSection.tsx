import React from 'react';
import Image from 'next/image'
import { FaLocationArrow, FaPhone, FaVoicemail } from 'react-icons/fa';

const ContactUsSection = () => {
    return (
        <div className="hero min-h-screen  "
            style={{ backgroundImage: `url("/contact.png")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-24">
                <div className="  lg:text-left  mx-4  text-indigo-50">
                    <h1 className="text-4xl font-bold mb-6"> Contact Us </h1>
                    <div className='flex'>
                        <FaLocationArrow className='h-8 w-8 mt-2' />
                        <div className='mx-4'>
                            <h2 className="text-2xl font-bold   ">Address</h2>
                            <h3>1207-Dhaka,Banglades</h3>
                        </div>
                    </div>
                    <div className='flex mt-2'>
                        <FaPhone className='h-8 w-8' />
                        <div className='mx-4'>
                            <h2 className="text-2xl font-bold   "> Phone</h2>
                            <h3>+8476953099</h3>
                        </div>
                    </div>
                    <div className='flex mt-2'>
                        <FaVoicemail className='h-8 w-8' />
                        <div className='mx-4'>
                            <h2 className="text-2xl font-bold   ">Email</h2>
                            <h3>teamwork@gmail.com</h3>
                        </div>
                    </div>




                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  mx-4">
                    <div className="card-body">
                        <div className="form-control">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>

                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Message</span>
                            </label>
                            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning font-bold">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;