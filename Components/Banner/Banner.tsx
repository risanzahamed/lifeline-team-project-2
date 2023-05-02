import Image from 'next/image';
import React from 'react';
import heroImg from '../../public/images/heroBgImage (1).png'
import Link from 'next/link';

const Banner = () => {
    return (
        <section>
            <div className="relative bg-white  sm:pt-16 lg:py-20 xl:py-48">
                <div className="absolute inset-0 hidden  lg:block">
                    <Image className="object-cover object-right w-full h-full " src={heroImg} alt="" />
                </div>
                <div className="relative px-4 mx-auto sm:px-6 lg:px-24 max-w-[1440px]">

                    <div className="pt-4  lg:hidden">
                        <Image width={566} height={190} className="w-full mx-auto "
                            src={heroImg}
                            alt="" />
                    </div>
                    <div className="  mx-auto text-center lg:mx-0 lg:max-w-[1000px]  lg:text-left">
                        <h1 className="mt-3 text-black text-4xl leading-snug font-bold lg:text-white sm:mt-8 sm:text-5xl xl:text-[70px]">

                            <span className="font-bold text-primary">Share your love</span> <br /> to make someone’s <br /> life better

                        </h1>
                        <p className="lg:text-white lg:text-xl text-black mt-6 lg:pt-10 lg:pb-6 font-normal">Welcome to our NGO, dedicated to uplifting lives. Through our compassionate initiatives, we empower communities, provide essential resources, and foster sustainable change. Join us on this impactful journey towards a brighter future.</p>

                        <div className="mt-8 sm:mt-12">
                            <Link
                                href='/donate'
                                aria-label='Donate Now'
                                title='Donate Now'
                                className="btn lg:px-12 lg:py-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 border-0 text-white hover:text-black hover:bg-[#dee0e3] bg-[#F26A02]"

                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;