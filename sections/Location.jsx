'use client';

import { useState } from 'react';

import { CustomInputSelect, SubHeader } from '@/components';
import { cities, priceRange, timeRange } from '@/constants';
import LeafletMap from '@/components/map';

const Location = () => {
  const [location, setLocation] = useState(cities[1]);
  const [range, setRange] = useState(priceRange[0]);
  const [time, setTime] = useState(timeRange[0]);
  return (
    <section className="mt-20">
      <div className="center flex-col w-full gap-4 px-6">
        <SubHeader title="Let’s explore what we can do 🤟🏻  " />
        <h1 className="extrabold-28 md:extrabold-48 text-white-1 text-center">
          EASY WAY TO FIND PARKING LOCATION
        </h1>
      </div>
      <section className="padding-x-100 mt-10">
        <article className="bg-black-1 rounded-33 lg:rounded-140 px-8 py-6 flex flex-col lg:flex-row max-lg:gap-10 justify-between max-lg:items-center">
          <CustomInputSelect
            label="Location:"
            dropDownOptions={cities}
            setValue={setLocation}
            placeholder="Enter City"
          />
          <CustomInputSelect
            label="Price Range:"
            dropDownOptions={priceRange}
            setValue={setRange}
            placeholder={priceRange[0].name}
          />
          <CustomInputSelect
            label="Parking Type:"
            dropDownOptions={timeRange}
            setValue={setTime}
            placeholder={timeRange[0].name}
          />
          <button className="hidden 2xl:block w-[200px] h-full  rounded-63 text-white-1 bg-blue-1 py-2.5 px-4">
            Get Access{' '}
          </button>
        </article>
      </section>
      <article className="relative">
        <LeafletMap location={location} />
        {/* <div className="absolute top-0 w-full h-full bg-transparent shadow-inset z-[400] rounded-63" /> */}
      </article>
    </section>
  );
};

export default Location;
