import Image from 'next/image';

import { Iphone } from '@/public';
import { FeatureCard, SubHeader } from '@/components';
import { featureCards } from '@/constants';

const Features = () => {
  return (
    <section className="flex gap-52 w-full padding-x-100 max-xl:mt-16">
      <div className="hidden xl:block relative xl:py-16 xl:pl-6">
        <figure className="absolute -rotate-[9deg]">
          <Image
            src={Iphone}
            alt="iphone"
            width={310}
            height={600}
            className="w-[90%] h-[550px] md:w-[300px] lg:h-[750px] object-contain "
          />
        </figure>
        <div className="w-full h-[500px] md:w-[340px] lg:h-[620px] bg-gray-3 rounded-[32px] md:mt-32 max-md:mx-7" />
      </div>
      <article className=" w-full flex flex-col xl:pt-32">
        <SubHeader title="Our best features for you  💎 " />
        <h1 className="extrabold-28 md:extrabold-48 text-white-1 mt-4">
          THE SOLUTION TO YOUR <br /> PARKING PROBLEMS
        </h1>
        <p className="medium-20 text-gray-5 mt-8 w-full md:w-[70%] xl:w-[95%]">
          We are aware that many people have difficulty finding a parking space.
          We made a feature that can certainly solve your parking problems so
          far
        </p>
        <div className="w-full flex flex-col md:flex-row gap-5 my-8 md:my-16">
          {featureCards.map((feature) => (
            <FeatureCard
              key={feature.id}
              img={feature.img}
              description={feature.description}
            />
          ))}
        </div>
        <button className="button w-[172px] h-14 text-center text-white-1 normal-16">
          Learn More
        </button>
      </article>
    </section>
  );
};

export default Features;
