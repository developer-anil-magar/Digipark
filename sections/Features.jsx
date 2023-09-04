import Image from 'next/image';

import { Iphone } from '@/public';
import { SubHeader } from '@/components';

const Features = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-32 w-full padding-x-100 mt-[68px]">
      <div className="max-lg:order-2 relative max-lg:center max-lg:mt-14  lg:py-24">
        <figure className="absolute -rotate-[9deg]">
          <Image src={Iphone} alt="iphone" width={320} height={400} />
        </figure>
        <div className="w-full md:w-[360px] h-[620px] bg-gray-3 rounded-[32px] md:mt-16" />
      </div>
      <article className=" w-full flex flex-col lg:py-28">
        <SubHeader title="Our best features for you  💎 " />
        <h1 className="extrabold-28 md:extrabold-48 text-white-1 mt-6">
          THE SOLUTION TO YOUR <br /> PARKING PROBLEMS
        </h1>
        <p className="medium-20 text-gray-5 mt-8">
          We are aware that many people have difficulty finding a parking space.
          We made a feature that can certainly solve your parking problems so
          far
        </p>
      </article>
    </section>
  );
};

export default Features;
