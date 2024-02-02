import React from 'react'
import Box2 from '../components/Box2';

const Productpage = () => {
    return (
        <div className="bg-black p-14 text-white font-sans">
            <div className="flex flex-col justify-center items-center ">
                <h1 className='text-4xl font-semibold'> Some kind of inspiring text</h1>
                <p className='mt-6 text-2xl text-center w-1/2'>Lorem ipsum dolor sit amet, sed do eiusmod tempor Lorem ipsum dolor sit amet, sed doLorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut sed do eiusmod.</p>
            </div>
            <div className='py-14'>
                <h1 className='text-4xl font-semibold '>Our Products</h1>
                <div className="flex mt-10 justify-center gap-10">
                    <Box2 image='/assets/box1.png' title="Product 1" desc="description for product1" />
                    <Box2 image='/assets/box1.png' title="Product 2" desc="description for product2" />
                    <Box2 image='/assets/box1.png' title="Product 3" desc="description for product3" />
                </div>
            </div>
        </div>
    )
}

export default Productpage
