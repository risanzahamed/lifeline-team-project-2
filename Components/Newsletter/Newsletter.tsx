import React from 'react';

const Newsletter = () => {
    return (
        <section className=''>
            <div className="parent-wrapper">
                <span className="close-btn glyphicon glyphicon-remove"></span>
                <div className="subscribe-wrapper">
                    <h4>Subscribe newsletter now for a member.</h4>
                    <input
                        type="email"
                        name="email"
                        className="subscribe-input"
                        placeholder="Enter Your e-mail"
                    />
                    <div className="submit-btn">Subscribe Now</div>
                </div>
            </div>
            <div className="text-center">
                Keep With us being a member without cost.
            </div>
        </section>
    );
};

export default Newsletter;