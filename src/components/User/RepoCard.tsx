import { RepoItem } from "../../types/types";
import { BookmarkSquareIcon, StarIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";
import { LANGUAGES_COLORS } from "../../utils/constants";

type RepoCardProps = {
  RepoItem: RepoItem,
  languageColorClass: string
}

const RepoCard = (props: RepoCardProps) => {
  return (
    <div className="w-full border border-gray-300 p-4 rounded-md background-transparent">
      <div className="flex justify-start items-center">
        <span className="mr-2 text-gray-400">
          <BookmarkSquareIcon className="w-5 h-5" />
        </span>
        <NavLink
          className="font-semibold text-sm text-blue-700 text-ellipsis overflow-hidden"
          to={`/${props.RepoItem.owner.login}/${props.RepoItem.name}`}
        >
          {props.RepoItem.name}
        </NavLink>
      </div>
      <p className="mt-2 text-xs text-gray-400 line-clamp-5">
        {props.RepoItem.description}
      </p>
      <div className="flex items-end mt-2">
        <p className="flex items-center mr-2">
          <span className={`relative inline-block w-3 h-3 mr-1 rounded-full ${LANGUAGES_COLORS[props.RepoItem.language?.replace(/ /g,"_")]}`} />
          <span className="text-xs leading-4 text-gray-400">{props.RepoItem.language}</span>
        </p>
        <p className="flex items-center text-gray-400 hover:text-blue-700 duration-default cursor-pointer">
          <StarIcon className="w-4 h-4 mr-0.5" />
          <span className="text-xs leading-4">{props.RepoItem.stargazers_count}</span>
        </p>
      </div>
    </div>
  )
}
export default RepoCard
