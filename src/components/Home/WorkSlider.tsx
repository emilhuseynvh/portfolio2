import { workData } from '@/data/work-data';
import React from 'react';
import WorkCard from '../ui/WorkCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

let work = workData;
let half = Math.ceil(work.length / 2);
let firstHalf = work.slice(0, half);
let secondHalf = work.slice(half);

const WorkSlider: React.FC = () => {
    const initialSlide = firstHalf.length;
    return (
        <div className="wrapper">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                initialSlide={initialSlide - 1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="my-10"
            >
                {firstHalf.map((item, i) => (
                    <SwiperSlide key={`first-${i}`}>
                        <WorkCard item={item} />
                    </SwiperSlide>
                ))}
                
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center h-full border-l border-r border-primary-half-drak">
                        <h2 className="text-4xl font-serif mb-4 text-center editorial-bold">ALL WORK!</h2>
                        <p className="text-2xl font-serif text-center">
                            A Featured selection<br />
                            the latest work —<br />
                            of the last years.
                        </p>
                        <div className="mt-12 text-sm">
                            <p className="font-medium text-sm"><b>TIP!</b> Drag sideways to navigate</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                {secondHalf.map((item, i) => (
                    <SwiperSlide key={`second-${i}`}>
                        <WorkCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WorkSlider;