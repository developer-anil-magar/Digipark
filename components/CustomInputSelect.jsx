'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { ArrowDown } from '@/public';
import { useDebounce, useTapAway } from '@/utils';

const CustomInputSelect = ({
  dropDownOptions,
  setValue,
  label,
  placeholder,
}) => {
  const areaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');

  const debouncedSearchValue = useDebounce(searchString);

  const filteredOptions = dropDownOptions.filter((option) =>
    option.name.toLowerCase().includes(debouncedSearchValue?.toLowerCase())
  );

  useTapAway({ ref: areaRef, handler: () => setIsOpen(false) });

  const handleSelect = (e, element) => {
    e.stopPropagation();
    setValue((prev) => ({
      ...prev,
      ...element,
    }));
    setSearchString(element.name);
    setIsOpen(false);
  };

  return (
    <div
      ref={areaRef}
      onClick={() => setIsOpen(true)}
      className="relative flex gap-3 items-center">
      <label htmlFor={label} className="text-gray-2 normal-16">
        {label}
      </label>
      <input
        type="text"
        id={label}
        className="bg-transparent border border-white-2 rounded-63 py-2 pl-4 pr-8 focus:border-white-2 focus:ring-0 focus:outline-none placeholder:text-white-1 text-white-1"
        autoComplete="off"
        placeholder={placeholder}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Image
        src={ArrowDown}
        alt="arrow-down"
        width={24}
        height={24}
        className="absolute right-2.5 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <ul className="absolute top-12 flex flex-col w-full bg-black-1 text-gray-2 max-h-[200px] z-10 overflow-auto carousel-scrollbar">
          {filteredOptions?.map((element) => (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-blue-500/5"
              key={element.lat + element.lng}
              onClick={(e) => handleSelect(e, element)}>
              {element.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomInputSelect;
