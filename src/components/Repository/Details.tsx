import {RepoCommits, RepoItem} from "../../utils/types";
import {NavLink, useParams} from "react-router-dom";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";

const Details = ({ repoItem, commitsData }: { repoItem: RepoItem, commitsData: RepoCommits[] }) => {
  const { user} = useParams<string>();
  const lastCommit = commitsData[0];

  const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

  const lastCommitDate = new Date(lastCommit.commit.committer.date);
  const lastCommitMonth = formatter.format(lastCommitDate);

  return (
    <div className="w-full border border-gray-300 rounded-md bg-gray-700 overflow-hidden">
      <div className="flex items-center w-full h-12 px-4 bg-blue-900 border-b border-gray-300">
        <div className="flex items-center">
          <NavLink className="w-8 h-8 rounded-full" to={`/${lastCommit.author.login}`}>
            <img
              src={lastCommit.author.avatar_url}
              className="w-full h-full rounded-full  object-cover"
              alt={lastCommit.author.login}
            />
          </NavLink>
          <NavLink className="mx-4 text-sm text-gray-100 hover:underline" to={`/${lastCommit.author.login}`}>
            { lastCommit.author.login }
          </NavLink>
        </div>
        <a
          className="text-sm text-gray-100 hover:text-blue-700 hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
          href={ lastCommit.html_url }
          target="_blank"
        >
          { lastCommit.commit.message }
        </a>
        <div className="mx-4 flex items-center">
          {lastCommit.commit.verification.verified &&
            <CheckIcon className="w-4 h-4 mr-1 text-green-500" />
          }
          <a
            className="w-20 text-sm text-gray-400 hover:text-blue-700 hover:underline text-ellipsis overflow-hidden"
            href={ lastCommit.html_url }
            target="_blank"
          >
            {lastCommit.sha}
          </a>
        </div>
        <a
          className="text-sm text-gray-400 hover:text-blue-700 hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
          href={ lastCommit.html_url }
          target="_blank"
        >
          on { lastCommitDate.getUTCDate() }, { lastCommitMonth } { lastCommitDate.getFullYear() }
        </a>
        <div className="mx-4 flex items-center group">
          <ClockIcon className="w-4 h-4 mr-1 text-gray-400 group-hover:text-blue-700" />
          <a
            className="text-sm text-gray-400 hover:text-blue-700 hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
            href={ lastCommit.html_url }
            target="_blank"
          >
            { commitsData.length } commits
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-4">
        <section className="flex-1">
          <h3 className="font-semibold text-base text-gray-100">About</h3>
          <p className="text-sm text-gray-400">{ repoItem.description }</p>
        </section>
        <section className="flex-1">
          <h3 className="font-semibold text-base text-gray-100">About</h3>

        </section>
        <section className="flex-1">

        </section>
      </div>
    </div>
  )
}
export default Details
