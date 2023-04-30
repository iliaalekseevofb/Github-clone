import { NavLink } from "react-router-dom";
import { GithubMark } from "../assets";

const Footer = () => {
  return (
    <NavLink to="/" className="flex items-center justify-center w-full py-2 border-t border-gray-600">
      <img
        src={ GithubMark }
        className="w-8 opacity-10"
        alt="GitHub mark"
      />
    </NavLink>
  )
}

export default Footer