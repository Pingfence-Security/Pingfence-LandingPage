import React from 'react'
import logo from '../public/assets/logo.png';
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='h-24 font-sans bg-black w-full px-8 py-2 flex items-center justify-between'>
      <div className="flex items-center gap-4">
      <Image className='w-10' src={logo} alt="logo" />
      <h1 className='text-white text-3xl font-medium tracking-wider'>Pingfence</h1>
      </div>
      <div className="flex text-white gap-4 text-lg">
        <p className='hover:underline hover:cursor-pointer'>Products</p>
        <p className='hover:underline hover:cursor-pointer'>Services</p>
        <p className='hover:underline hover:cursor-pointer'>Blog</p>
        <p className='hover:underline hover:cursor-pointer'>About us</p>
      </div>
      <div className="flex text-white text-lg gap-4 items-center">
        <p>Login</p>
      <button className='bg-limegreen rounded-lg px-5 py-1 hover:bg-white hover:text-limegreen duration-300'>Get Started</button>  
      </div>
    </div>
  )
}
