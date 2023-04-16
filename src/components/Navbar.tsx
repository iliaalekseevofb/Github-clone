import { NavLink } from "react-router-dom";
import { GithubMark } from "../assets";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-15 px-4 md:px-6 lg:px-8 bg-gray-700 duration-default">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              className="w-8 hover:opacity-70 duration-default"
              src={GithubMark}
              alt="GitHub mark"
            />
          </NavLink>
          <Search />
        </div>
        <div>
          Something
        </div>
      </div>
    </nav>
  )
}

export default Navbar