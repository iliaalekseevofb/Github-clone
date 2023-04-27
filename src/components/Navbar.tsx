import { NavLink } from "react-router-dom";
import { GithubMark } from "../assets";
import { NavigationLinkItem } from "../types/types";
import { GITHUB_BASE_URL } from "../utils/constants";
import Search from "./Navbar/Search";
import NavigationLink from "./Navbar/NavigationLink";
import DarkThemeToggle from "./Navbar/DarkThemeToggle";

const Navbar = () => {
  const navigationLinks: NavigationLinkItem[] = [
    {path: GITHUB_BASE_URL, text: 'Pull requests', external: true},
    {path: GITHUB_BASE_URL, text: 'Issues', external: true},
    {path: GITHUB_BASE_URL, text: 'Codespaces', external: true},
    {path: GITHUB_BASE_URL, text: 'Merketplace', external: true},
    {path: GITHUB_BASE_URL, text: 'Explore', external: true},
  ]

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
          {navigationLinks?.map((navLink: NavigationLinkItem, index: number) => (
            <NavigationLink
              key={index}
              path={navLink.path}
              text={navLink.text}
              external={navLink.external}
            />
          ))}
        </div>
        <DarkThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar