import React from 'react';
import values from '../public/assets/values.png';
import Image from 'next/image';
import Box1 from '../components/Box1';

export default function OurValues() {
  return (
    <div className='flex justify-around items-center bg-black p-14 font-sans tracking-wider'>
      <div className='text-white flex flex-col gap-8'>
        <h1 className='text-5xl font-semibold'>Our Values</h1>
        <div className='text-2xl mb-8'>
          <p>Join us in our mission to create the most</p>
          <p className='text-limegreen'>impeccable technological solutions!</p>
        </div>
        <Image src={values} alt="values" width={500} height={500} />
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-8'>
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
        <Box1 image='/assets/box1.png' />
      </div>
    </div>
  );
}
