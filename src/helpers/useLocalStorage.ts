import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../data/LocalStorageKeys";

/**
 * Hook responsible for get and set some keys in Local Storage.
 * @param {string} key - key responsible which will be get/set from Local Storage API
 * @param initialValue - initial value of Local Storage item;
 * @returns Array which contains current local storage item and (func) responsible for setting value of local storage item
 */

export function useLocalStorage<T = any>(
  key: LocalStorageKeys,
  initialValue: T
) {
  const value = localStorage.getItem(key);
  const [storedValue, setStoredValue] = useState<T>(
    value ? JSON.parse(value) : initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue] as [
    T,
    React.Dispatch<React.SetStateAction<T>>
  ];
}
