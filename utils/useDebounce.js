'use client';
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(delayDebounce);
  }, [value, delay]);

  return debouncedValue;
};
