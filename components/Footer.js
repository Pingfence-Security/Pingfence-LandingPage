import React from 'react'
import logo from '../public/assets/logo.png';
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full bg-black lg:px-20 px-10 py-10">
            <div className='flex md:flex-row flex-col gap-5 md:justify-around'>
                <div className="flex flex-col text-gray-400 gap-[20px] font-sans lg:text-md text-xs font-normal leading-normal">
                    <h1 className='lg:text-xl text-md text-white'>
                        <b>Solutions</b>
                    </h1>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Cloud Misconfigurations</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Offensive Security Engine</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Container & Kubernetes Security</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>IaC Scanning</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Compliance Monitoring</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Vulnerability Management</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Secret Scanning</p>
                </div>

                <div className="flex flex-col text-gray-400 gap-[20px] font-sans lg:text-md text-xs font-normal leading-normal">
                <h1 className='lg:text-xl text-md text-white'>
                        <b>Company</b>
                    </h1>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>About Us</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Careers</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Newsroom</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Mediakit</p>
                </div>

                <div className="flex flex-col text-gray-400 gap-[20px] font-sans lg:text-md text-xs font-normal leading-normal">
                <h1 className='lg:text-xl text-md text-white'>
                        <b>Resources</b>
                    </h1>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Blog</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>News</p>

                    <h1 className='lg:text-xl text-md text-white'>
                        <b>Comparison</b>
                    </h1>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Pingfence vs Prisma Cloud</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Pingfence vs Qualys</p>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Pingfence vs Trend Micro</p>
                </div>

                <div className="flex flex-col text-gray-200 gap-[20px] font-sans lg:text-md text-xs font-normal leading-normal">
                <h1 className='lg:text-xl text-md text-white'>
                        <b>Stay in touch</b>
                    </h1>
                    <p className='hover:text-white duration-300 hover:cursor-pointer'>Get cloud security insights and the latest PingSafe news</p>
                    <button className='bg-limegreen rounded-lg px-5 py-1 hover:bg-white hover:text-limegreen duration-300'>Email Us &rarr;</button>
                    <div className="flex gap-8 mt-8 justify-center">
                        <div className='hover:cursor-pointer hover:scale-110 transition duration-300'>
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11111 0C1.39222 0 0 1.41189 0 3.15507V25.2405C0 26.9837 1.39222 28.3956 3.11111 28.3956H24.8889C26.6078 28.3956 28 26.9837 28 25.2405V3.15507C28 1.41189 26.6078 0 24.8889 0H3.11111ZM3.11111 3.15507H24.8889V25.2405H3.11111V3.15507ZM7.43446 5.23174C6.10135 5.23174 5.30165 6.04445 5.30165 7.12663C5.30165 8.20882 6.10145 9.01844 7.30078 9.01844C8.63389 9.01844 9.43359 8.20882 9.43359 7.12663C9.43359 6.04445 8.6338 5.23174 7.43446 5.23174ZM5.40799 11.0427V22.0855H9.33333V11.0427H5.40799ZM12.572 11.0427V22.0855H16.4974V16.0496C16.4974 14.2528 17.7615 13.9945 18.1411 13.9945C18.5206 13.9945 19.5356 14.3805 19.5356 16.0496V22.0855H23.3333V16.0496C23.3333 12.5837 21.8147 11.0427 19.9154 11.0427C18.016 11.0427 17.003 11.6841 16.4974 12.5833V11.0427H12.572Z" fill="#8ACA4A" />
                            </svg>
                        </div>
                        <div className='hover:cursor-pointer hover:scale-110 transition duration-300'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.76172 3.5L11.04 15.3307L3.19694 24.5H6.27767L12.4186 17.3018L17.4544 24.5H25.5163L16.8574 12.1042L24.1969 3.5H21.1641L15.4834 10.1354L10.8486 3.5H2.76172ZM7.24154 5.83333H9.63184L21.0387 22.1667H18.6689L7.24154 5.83333Z" fill="#8ACA4A" />
                            </svg>
                        </div>
                        <div className='hover:cursor-pointer hover:scale-110 transition duration-300'>
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0C6.272 0 0 6.36062 0 14.1978C0 22.035 6.272 28.3956 14 28.3956H21V25.5561H14C7.924 25.5561 2.8 20.3597 2.8 14.1978C2.8 8.03596 7.924 2.83956 14 2.83956C20.076 2.83956 25.2 8.03596 25.2 14.1978V16.2281C25.2 17.3497 24.206 18.4572 23.1 18.4572C21.994 18.4572 21 17.3497 21 16.2281V14.1978C21 10.2792 17.864 7.0989 14 7.0989C10.136 7.0989 7 10.2792 7 14.1978C7 18.1164 10.136 21.2967 14 21.2967C15.932 21.2967 17.696 20.5016 18.956 19.2096C19.866 20.4732 21.434 21.2967 23.1 21.2967C25.858 21.2967 28 19.0251 28 16.2281V14.1978C28 6.36062 21.728 0 14 0ZM14 18.4572C11.676 18.4572 9.8 16.5546 9.8 14.1978C9.8 11.841 11.676 9.93847 14 9.93847C16.324 9.93847 18.2 11.841 18.2 14.1978C18.2 16.5546 16.324 18.4572 14 18.4572Z" fill="#8ACA4A" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 bg-black'>
                <hr className='border-8px border-limegreen w-full' />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-start md:gap-20 gap-8">
            <div className="flex items-center gap-4">
                <Image className='lg:w-10 w-6' src={logo} alt="logo" />
                <h1 className='text-white lg:text-3xl text-xl font-medium tracking-wider'>Pingfence</h1>
            </div>
            <div className='text-gray-300 text-sm lg:text-md'>
                <p>Copyright © 2024 Pingfence</p>
                <div className="flex gap-6 text-gray-400 underline mt-2">
                    <p className='hover:cursor-pointer hover:text-white duration-300'>Privacy Policy</p>
                    <p className='hover:cursor-pointer hover:text-white duration-300'>Terms of Service</p>
                    <p className='hover:cursor-pointer hover:text-white duration-300'>Responsible Disclousure Policy</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}