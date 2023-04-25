import React from 'react';
import { useDarkTheme } from "../../hooks/useDarkTheme";
import SunIcon from '@heroicons/react/20/solid/SunIcon';
import MoonIcon from '@heroicons/react/20/solid/MoonIcon';

const DarkThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <button className="w-7 h-7 text-gray-200">
      {darkTheme
        ? <SunIcon onClick={() => toggleDarkTheme()} className="dark-theme-toggle" />
        : <MoonIcon onClick={() => toggleDarkTheme()} className="dark-theme-toggle" />
      }
    </button>
  )
}

export default DarkThemeToggle;