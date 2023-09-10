import Image from 'next/image';

const FeatureCard = ({ img, description }) => {
  return (
    <section className="group w-full md:max-w-[196px] flex flex-col bg-black-1 hover:bg-blue-1 rounded-20 cursor-pointer">
      <figure className="center ml-3 mt-3 w-[71px] h-[71px] rounded-10 bg-black-2 group-hover:bg-blue-4">
        <Image src={img} alt="feature image" width={44} height={44} />
      </figure>
      <p className="semibold-20 text-white-1 mx-6 mt-12 mb-8">{description}</p>
    </section>
  );
};

export default FeatureCard;
