import { type NavigationLinkItem } from '../../utils/types'

const NavigationLink = ({ navLink }: { navLink: NavigationLinkItem }): JSX.Element => {
  return (
    <a
      href={navLink.path}
      target="_blank"
      className="w-full lg:w-auto flex lg:block items-center h-10 lg:h-auto lg:ml-4 text-sm text-gray-200 hover:text-gray-500 font-semibold duration-default cursor-pointer whitespace-nowrap border-y border-gray-300 lg:border-none " rel="noreferrer"
    >
      {navLink.text}
    </a>
  )
}

export default NavigationLink
