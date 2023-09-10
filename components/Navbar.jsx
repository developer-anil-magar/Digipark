'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Hamburger } from '@/public';
import { NavMenu } from '.';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="padding-x-100 py-6 flex justify-between">
      <Link href="/" className="center">
        <h1 className="text-white-1 extrabold-28">DIGIPARK</h1>
      </Link>

      <article className="hidden lg:center">
        <NavMenu />
      </article>

      <div className="hidden max-lg:center relative">
        <figure
          className="center cursor-pointer"
          onClick={() => setIsMobile((prev) => !prev)}>
          <Image src={Hamburger} alt="Hamburger" width={30} height={30} />
        </figure>

        {isMobile && <NavMenu isMobile={isMobile} />}
      </div>
      <button className="hidden md:block button text-center text-white-1 w-[150px] h-10 xl:w-[170px] xl:h-12 normal-16">
        Start Free Trial
      </button>
    </nav>
  );
};

export default Navbar;
