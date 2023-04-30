import { NavigationLinkItem } from "../../utils/types";
import Search from "./Search";
import DropdownMenuItem from "./DropdownMenuItem";

type DropdownMenuProps = {
  isDropdownOpened: boolean,
  navigationLinks: NavigationLinkItem[]
}

const DropdownMenu = ({ isDropdownOpened, navigationLinks }: DropdownMenuProps) => {
  return (
    <nav className={`${isDropdownOpened ? 'translate-y-1' : '-translate-y-full'} lg:-translate-y-full z-10 duration-default absolute right-0 left-0 top-14 bg-gray-700 px-4 md:px-6 lg:px-8`}>
      <Search />
      <div className="flex flex-col items-start">
        {navigationLinks?.map((navLink: NavigationLinkItem, index: number) => (
          <DropdownMenuItem key={ index } navLink={ navLink } />
        ))}
      </div>
    </nav>
  )
}
export default DropdownMenu
