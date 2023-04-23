import SunIcon from '@heroicons/react/20/solid/SunIcon';
import MoonIcon from '@heroicons/react/20/solid/MoonIcon';

const darkThemeToggle = () => {
  const colorTheme = 'dark';

  return (
    <button className="w-8 h-8 text-gray-200">
      {colorTheme === 'dark'
        ? <SunIcon className="w-full h-full" />
        : <MoonIcon className="w-full h-full" />
      }
    </button>
  )
}

export default darkThemeToggle;