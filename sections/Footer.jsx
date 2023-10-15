import Image from 'next/image';
import Link from 'next/link';

import { footerLinks, socialIcons } from '@/constants';

const Footer = () => {
  return (
    <section className="w-full my-8 bg-black-1 rounded-40 px-6 lg:px-[76px] py-[74px]">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col gap-10">
        <article>
          <Link href="/">
            <h1 className="text-white-1 extrabold-28">DIGIPARK</h1>
          </Link>
          <p className="medium-18 text-gray-5 mt-6 sm:max-w-sm">
            Curious about new developments and updates? follow out social media
          </p>
          <div className="flex mt-11 gap-5">
            {socialIcons.map(({ id, img }) => (
              <figure
                key={id}
                className="w-11 h-11 rounded-full bg-black-2 center">
                <Image src={img} alt="social Icon" width={20} height={20} />
              </figure>
            ))}
          </div>
        </article>
        <article className="flex flex-1 flex-wrap justify-between items-start gap-5 w-full">
          {footerLinks.map((footer) => (
            <div key={footer.title} className="flex flex-col flex-1">
              <h2 className="semibold-20 text-white-1 uppercase">
                {footer.title}
              </h2>
              <ul>
                {footer.links.map((link) => (
                  <li
                    key={link.name}
                    className="medium-18 text-gray-5 mt-6 sm:max-w-sm">
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Footer;
