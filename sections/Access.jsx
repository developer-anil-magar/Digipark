import { InputBar, SubHeader } from '@/components';
import { Iphone, IphoneMap } from '@/public';
import Image from 'next/image';

const Access = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-blue-1 rounded-40 max-lg:px-6 lg:mt-24">
      <article className="lg:pl-16 py-16 lg:py-28 w-full">
        <SubHeader title="Free trial download now  🎉 " />
        <h1 className="extrabold-28 md:extrabold-56 text-white-1 uppercase mt-4">
          be part of the future <br /> parking era now
        </h1>
        <p className="normal-20 text-gray-5 mt-8 w-2/3">
          you can try this application for 13 days and please feel the
          convenience of the future.
        </p>
        <div className="mt-8">
          <InputBar bgInput="bg-blue-5" bgButton="bg-background" />
        </div>
      </article>
      <figure className="hidden w-full relative lg:flex justify-end items-end">
        <Image
          src={Iphone}
          alt="iphone"
          width={325}
          height={660}
          className="absolute left-10 -top-16"
        />
        <Image
          src={IphoneMap}
          alt="iphone map"
          width={285}
          height={600}
          className="pt-16"
        />
      </figure>
    </section>
  );
};

export default Access;
