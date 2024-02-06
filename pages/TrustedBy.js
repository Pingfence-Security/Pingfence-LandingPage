import React from 'react';
import Testimonials from '../components/Testimonials';

const TrustedBy = () => {
    return (
        <div className="bg-black p-14 text-white font-sans">
            <div className='py-14'>
                <h1 className='text-4xl font-semibold '>Trusted by...</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    <div className="m-8">
                        <Testimonials/>
                    </div>
                    <div className="m-8">
                        <Testimonials/>
                    </div>
                    <div className="m-8">
                        <Testimonials/>
                    </div>
                    <div className="m-8">
                        <Testimonials/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;

