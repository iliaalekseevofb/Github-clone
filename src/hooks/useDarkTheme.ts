import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkTheme() {
  // I use useLocalStorage hook to persist state through a page refresh.
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>("dark-theme", true);

  useEffect(() => {
    const className = "dark-theme";
    const element = window.document.body;
    // if dark theme is enabled, add necessary class
    if (darkTheme) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }

  }, [darkTheme]); // Called if color theme was changed


  return {darkTheme, setDarkTheme};
}