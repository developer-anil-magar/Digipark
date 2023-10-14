'use client';
import { useState } from 'react';

import { CustomInputSelect, Dropdown, SubHeader } from '@/components';
import { cities, initialDetails } from '@/constants';

const Location = () => {
  const [location, setLocation] = useState(initialDetails);
  return (
    <section className="mt-20">
      <div className="center flex-col w-full gap-4">
        <SubHeader title="Let’s explore what we can do 🤟🏻  " />
        <h1 className="extrabold-28 md:extrabold-48 text-white-1">
          EASY WAY TO FIND PARKING LOCATION
        </h1>
      </div>
      <section className="padding-x-100 mt-10">
        <div className="bg-black-1 rounded-140 px-8 py-6 flex gap-14">
          <CustomInputSelect
            label="Location:"
            dropDownOptions={cities}
            setValue={setLocation}
          />
          <Dropdown />
        </div>
      </section>
    </section>
  );
};

export default Location;
