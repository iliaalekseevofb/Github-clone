import NavigationLink from './Navbar/NavigationLink';
import { BookOpenIcon, BookmarkSquareIcon, TableCellsIcon, CubeIcon, StarIcon } from '@heroicons/react/24/outline';
import {NavigationLinkItem, UserNavigationLinkItem} from "../../types/types";

type NavbarProps = {
  userLogin: string;
}

const GITHUB_BASE_URL = "https://github.com/";

const Navbar = ({ userLogin }: NavbarProps) => {
  const navigationLinks: UserNavigationLinkItem[] = [
    {path: `/${userLogin}/overview`, text: 'Overview', external: false, icon: <BookOpenIcon />},
    {path: `/${userLogin}/repositories`, text: 'Repositories', external: false, icon: <BookmarkSquareIcon />},
    {path: `${GITHUB_BASE_URL}${userLogin}/?tab=projects`, text: 'Projects', external: true, icon: <TableCellsIcon />},
    {path: `${GITHUB_BASE_URL}${userLogin}/?tab=packages`, text: 'Packages', external: true, icon: <StarIcon />},
    {path: `/${userLogin}/stars`, text: 'Stars', external: false, icon: <StarIcon />},
  ]

  return (
    <div className="w-full flex justify-center mt-6 h-12 px-4 md:px-6 lg:px-8 border-b border-gray-600 duration-default">
      <div className="max-w-7xl w-full flex justify-start">
        <div className="w-64 min-w-64 lg:w-80 lg:min-w-80 mr-4 duration-default bg-gray-300 rounded-lg" />
        <nav className="flex items-center">
          {navigationLinks?.map((navLink: NavigationLinkItem, index: number) => (
            <NavigationLink
              key={index}
              path={navLink.path}
              text={navLink.text}
              external={navLink.external}
              icon={navLink.icon}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar;