'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper } from 'swiper/react';

import { ArrowLeft, ArrowRight } from '@/public';

const SwiperCarousel = ({ children }) => {
  const swiperRef = useRef(null);

  const sliderBreakpoints = {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        breakpoints={sliderBreakpoints}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {children}
      </Swiper>
      <button
        className="w-11 h-11 rounded-full bg-black-5 center absolute left-0 top-40 z-10"
        onClick={() => swiperRef.current?.slidePrev()}>
        <Image src={ArrowLeft} alt="arrow left" width={17} height={17} />
      </button>
      <button
        className="w-11 h-11 rounded-full bg-black-5 center absolute right-0 top-40 z-10"
        onClick={() => swiperRef.current?.slideNext()}>
        <Image src={ArrowRight} alt="arrow left" width={17} height={17} />
      </button>
    </div>
  );
};

export default SwiperCarousel;
