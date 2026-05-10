import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return initialValue;
      const parsed = JSON.parse(item);
      if (Array.isArray(initialValue) && !Array.isArray(parsed)) return initialValue;
      return parsed;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("LocalStorage write error:", error);
    }
  }, [key, storedValue]);

  const setValue = (value) => {
    try {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        try { window.localStorage.setItem(key, JSON.stringify(next)); } catch (_) {}
        return next;
      });
    } catch (error) {
      console.error("LocalStorage set error:", error);
    }
  };

  return [storedValue, setValue];
}