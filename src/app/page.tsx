'use client';

import Header from '@/components/Header';
import WorkSlider from '@/components/Home/WorkSlider';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const Page: React.FC = () => {
  const [padding, setPadding] = useState<number>(70);
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    if (padding !== 20) setPadding(20);
    setTimeout(() => {
      setRotate(!rotate);
    }, 1800);
  }, []);

  return (
    <div
      className={` ${rotate ? '!pt-0 !duration-700' : 'bg-primary-dark'} duration-1800 relative z-50`}
      style={{ paddingTop: `${padding}vh` }}
    >
      <div className={`${rotate ? 'rotate-360 w-screen' : 'w-[50vw]'} bg-primary-bg duration-600 mx-auto`}>
        <div className="bg-paper"></div>
        <Header />
        <WorkSlider />
        <div className='wrapper h1'>
          <h1 className='text-[23vw] leading-[17vw] h1  text-primary-bg bg-primary-dark p-0 editorial-bold text-center select-none'>APASNI</h1>
        </div>
        <div className='wrapper flex'>
          <div className='w-1/3 border-r border-primary-dark pr-[2%]'>
            <div className='text-[4.7vw] font-extrabold  relative text-center canopee editorial-bold'>
              Mern-Stack
              <div className='w-full h-[1px] absolute bottom-[40%] bg-primary-dark'></div>
            </div>

            <div className='text-[6.7vw] canopee relative tracking-[-0.05em] text-center editorial-bold'>
              Developer
              <div className='w-full h-[1px] absolute bottom-[40%] bg-primary-dark'></div>

            </div>
            <Image width={300} height={300} className='!w-full' src='/image/avatar-star.jpeg' alt='Avatar star' />
            <p className='my-3 text-[1.5vw] leading-[2vw] has-cropcat font-bold'>As a MERN stack developer, I thrive on building dynamic and scalable web applications with clean code, seamless UI, and efficient performance. Passionate about problem-solving and innovation, I enjoy crafting digital experiences that enhance user engagement and functionality.</p>
          </div>
          <div className='w-full pl-[2%]'>
            <Image width={300} height={300} className='w-full' src="/image/avatar-1.jpeg" alt="Avatar" />
            <p className='text-[7.5vw] tracking-[-0.03em] leading-[8.5vw] canopee editorial-bold my-4'>MERN developer writes, debugs, debugs again and finally it works</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
