import { NavigationLinkItem } from "../../utils/types";

const DropdownMenuItem = ({ navLink }: { navLink: NavigationLinkItem }) => {
  return (
    <a
      href={navLink.path}
      target="_blank"
      className="w-full flex items-center h-10 text-sm text-gray-200 hover:text-gray-500 font-semibold duration-default cursor-pointer whitespace-nowrap border-t border-gray-300"
    >
      {navLink.text}
    </a>
  )
}
export default DropdownMenuItem
