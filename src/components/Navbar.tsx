import { NavLink } from "react-router-dom";
import { GithubMark } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-15 px-8 bg-gray-700">
      <div className="flex justify-between items-center w-full">
        <div>
          <NavLink to="/">
            <img
              className="w-8 hover:opacity-70 duration-default"
              src={GithubMark}
              alt="GitHub mark"
            />
          </NavLink>
        </div>
        <div>
          Something
        </div>
      </div>
    </nav>
  )
}

export default Navbar