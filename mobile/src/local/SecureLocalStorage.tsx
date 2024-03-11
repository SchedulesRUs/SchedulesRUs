import {useState} from 'react';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

export const useSecureLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = async (key: string, value: string | null) => {
    if (value != null) {
      await RNSecureStorage.setItem(key, value, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
    } else {
      await RNSecureStorage.removeItem(key);
    }

    setValue(value);
  };

  const getItem = async (key: string) => {
    const value = await RNSecureStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    RNSecureStorage.removeItem(key);
    setValue(null);
  };

  return {value, setItem, getItem, removeItem};
};
