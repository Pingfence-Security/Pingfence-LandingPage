import React from 'react'

export default function Home() {
  return (
    <div className='home lg:h-[100vh] h-full px-10 md:px-0 py-10 lg:py-0 flex flex-col justify-center items-center text-white text-center tracking-wide font-sans'>
      <h1 className='lg:text-5xl md:text-3xl text-lg md:w-1/2 leading-normal font-semibold'>Looking For A Smart Product To Enhance Your Security?</h1>
      <p className='md:w-1/2 mt-6 lg:text-xl md:text-md text-sm'>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua.</p>
      <button className='bg-limegreen rounded-lg px-7 py-2 hover:bg-white hover:text-limegreen duration-300 text-md lg:text-xl mt-8'>Get Started</button> 
    </div>
  )
}
