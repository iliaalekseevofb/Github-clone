import { NavLink } from "react-router-dom";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { CommitAuthor, RepoCommit } from "../../../utils/types";
import HeaderLink from "./HeaderLink";

const Header = ({ commitsData }: { commitsData: RepoCommit[] }) => {
  // Save last commit to a variable, so it was easier to use
  const lastCommit: RepoCommit = commitsData[0];
  // If last commit was made by organization, we need to use committer
  const commitAuthor: CommitAuthor = lastCommit.author ? lastCommit.author : lastCommit.committer;

  // Change date to correct form
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short' });
  const lastCommitDate: Date = new Date(lastCommit.commit.committer.date);
  const lastCommitMonth: string = formatter.format(lastCommitDate);

  return (
    <div className="flex justify-between items-center gap-x-4 w-full h-12 px-4 bg-blue-900 border-b border-gray-300">
      <div className="flex items-center h-full truncate">
        <div className="flex items-center mr-4">
          <NavLink className="w-8 h-8 rounded-full" to={`/${commitAuthor?.login}`}>
            <img
              src={commitAuthor?.avatar_url}
              className="w-auto h-full rounded-full object-cover"
              alt={commitAuthor?.login}
            />
          </NavLink>
          <NavLink className="ml-4 text-sm text-gray-100 hover:underline" to={`/${commitAuthor?.login}`}>
            { commitAuthor?.login }
          </NavLink>
        </div>
        <HeaderLink
          url={ lastCommit.html_url }
          text={ lastCommit.commit.message }
          initial_color="white"
        />
      </div>
      <div className="h-full flex items-center gap-x-4">
        <HeaderLink
          url={ lastCommit.html_url }
          text={ lastCommit.sha }
          width="100px"
          icon={lastCommit.commit.verification.verified && <CheckIcon className="w-4 h-4 mr-1 text-green-500" />}
        />
        <HeaderLink
          url={ lastCommit.html_url }
          text={`on ${lastCommitDate.getUTCDate()}, ${lastCommitMonth} ${lastCommitDate.getFullYear()}`}
        />
        <HeaderLink
          url={ lastCommit.html_url }
          text={`${commitsData.length} commits`}
          icon={<ClockIcon className="w-4 h-4 mr-1" />}
        />
      </div>
    </div>
  )
}
export default Header
