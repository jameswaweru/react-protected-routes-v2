import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Retrieve the stored value from local storage
  const storedValue = localStorage.getItem(key);

  // Parse the stored JSON value or return the initial value if there's no stored value
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to hold the current value
  const [value, setValue] = useState(initial);

  // Update local storage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
