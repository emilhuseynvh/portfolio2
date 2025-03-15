import Image from 'next/image';
import React from 'react';
import logo from '../../public/image/logo.svg';

const Header: React.FC = () => {
    return (
        <header className='flex w-full bg-primary-bg justify-between z-[52] inset-0 items-center wrapper h-[10.8vh] border-b-[1.5px] border-[#1d1d1b80]'>
            <div className='bg-paper h-full w-full z-40'></div>
            <p className='tracking-[0.04em] text-[1.8vh] creator md:block hidden'>Azerbaijan, Baku</p>
            <div className='w-[19vh]'>
                <Image className='w-full h-full' src={logo} alt='Logo' />
            </div>
            <div className='flex flex-col gap-[3px] cursor-pointer group'>
                <div className='bg-primary-dark w-8 h-[1.6px] duration-200 group-hover:translate-x-1'></div>
                <div className='bg-primary-dark w-8 h-[1.5px] duration-200 group-hover:-translate-x-1'></div>
            </div>
        </header>
    );
};

export default Header;