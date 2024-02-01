import React from 'react';
import Image from 'next/image';

const Box1 = ({ image }) => {
  return (
    <div className='relative'>
      <Image className='border border-limegreen' src={image} alt="Home" width={350} height={350} />
      <div className='absolute bottom-6 right-0 bg-limegreen rounded-l-full border-l-10 w-16 h-8'/>
    </div>
  );
};

export default Box1;
