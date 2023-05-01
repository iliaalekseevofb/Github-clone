import { NavLink } from 'react-router-dom'
import { LogoLight } from '../assets'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { GITHUB_BASE_URL } from '../utils/constants'
import { type NavigationLinkItem } from '../utils/types'
import Search from './Navbar/Search'
import NavigationLink from './Navbar/NavigationLink'
import DarkThemeToggle from './Navbar/DarkThemeToggle'
import DropdownMenu from './Navbar/DropdownMenu'
import { useState } from 'react'

const Navbar = (): JSX.Element => {
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false)

  const toggleDropdownMenu = () => {
    setIsDropdownOpened(prev => !prev)
  }

  const navigationLinks: NavigationLinkItem[] = [
    { path: `${GITHUB_BASE_URL}/pulls`, text: 'Pull requests' },
    { path: `${GITHUB_BASE_URL}/issues`, text: 'Issues' },
    { path: `${GITHUB_BASE_URL}/codespaces`, text: 'Codespaces' },
    { path: `${GITHUB_BASE_URL}/marketplace`, text: 'Marketplace' },
    { path: `${GITHUB_BASE_URL}/explore`, text: 'Explore' }
  ]

  return (
    <nav className="flex justify-center items-center w-full h-15 px-4 md:px-6 lg:px-8 bg-gray-700 duration-default">
      {/* For cases when screen size larger than 1024px */}
      <div className="hidden lg:flex z-20 bg-gray-700 justify-between items-center w-full h-full">
        <div className="flex items-center">
          <NavLink className="shrink-0 w-8" to="/">
            <img
              className="w-full logo dark:logo-dark hover:opacity-70 duration-default"
              src={LogoLight}
              alt="GitHub mark"
            />
          </NavLink>
          <Search />
          {navigationLinks?.map((navLink: NavigationLinkItem, index: number) => (
            <NavigationLink key={ index } navLink={ navLink } />
          ))}
        </div>
        <DarkThemeToggle />
      </div>

      {/* For cases when screen size smaller than 1024px */}
      <div className="z-20 flex h-full lg:hidden justify-between items-center bg-gray-700 w-full">
        <button
          className="border-none outline-none"
          onClick={() => { toggleDropdownMenu() }}
        >
          <Bars3Icon className="w-8 h-8 text-gray-100 hover:opacity-70 duration-default" />
        </button>
        <NavLink className="shrink-0 w-8" to="/">
          <img
            className="w-full hover:opacity-70 duration-default"
            src={LogoLight}
            alt="GitHub mark"
          />
        </NavLink>
        <DarkThemeToggle />
      </div>
      <DropdownMenu
        toggleDropdownMenu={ toggleDropdownMenu }
        isDropdownOpened={ isDropdownOpened }
        navigationLinks={ navigationLinks }
      />
    </nav>
  )
}

export default Navbar
