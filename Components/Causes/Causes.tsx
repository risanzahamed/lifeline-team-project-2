
const Causes = () => {
    return (
        <div>
            <div className='text-center mb-10'>
                <h3 className='text-[16px] lg:text-[24px] font-bold opacity-50 mb-2 lg:ml-10'>Trending Causes</h3>
                <div className='flex items-center justify-center mx-auto lg:w-[600px] w-[350px]'>
                    <img src="../../Causes_images/title_image.png" className='w-[30px]' alt="" />
                    <h2 className='lg:text-[36px] text-[20px] font-bold text-secondary leading-10'>We are always <br /> where other people need help</h2>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 lg:mx-16 mx-5 ' data-aos="zoom-in-up" data-aos-duration="3000">
                <div className="card bg-base-100 shadow-xl relative">
                    <figure><img src="../../Causes_images/causes-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-secondary font-bold">Collect fund for drinking water & healthy food</h2>

                        <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.</p>

                        <div className='flex justify-between mt-5 items-center'>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/date.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>Date:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>20 Mar, 2022</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/user.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>By:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute top-2 left-2 bg-primary text-[14px] rounded-[5px] px-[15px] py-[8px] text-accent font-semibold'>
                        Food & Water
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl relative">
                    <figure><img src="../../Causes_images/causes-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-secondary font-bold">Give children a good education & better life</h2>

                        <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.</p>

                        <div className='flex justify-between mt-5 items-center'>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/date.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>Date:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>26 Mar, 2022</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/user.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>By:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute top-2 left-2 bg-primary text-[14px] rounded-[5px] px-[15px] py-[8px] text-accent font-semibold'>
                        Education
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl relative">
                    <figure><img src="../../Causes_images/causes-3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-secondary font-bold">Collect fund for homeless people and give shelter</h2>

                        <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.</p>

                        <div className='flex justify-between mt-5 items-center'>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/date.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>Date:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>30 Mar, 2022</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <img src="../../Causes_images/user.png" alt="" />
                                </div>

                                <div>
                                    <h3 className='font-semibold text-secondary text-[18px]'>By:</h3>
                                    <p className='text-[14px] opacity-60 font-semibold'>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute top-2 left-2 bg-primary text-[14px] rounded-[5px] px-[15px] py-[8px] text-accent font-semibold'>
                        Home & Shelter
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Causes;