import NavigationLink from './Navbar/NavigationLink';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';
import { TableCellsIcon } from '@heroicons/react/24/outline';
import { CubeIcon } from '@heroicons/react/24/outline';
import { StarIcon } from "@heroicons/react/24/outline";
import {UserDetailsItem} from "../../utils/interfaces";

const Navbar = (user: UserDetailsItem) => {
  return (
    <div className="w-full flex justify-center mt-6 h-12 px-4 md:px-6 lg:px-8 border-b border-gray-600 duration-default">
      <div className="max-w-7xl w-full flex justify-start">
        <div className="w-64 min-w-64 lg:w-80 lg:min-w-80 mr-4 duration-default bg-gray-300 rounded-lg" />
        <nav className="flex items-center">
          <NavigationLink path={`/${user?.login}/overview`} text="Overview" disabled={false} icon={<BookOpenIcon />}/>
          <NavigationLink path={`/${user?.login}/repos`} text="Repositories" disabled={false} icon={<BookmarkSquareIcon />}/>
          <NavigationLink path='/' text="Projects" disabled={true} icon={<TableCellsIcon />}/>
          <NavigationLink path='/' text="Packages" disabled={true} icon={<CubeIcon />}/>
          <NavigationLink path='/' text="Stars" disabled={true} icon={<StarIcon />}/>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;