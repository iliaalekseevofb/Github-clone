import {RepoItem} from "../../utils/types";
import {LANGUAGES_COLORS} from "../../utils/constants";
import {ShareIcon, StarIcon} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom";

type RepoListItemProps = {
  repoItem: RepoItem
}

const RepoListItem = ({repoItem}: RepoListItemProps) => {
  return (
    <li className="flex w-full justify-between items-start first:pt-0 py-6  border-b border-gray-600">
      <div className="w-2/3">
        <NavLink
          className="w-fit text-xl text-blue-700 hover:underline cursor-pointer"
          to={`/${repoItem.owner.login}/${repoItem.name}`}
        >
          {repoItem.name}
        </NavLink>
        <p className="text-sm text-gray-400">
          {repoItem.description}
        </p>
        <div className="flex items-end mt-2">
          {repoItem.language &&
            <p className="flex items-center mr-2">
              <span className={`relative inline-block w-3 h-3 mr-1 rounded-full ${LANGUAGES_COLORS[repoItem.language?.replace(/ /g,"_")]}`} />
              <span className="text-xs leading-4 text-gray-400">{repoItem.language}</span>
            </p>
          }
          <p className="flex items-center mr-2 text-gray-400 hover:text-blue-700 duration-default cursor-pointer">
            <StarIcon className="w-4 h-4 mr-0.5" />
            <span className="text-xs leading-4">{repoItem.stargazers_count}</span>
          </p>
          <p className="flex items-center text-gray-400 hover:text-blue-700 duration-default cursor-pointer">
            <ShareIcon className="w-4 h-4 mr-0.5" />
            <span className="text-xs leading-4">{repoItem.forks_count}</span>
          </p>
        </div>
      </div>
      <button className="flex items-center px-3 py-1 bg-gray-600 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 rounded-md outline-none duration-default">
        <StarIcon className="w-4 h-4 mr-1 text-gray-400" />
        <span className="text-gray-500 text-sm leading-4">Star</span>
      </button>
    </li>
  )
}
export default RepoListItem
