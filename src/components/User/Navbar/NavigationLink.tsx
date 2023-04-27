import {NavLink} from "react-router-dom";
import { UserNavigationLinkItem } from "../../../utils/types";

const NavigationLink = ({ path, text, external, icon }: UserNavigationLinkItem) => {
  const NavigationLinkInner = () => {
    return (
      <div className="flex items-center rounded-md px-2 py-1 hover:bg-gray-300">
        <span className="w-6 h-6 mr-1 text-gray-400">
          {icon}
        </span>
        <span className="text-gray-200 leading-4">
          {text}
        </span>
      </div>
    )
  }

  if (external) {
    return (
      <a href={path} target="_blank" className="user-link">
        <NavigationLinkInner />
      </a>
    )
  }

  return (
    <NavLink
      to={path}
      className={({ isActive}) =>
        isActive ? "user-link border-orange-400" : "user-link"
      }
    >
      <NavigationLinkInner />
    </NavLink>
  )
}
export default NavigationLink
