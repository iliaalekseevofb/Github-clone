import {NavLink} from "react-router-dom";
import { UserNavigationLinkItem } from "../../../utils/types";

const NavigationLink = ({ path, text, disabled, icon }: UserNavigationLinkItem) => {
  const commonClassName: string = "w-full text-sm mr-2"

  if (disabled) {
    return (
      <div className={`${commonClassName} h-full flex items-center cursor-not-allowed`}>
        <div className="flex items-center rounded-md px-2 py-1 hover:bg-gray-300">
          <span className="w-6 h-6 mr-2 text-gray-400">
            {icon}
          </span>
          <span className="text-gray-200 leading-4">
            {text}
          </span>
        </div>
      </div>
    )
  }
  return (
    <NavLink
      to={path}
      className={`flex items-center"`}
    >
      <div className={`${commonClassName} h-full flex items-center cursor-pointer`}>
        <div className="flex items-center rounded-md px-2 py-1 hover:bg-gray-300">
          <span className="w-6 h-6 mr-2 text-gray-400">
            {icon}
          </span>
          <span className="text-gray-200 leading-4">
            {text}
          </span>
        </div>
      </div>
    </NavLink>
  )
}
export default NavigationLink
