import InnerNavigationLink from './InnerNavbar/InnerNavigationLink';
import { InnerNavigationLinkItem } from "../utils/types";
import { Location } from "../utils/enums";

type InnerNavbarProps = {
  location: Location,
  navigationLinks: InnerNavigationLinkItem[]
}

const InnerNavbar = ({ location, navigationLinks }: InnerNavbarProps) => {
  return (
    <nav className="w-full flex justify-center h-12 px-4 md:px-6 lg:px-8 border-b border-gray-600 duration-default">
      <div className={`${location === Location.USER_PAGE ? 'max-w-7xl' : ''} w-full flex justify-start overflow-hidden`}>
        { location === Location.USER_PAGE &&
          <div className="hidden lg:block w-64 min-w-64 lg:w-72 lg:min-w-72 mr-6 duration-default bg-transparent rounded-lg" />
        }
        <div className="flex items-center">
          {navigationLinks?.map((navLink: InnerNavigationLinkItem, index: number) => (
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