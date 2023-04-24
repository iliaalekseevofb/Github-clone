import React from 'react';
import { useDarkTheme } from "../../hooks/useDarkTheme";
import SunIcon from '@heroicons/react/20/solid/SunIcon';
import MoonIcon from '@heroicons/react/20/solid/MoonIcon';

const DarkThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();
  const commonClassName: string = "w-full h-full hover:opacity-70 duration-default";

  return (
    <button className="w-7 h-7 text-gray-200">
      {darkTheme
        ? <SunIcon onClick={() => toggleDarkTheme()} className={commonClassName} />
        : <MoonIcon onClick={() => toggleDarkTheme()} className={commonClassName} />
      }
    </button>
  )
}

export default DarkThemeToggle;