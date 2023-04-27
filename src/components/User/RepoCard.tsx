import { RepoItem } from "../../types/types";
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";

const RepoCard = (props: RepoItem) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md background-transparent">
      <div>
        <span className="w-6 h-6 mr-2 text-gray-400">
          <BookmarkSquareIcon />
        </span>
        <NavLink to={`${props.owner.login}/${props.name}`}>
          {props.name}
        </NavLink>
      </div>
      <p>{props.description}</p>
      <div>

      </div>
    </div>
  )
}
export default RepoCard
