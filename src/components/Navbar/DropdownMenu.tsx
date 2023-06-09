import { type NavigationLinkItem } from '../../utils/types'
import Search from './Search'
import NavigationLink from './NavigationLink'

type DropdownMenuProps = {
  toggleDropdownMenu: () => void
  isDropdownOpened: boolean
  navigationLinks: NavigationLinkItem[]
}

const DropdownMenu = ({ toggleDropdownMenu, isDropdownOpened, navigationLinks }: DropdownMenuProps): JSX.Element => {
  return (
    <nav className={`${isDropdownOpened ? 'translate-y-1' : '-translate-y-full'} lg:-translate-y-full z-10 duration-default absolute right-0 left-0 top-14 bg-gray-700 px-4 md:px-6 lg:px-8`}>
      <Search toggleDropdownMenu={ toggleDropdownMenu } />
      <div className="flex flex-col items-start">
        {navigationLinks?.map((navLink: NavigationLinkItem, index: number) => (
          <NavigationLink key={ index } navLink={ navLink } />
        ))}
      </div>
    </nav>
  )
}
export default DropdownMenu
