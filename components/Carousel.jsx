/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from '@/public';

const Carousel = ({ children, cardRef }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const slideDistance = cardRef.current ? cardRef.current.clientWidth + 20 : 0;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      slideDistance * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = slideDistance * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - slideDistance
      : 0;
  }, []);

  return (
    <section className="relative w-full">
      <div
        className=" flex gap-5 overflow-x-scroll xl:pl-6 w-full carousel-scrollbar"
        ref={carousel}>
        {children}
      </div>
      <div className="flex gap-10">
        <button
          className="w-11 h-11 rounded-full bg-black-5 center absolute left-0 top-40 z-10"
          onClick={movePrev}
          disabled={isDisabled('prev')}>
          <Image src={ArrowLeft} alt="arrow left" width={17} height={17} />
        </button>
        <button
          className="w-11 h-11 rounded-full bg-black-5 center absolute right-0 top-40 z-10"
          onClick={moveNext}
          disabled={isDisabled('next')}>
          <Image src={ArrowRight} alt="arrow left" width={17} height={17} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
