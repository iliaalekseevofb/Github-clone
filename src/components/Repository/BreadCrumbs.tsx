import { NavLink, useParams } from 'react-router-dom'
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'

const BreadCrumbs = (): JSX.Element => {
  const { user, repository } = useParams<string>()

  return (
    <div className="flex items-center w-full mb-2 lg:mb-4 px-4 md:px-6 lg:px-8 duration-default text-md lg:text-xl text-gray-400">
      <BookmarkSquareIcon className="shrink-0 w-5 h-5 mr-1" />
      <NavLink className="text-blue-700 hover:underline" to={`/${user}/overview`}>{user}</NavLink>
      <span className="mx-1">/</span>
      <NavLink className="font-semibold text-blue-700 hover:underline truncate" to={`/${user}/${repository}`}>{repository}</NavLink>
    </div>
  )
}
export default BreadCrumbs
