import InnerNavigationLink from './InnerNavbar/InnerNavigationLink';
import { BookOpenIcon, BookmarkSquareIcon, TableCellsIcon, CubeIcon, StarIcon } from '@heroicons/react/24/outline';
import { UserNavigationLinkItem } from "../types/types";
import { GITHUB_BASE_URL } from "../utils/constants";

const InnerNavbar = ({ userLogin }: { userLogin: string }) => {
  const navigationLinks: UserNavigationLinkItem[] = [
    {path: `/${userLogin}/overview`, text: 'Overview', external: false, icon: <BookOpenIcon />},
    {path: `/${userLogin}/repositories`, text: 'Repositories', external: false, icon: <BookmarkSquareIcon />},
    {path: `${GITHUB_BASE_URL}${userLogin}/?tab=projects`, text: 'Projects', external: true, icon: <TableCellsIcon />},
    {path: `${GITHUB_BASE_URL}${userLogin}/?tab=packages`, text: 'Packages', external: true, icon: <CubeIcon />},
    {path: `/${userLogin}/stars`, text: 'Stars', external: false, icon: <StarIcon />},
  ]

  return (
    <nav className="w-full flex justify-center mt-6 h-12 px-4 md:px-6 lg:px-8 border-b border-gray-600 duration-default">
      <div className="max-w-7xl w-full flex justify-start">
        <div className="w-64 min-w-64 lg:w-72 lg:min-w-72 mr-6 duration-default bg-transparent rounded-lg" />
        <div className="flex items-center">
          {navigationLinks?.map((navLink: UserNavigationLinkItem, index: number) => (
            <InnerNavigationLink
              key={index}
              path={navLink.path}
              text={navLink.text}
              external={navLink.external}
              icon={navLink.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default InnerNavbar;