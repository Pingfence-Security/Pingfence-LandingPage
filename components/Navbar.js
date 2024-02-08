'use client'

import React, { useState } from 'react';
import logo from '../public/assets/logo.png';
import Image from 'next/image';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-10">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image className='lg:w-10 w-6' src={logo} alt="logo" />
          <h1 className='text-white lg:text-3xl font-medium tracking-wider'>Pingfence</h1>
        </div>
        <div className="md:hidden"> {/* Display on mobile */}
          <button onClick={() => setShowMenu(!showMenu)} className="text-white text-xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {showMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex text-white gap-4 text-sm lg:text-lg ${showMenu ? 'block' : 'hidden'}`}> {/* Hide on mobile */}
          <p className='hover:underline hover:cursor-pointer'>Products</p>
          <p className='hover:underline hover:cursor-pointer'>Services</p>
          <p className='hover:underline hover:cursor-pointer'>Blog</p>
          <p className='hover:underline hover:cursor-pointer'>About us</p>
        </div>
        <div className="md:flex text-white lg:text-lg text-sm gap-4 items-center hidden md:block">
          <p>Login</p>
          <button className='bg-limegreen rounded-lg px-5 py-1 hover:bg-white hover:text-limegreen duration-300'>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
