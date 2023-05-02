import React from 'react';

const VulenteerModal = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="joinVolunterers" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="joinVolunterers" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">FILL IN THE FORM !</h3>
                    <form action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="phone" className="input input-bordered" />
                        </div>
                        <button className='btn btn-warning mt-4 w-full'>JOIN NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VulenteerModal;