import React from 'react';
import Image from 'next/image';

const Box1 = ({ image, title, desc }) => {
  return (
    <div className='relative flex flex-col md:gap-3 items-center text-white justify-center'>
      <Image className='border rounded-2xl border-limegreen' src={image} alt="Home" width={350} height={350} />
      <h1 className='lg:text-2xl md:text-lg text-md'>{title}</h1>
      <p className='lg:text-xl md:text-md text-sm'>{desc}</p>
    </div>
  );
};

export default Box1;
