import React from 'react';
import Image from 'next/image';

const Box1 = ({ image }) => {
  return (
    <div className='relative'>
      <Image className='border border-limegreen' src={image} alt="Home" width={350} height={350} />
      <div className='absolute bottom-6 right-0 bg-limegreen rounded-l-full border-l-10 lg:w-16 lg:h-8 md:w-10 md:h-4 w-6 h-2'/>
    </div>
  );
};

export default Box1;
