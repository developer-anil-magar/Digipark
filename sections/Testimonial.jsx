import { Carousel, SubHeader } from '@/components';

const Testimonial = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-14 pr-2 max-xl:px-6 lg:pr-6 py-20">
      <Carousel />
      <article>
        <SubHeader title="Testimonials from user 🤩" />
        <h1 className="w-[90%] extrabold-48 text-white-1 mt-4">
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
