import React from 'react';
import Testimonials from '../components/Testimonials';

const TrustedBy = () => {
    return (
        <div className="bg-black md:p-14 p-8 text-white font-sans">
            <div className='lg:py-10'>
                <h1 className='lg:text-4xl text-2xl font-semibold '>Trusted by...</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    <div className="md:m-8 m-4">
                        <Testimonials/>
                    </div>
                    <div className="md:m-8 m-4">
                        <Testimonials/>
                    </div>
                    <div className="md:m-8 m-4">
                        <Testimonials/>
                    </div>
                    <div className="md:m-8 m-4">
                        <Testimonials/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;

