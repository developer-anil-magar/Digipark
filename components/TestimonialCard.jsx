import Image from 'next/image';

import { Star } from '@/public';

const TestimonialCard = ({
  profileImg,
  name,
  description,
  rating,
  ratingFrom,
}) => {
  return (
    <article className="w-full flex flex-col md:max-w-[302px] h-[352px] bg-black-3 p-8 rounded-14">
      <div className="w-full relative">
        <Image src={profileImg} alt={name} width={53} height={53} />
        <h1 className="text-black-4 semibold-80 absolute -top-6 right-0">”</h1>
      </div>
      <h1 className="semibold-20 text-white-1 mt-6">{name}</h1>
      <p className="normal-16 text-gray-10 mt-3">{description}</p>
      <div className="flex mt-8">
        <Image src={Star} alt="star" width={18} height={18} />
        <h3 className="normal-18 text-white-1 ml-1.5">{rating}</h3>

        <p className="normal-14 text-gray-10 pt-[2px] ml-3">{ratingFrom}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
