import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number = 200): string => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
};
