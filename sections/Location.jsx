'use client';
import { useState } from 'react';

import { LocationSelectBox, SubHeader } from '@/components';
import { cities } from '@/constants/cities';

const initialDetails = {
  city: '',
  lat: '',
  lng: '',
  country: '',
  parking: '',
};

const Location = () => {
  const [location, setLocation] = useState(initialDetails);
  console.log(location);
  return (
    <section className="mt-20">
      <div className="center flex-col w-full gap-4">
        <SubHeader title="Let’s explore what we can do 🤟🏻  " />
        <h1 className="extrabold-28 md:extrabold-48 text-white-1">
          EASY WAY TO FIND PARKING LOCATION
        </h1>
      </div>
      <article className="padding-x-100 mt-10">
        <LocationSelectBox dropDownOptions={cities} setValue={setLocation} />
      </article>
    </section>
  );
};

export default Location;
