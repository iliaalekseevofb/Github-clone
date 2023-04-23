import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  //
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get item from localStorage by key
      const item = window.localStorage.getItem(key);
      // Return parsed JSON or initial value if item was not found in localStorage
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Show warning in console if something went wrong while reading from localStorage
      console.warn(`Error occured while reading ${key}:`, error);
      // Return initial value
      return initialValue;
    }
  })

  // Return a wrapped version of store setter function
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore: T = value instanceof Function ? value(storedValue) : value;
      // Save to localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      // Save state
      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`Error setting localStorage key ${key}:`, error);
    }
  }

  return [storedValue, setValue];
}