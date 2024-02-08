import React from 'react'
import Box2 from '../components/Box2';

const Productpage = () => {
    return (
        <div className="bg-black md:p-14 p-8 text-white font-sans">
            <div className="flex flex-col justify-center items-center ">
                <h1 className='lg:text-4xl md:text-2xl text-md font-semibold'> Some kind of inspiring text</h1>
                <p className='mt-6 lg:text-2xl md:text-md text-xs text-center md:w-1/2'>Lorem ipsum dolor sit amet, sed do eiusmod tempor Lorem ipsum dolor sit amet, sed doLorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut sed do eiusmod.</p>
            </div>
            <div className='py-10'>
                <h1 className='lg:text-4xl md:text-2xl text-lg text-center md:text-left font-semibold '>Our Products</h1>
                <div className="flex md:flex-row flex-col mt-10 justify-center gap-10">
                    <Box2 image='/assets/box1.png' title="Product 1" desc="description for product1" />
                    <Box2 image='/assets/box1.png' title="Product 2" desc="description for product2" />
                    <Box2 image='/assets/box1.png' title="Product 3" desc="description for product3" />
                </div>
            </div>
        </div>
    )
}

export default Productpage
