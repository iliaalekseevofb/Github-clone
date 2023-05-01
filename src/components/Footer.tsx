import { NavLink } from "react-router-dom";
import { GithubMark } from "../assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full mt-6 py-2 border-t border-gray-600">
      <NavLink to="/">
        <img
          src={ GithubMark }
          className="w-8 opacity-10"
          alt="GitHub mark"
        />
      </NavLink>
    </footer>
  )
}

export default Footer