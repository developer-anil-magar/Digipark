import Image from 'next/image';

import { features } from '@/constants';
import { Map } from '@/public';
import { SubHeader } from '@/components';

const Hero = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row padding-l-100 mt-16  relative">
      <div className="hidden xl:block w-2/5" />
      <div className="hidden xl:block w-[170px] h-[515px] bg-gradient absolute left-0 top-0 z-10" />

      <article className="flex flex-col w-full pr-4 md:pr-0 xl:w-3/5 xl:absolute">
        <SubHeader title="1# best sofware fest 2023 🏆" />

        <h1 className="extrabold-50 md:extrabold-72 text-white-1 mt-4">
          THE SOLUTION TO <br className="hidden md:block" /> YOUR PARKING
          <br className="hidden md:block" /> PROBLEMS
        </h1>
        <p className="medium-20 text-gray-5 w-full md:w-[68%] mt-10">
          The mobile parking app that is integrated with GPS that it can make it
          easier for you to find the nearest parking lot with a variety of price
          ranges.
        </p>
        <div className="flex mt-16 bg-gray-8 rounded-[33px] w-full md:w-[556px] h-[70px] pl-8 py-[11px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full h-full bg-transparent  text-white-1 normal-20 focus:outline-none"
          />

          <button className="w-[200px] h-full bg-blue-1 rounded-[33px] mx-[11px]">
            Get Access{' '}
          </button>
        </div>
        <div className="flex gap-9 mt-8">
          {features.map((feature) => (
            <div className="flex gap-4" key={feature.title}>
              <Image src={feature.img} alt="tick" width={20} height={20} />
              <h3 className="normal-16 text-white-1">{feature.title}</h3>
            </div>
          ))}
        </div>
      </article>
      <div
        className="w-full h-[500px] lg:h-[680px]"
        style={{
          backgroundImage: `url(${Map.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
};

export default Hero;