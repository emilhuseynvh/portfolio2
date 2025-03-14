'use client';

import Header from '@/components/Header';
import WorkSlider from '@/components/Home/WorkSlider';
import React, { useEffect, useState } from 'react';


const page: React.FC = () => {
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
        <div className={`${rotate ? 'rotate-360 w-screen' : 'w-[50vw]'} h-screen bg-primary-bg duration-600 mx-auto`}>
          <div className="bg-paper"></div>
          <Header />
          <WorkSlider />
        </div>
      </div>
    </>
  );
};

export default page;
