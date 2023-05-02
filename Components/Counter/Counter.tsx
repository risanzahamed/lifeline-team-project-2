
const Counter = () => {
    return (
        <div className='lg:flex justify-between items-center mt-10 lg:mx-10 mx-5 rounded shadow-xl'>
            <div className="card bg-base-100">
                <div className="card-body text-center" data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src="../../Counter-images/image1.png" className='lg:mx-12 mx-auto' alt="" width={80} />
                    <h3 className='text-[30px] font-bold'>2348</h3>
                    <p className='text-[18px] font-semibold opacity-50'>Total campaign</p>
                </div>
            </div>

            <div className="card bg-base-100" data-aos="fade-down"
                data-aos-duration="3000">
                <div className="card-body text-center">
                    <img src="../../Counter-images/image2.png" className='lg:mx-12 mx-auto' alt="" width={80} />
                    <h3 className='text-[30px] font-bold'>1785</h3>
                    <p className='text-[18px] font-semibold opacity-50'>Satisfied donors</p>
                </div>
            </div>

            <div className="card bg-base-100" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="card-body text-center">
                    <img src="../../Counter-images/image3.png" className='lg:mx-12 mx-auto' alt="" width={80} />
                    <h3 className='text-[30px] font-bold'>4287</h3>
                    <p className='text-[18px] font-semibold opacity-50'>Fund raised</p>
                </div>
            </div>

            <div className="card bg-base-100" data-aos="fade-down"
                data-aos-duration="3000">
                <div className="card-body text-center">
                    <img src="../../Counter-images/image4.png" className='lg:mx-12 mx-auto' alt="" width={80} />
                    <h3 className='text-[30px] font-bold'>1294</h3>
                    <p className='text-[18px] font-semibold opacity-50'>Happy volunteers</p>
                </div>
            </div>

        </div>
    );
};

export default Counter;