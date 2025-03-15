'use client';

import Header from '@/components/Header';
import WorkSlider from '@/components/Home/WorkSlider';
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
    <>
      <div
        className={` ${rotate ? '!pt-0 !duration-700' : 'bg-primary-dark'} duration-1800 relative z-50`}
        style={{ paddingTop: `${padding}vh` }}
      >
        <div className={`${rotate ? 'rotate-360 w-screen' : 'w-[50vw]'} bg-primary-bg duration-600 mx-auto`}>
          <div className="bg-paper"></div>
          <Header />
          <WorkSlider />
          <div className='wrapper h1'>
            <h1 className='text-[23vw] leading-[17vw] h1  text-primary-bg bg-primary-dark p-0 editorial-bold text-center'>APASNI</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
