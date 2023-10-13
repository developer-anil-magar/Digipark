'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { ArrowDown } from '@/public';
import { useDebounce, useTapAway } from '@/utils';

const CustomSelect = ({ dropDownOptions, setValue }) => {
  const areaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');

  const debouncedSearchValue = useDebounce(searchString);

  const filteredOptions = dropDownOptions.filter((option) =>
    option.city.toLowerCase().includes(debouncedSearchValue?.toLowerCase())
  );

  useTapAway({ ref: areaRef, handler: () => setIsOpen(false) });

  return (
    <section className="bg-black-1 rounded-140 px-8 py-6 flex">
      <div
        ref={areaRef}
        onClick={() => setIsOpen(true)}
        className="relative flex gap-6 items-center">
        <label htmlFor="location" className="text-gray-2 normal-16">
          Location:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="bg-transparent border border-white-2 rounded-63 py-2 pl-4 pr-8 focus:border-white-2 focus:ring-0 focus:outline-none text-white-1"
          autoComplete="off"
          placeholder="Enter City"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Image
          src={ArrowDown}
          alt="arrow-down"
          width={24}
          height={24}
          className="absolute right-2.5"
        />
        {isOpen && (
          <ul className="absolute top-12 flex flex-col w-full bg-black-1 text-gray-2 max-h-[200px] z-10 overflow-auto carousel-scrollbar">
            {filteredOptions?.map((element) => (
              <li
                className="px-4 py-2 cursor-pointer hover:bg-blue-500/5"
                key={element.lat + element.lng}
                onClick={() => {
                  setValue((prev) => ({
                    ...prev,
                    ...element,
                  }));
                  setSearchString(element.city);
                }}>
                {element.city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CustomSelect;
