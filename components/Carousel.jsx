/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from '@/public';
import { TestimonialCard } from '.';
import { testimonials } from '@/constants';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const cardRef = useRef(null);
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
    <article className="relative w-full xl:w-1/2">
      <div
        className=" flex gap-5 overflow-x-scroll xl:pl-6 transition ease-linear duration-[duration-2000ms] w-full"
        ref={carousel}>
        {testimonials.map((testimonial) => (
          <div
            ref={cardRef}
            key={testimonial.id}
            className="transition-all ease-linear duration-[duration-2000ms]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex gap-10">
        <button
          className="w-11 h-11 rounded-full bg-black-5 center absolute left-0 top-40 z-10"
          onClick={movePrev}>
          <Image src={ArrowLeft} alt="arrow left" width={17} height={17} />
        </button>
        <button
          className="w-11 h-11 rounded-full bg-black-5 center absolute right-0 top-40 z-10"
          onClick={moveNext}>
          <Image src={ArrowRight} alt="arrow left" width={17} height={17} />
        </button>
      </div>
    </article>
  );
};

export default Carousel;
