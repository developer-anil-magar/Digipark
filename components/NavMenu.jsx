import Link from 'next/link';

import { navLinks } from '@/constants';

const NavMenu = ({ isMobile }) => {
  return (
    <div>
      <ul
        className={`flex ${
          isMobile
            ? 'flex-col space-y-4 py-8 w-[250px] rounded-2xl absolute right-0 md:-right-28 top-10 bg-white-1 text-center z-10'
            : 'space-x-4 lg:space-x-[52px]'
        }`}>
        {navLinks.map((link) => (
          <li key={link.title} className="text-gray-1 normal-16 cursor-pointer">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
