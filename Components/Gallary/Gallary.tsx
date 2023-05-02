import Image from "next/image";
import image01 from '../../public/images/post-1-copyright.jpg'
import image02 from '../../public/images/post-10-copyright.jpg'
import image03 from '../../public/images/post-4-copyright.jpg'
import image04 from '../../public/images/post-8-copyright.jpg'
import image05 from '../../public/images/post-9-copyright.jpg'
import image06 from '../../public/images/post-139-copyright.jpg'

const Gallary = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1440px] lg:pb-24 bg-white mx-auto px-5 py-2 lg:px-32 lg:pt-10">
                <h2 className="mt-3 text-secondary pb-6 pt-10 mb-5 lg:leading-relaxed font-bold text-center sm:mt-8 text-[20px] lg:text-[36px] lg:p-5"> Inspiring Change <br /> <span className="text-primary">
                    Through Our Work
                </span> </h2>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex lg:w-1/2 flex-wrap" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000">
                        <div className="lg:w-1/2 relative p-1  md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image01}
                                alt="" />
                            <div className="absolute rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Stop Racism
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Embrace Diversity: Eradicating Racism fosters a world where every person is valued, celebrated, and united in the beautiful tapestry of humanity.
                                </p>

                            </div>
                        </div>

                        <div className="lg:w-1/2 relative p-1 md:p-2 ">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image02}
                                alt="" />
                            <div className="absolute rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Mental Health
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Breaking the Stigma: Promoting Mental Health Awareness encourages empathy, understanding, and support for those facing mental health challenges.
                                </p>

                            </div>
                        </div>


                        <div className="w-full relative p-1 md:p-2 ">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image04}
                                alt="" />
                            <div className="absolute  rounded-md m-2 inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Voice Of Slum
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Empowering the Unheard: The Voice of Slum amplifies the resilient spirit and untapped potential within marginalized communities.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="flex lg:w-1/2 flex-wrap" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000">
                        <div className="w-full relative p-1 md:p-2 ">

                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image03}
                                alt="" />
                            <div className="absolute m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Stay Safe
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Protecting Lives: Stay Safe promotes responsible choices and precautionary measures, ensuring the well-being of individuals and communities in the face of adversity.
                                </p>

                            </div>


                        </div>
                        <div className="lg:w-1/2 p-2  relative overflow-hidden md:p-2">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image06}
                                alt="" />
                            <div className="absolute  m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Take Vaccine
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Defeat the Pandemic: Embrace Vaccination as a crucial step towards safeguarding our health, restoring normalcy, and protecting our loved ones.
                                </p>

                            </div>
                        </div>
                        <div className="lg:w-1/2  p-2 relative overflow-hidden ">
                            <Image width={566} height={190} className="block h-full w-full rounded-lg object-cover object-center"
                                src={image05}
                                alt="" />
                            <div className="absolute m-2 rounded-md inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#f68229b1] bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-xl font-semibold text-white">
                                    Voice Of Youth
                                </p>

                                <p className="mb-4 text-sm tracking-wide text-white">
                                    Youth Empowerment: The Voice of Youth ignites change, inspires innovation, and shapes a world where young minds lead with passion, resilience.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;