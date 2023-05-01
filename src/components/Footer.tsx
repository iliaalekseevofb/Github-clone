import { NavLink } from 'react-router-dom'
import { LogoDark } from '../assets'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center w-full mt-6 py-2 border-t border-gray-250 dark:border-gray-600">
      <NavLink className="shrink-0 w-8" to="/">
        <img
          className="w-full"
          src={LogoDark}
          alt="GitHub mark"
        />
      </NavLink>
    </footer>
  )
}

export default Footer
