import React from 'react';

const EventsSection = () => {
    return (
        <section>
            <h1 className="k text-6xl font-bold text-center bg-green-700 text-yellow-200 p-8">
                Events
            </h1>
            {/* 1st Event  */}
            <div className="md:mx-36">
                <div className="flex justify-between  p-5">
                    <div className="flex justify-between text-center bb">
                        <div className="m-1">
                            <h1 className="text-5xl">26</h1>
                        </div>
                        <div className="text-justify m-1 mx-3">
                            <h3>MON</h3>
                            <h3>JUN</h3>
                        </div>
                        <div className="m-5">
                            <h5>
                                <span>Bongho Bazer fire</span>
                                <span className=""> / Mirpur, Dhaka.</span>
                            </h5>
                        </div>
                    </div>
                    <div className="m-5">
                        <button className="bgco ff bgc btn-sm">Register Now</button>
                    </div>
                </div>
                <hr className="hr" />
            </div>
            {/* 2nd Event  */}
            <div className="md:mx-36">
                <div className="flex justify-between  p-5">
                    <div className="flex justify-between text-center bb">
                        <div className="m-1">
                            <h1 className="text-5xl">29</h1>
                        </div>
                        <div className="text-justify m-1 mx-3">
                            <h3>WED</h3>
                            <h3>JUN</h3>
                        </div>
                        <div className="m-5">
                            <h5>
                                <span>New Market Fire</span>
                                <span className=""> / New Market, Dhaka</span>
                            </h5>
                        </div>
                    </div>
                    <div className="m-5">
                        <button className="bgco ff bgc btn-sm">Register Now</button>
                    </div>
                </div>
                <hr className="hr" />
            </div>
            {/* 3rd event  */}
            <div className="md:mx-36">
                <div className="flex justify-between  p-5">
                    <div className="flex justify-between text-center bb">
                        <div className="m-1">
                            <h1 className="text-5xl">04</h1>
                        </div>
                        <div className="text-justify m-1 mx-3">
                            <h3>FRI</h3>
                            <h3>JUlY</h3>
                        </div>
                        <div className="m-5">
                            <h5>
                                <span>Child Labor Solution Agency</span>
                                <span className=""> / Bonani, Dhaka</span>
                            </h5>
                        </div>
                    </div>
                    <div className="m-5">
                        <button className="bgco ff bgc btn-sm">Register Now</button>
                    </div>
                </div>
                <hr className="hr" />
            </div>
        </section>
    );
};

export default EventsSection;