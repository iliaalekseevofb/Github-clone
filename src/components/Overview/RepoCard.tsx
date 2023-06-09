import { type RepoItem } from '../../utils/types'
import { BookmarkSquareIcon, StarIcon, ShareIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { LANGUAGES_COLORS } from '../../utils/constants'

const RepoCard = ({ repoItem }: { repoItem: RepoItem }): JSX.Element => {
  return (
    <div className="w-full border border-gray-250 dark:border-gray-300 p-4 rounded-md background-transparent">
      <div className="flex justify-start items-center">
        <span className="mr-2 text-gray-300 dark:text-gray-400">
          <BookmarkSquareIcon className="w-5 h-5" />
        </span>
        <NavLink
          className="font-semibold text-sm text-blue-700 hover:underline text-ellipsis overflow-hidden"
          to={`/${repoItem.owner.login}/${repoItem.name}`}
        >
          {repoItem.name}
        </NavLink>
      </div>
      <p className="mt-2 text-xs text-gray-400 line-clamp-5">
        {repoItem.description}
      </p>
      <div className="flex items-end mt-2">
        {repoItem.language &&
          <p className="flex items-center mr-2">
            <span className={`relative inline-block w-3 h-3 mr-1 rounded-full ${LANGUAGES_COLORS[repoItem.language?.replace(/ /g, '_').replace(/'/g, '')]}`} />
            <span className="text-xs leading-4 text-gray-300 dark:text-gray-400">{repoItem.language}</span>
          </p>
        }
        <p className="flex items-center mr-2 text-gray-300 dark:text-gray-400 hover:text-blue-700 duration-default cursor-pointer">
          <StarIcon className="w-4 h-4 mr-0.5" />
          <span className="text-xs leading-4">{repoItem.stargazers_count}</span>
        </p>
        <p className="flex items-center text-gray-300 dark:text-gray-400 hover:text-blue-700 duration-default cursor-pointer">
          <ShareIcon className="w-4 h-4 mr-0.5" />
          <span className="text-xs leading-4">{repoItem.forks_count}</span>
        </p>
      </div>
    </div>
  )
}
export default RepoCard
