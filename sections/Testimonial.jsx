'use client';
import { useRef } from 'react';

import { Carousel, SubHeader, TestimonialCard } from '@/components';
import { testimonials } from '@/constants';

const Testimonial = () => {
  const cardRef = useRef(null);
  return (
    <section className="w-full flex flex-col lg:flex-row gap-14 pr-2 max-xl:px-6 lg:pr-6 py-10 lg:py-32">
      <article className="w-full lg:w-[47.1%]">
        <Carousel cardRef={cardRef}>
          {testimonials.map((testimonial) => (
            <div
              ref={cardRef}
              key={testimonial.id}
              className="transition-all ease-linear duration-[duration-2000ms]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Carousel>
      </article>
      <article>
        <SubHeader title="Testimonials from user 🤩" />
        <h1 className="w-[90%] extrabold-28 md:extrabold-48 text-white-1 mt-4">
          WHAT OUR USER SAY ABOUT US
        </h1>
        <p className="normal-20 text-gray-5 mt-8">
          You will get many benefits from our features. Finding a parking space
          becomes easier
        </p>
        <button className="button w-[172px] h-14 text-center text-white-1 normal-16 mt-16">
          Learn More
        </button>
      </article>
    </section>
  );
};

export default Testimonial;
