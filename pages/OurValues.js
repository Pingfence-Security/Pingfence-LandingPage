import React from 'react';
import values from '../public/assets/values.png';
import Image from 'next/image';
import Box1 from '../components/Box1';

export default function OurValues() {
  return (
    <div className='md:flex gap-4 lg:justify-between items-center bg-black lg:p-14 p-8 font-sans tracking-wider'>
      <div className='text-white flex flex-col gap-8'>
        <h1 className='lg:text-4xl md:text-2xl text-lg font-semibold'>Our Values</h1>
        <div className='lg:text-2xl md:text-md text-sm md:mb-8'>
          <p>Join us in our mission to create the most</p>
          <p className='text-limegreen'>impeccable technological solutions!</p>
        </div>
        <Image className='mb-4 md:mb-0' src={values} alt="values" width={500} height={500} />
      </div>
      <div className='grid grid-cols-2 grid-rows-2 lg:gap-8 gap-4'>
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
      </div>
    </div>
  );
}
