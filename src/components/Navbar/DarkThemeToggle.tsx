import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { useDarkTheme } from "../../hooks/useDarkTheme";

const DarkThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <button className="shrink-0 w-7 h-7 text-gray-200">
      {darkTheme
        ? <SunIcon onClick={() => toggleDarkTheme()} className="nav-button" />
        : <MoonIcon onClick={() => toggleDarkTheme()} className="nav-button" />
      }
    </button>
  )
}

export default DarkThemeToggle;