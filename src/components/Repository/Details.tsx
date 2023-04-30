import {NavLink, useParams} from "react-router-dom";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";
import {RepoCommit, RepoContributor, RepoItem, RepoLanguages} from "../../utils/types";
import {LANGUAGES_COLORS} from "../../utils/constants";

const Details = ({
    repoItem,
    commitsData,
    languagesData,
    contributorsData
  }: {
    repoItem: RepoItem,
    commitsData: RepoCommit[],
    languagesData: RepoLanguages,
    contributorsData: RepoContributor[]
  }) => {
  let languagesSum: number = 0,
    languagesPercents: RepoLanguages = {};

  const { user} = useParams<string>();
  const lastCommit: RepoCommit = commitsData[0];

  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short' });

  const lastCommitDate: Date = new Date(lastCommit.commit.committer.date);
  const lastCommitMonth: string = formatter.format(lastCommitDate);

  if (languagesData) {
    languagesSum = Object.values(languagesData).reduce((a, b) => a + b, 0);
    Object.keys(languagesData).map((lang: string): void => {
      const languagePercent: number = Number(((languagesData[lang] / languagesSum) * 100).toFixed(1));
      languagesPercents = {...languagesPercents, ...{ [lang]: languagePercent }};
    })
  }

  return (
    <div className="w-full border border-gray-300 rounded-md bg-gray-700 overflow-hidden">
      <div className="flex items-center w-full h-12 px-4 bg-blue-900 border-b border-gray-300">
        <div className="flex items-center">
          <NavLink className="w-8 h-8 rounded-full" to={`/${lastCommit.author ? lastCommit.author.login : lastCommit.committer.login}`}>
            <img
              src={lastCommit.author ? lastCommit.author.avatar_url : lastCommit.committer.avatar_url}
              className="w-full h-full rounded-full object-cover"
              alt={lastCommit.author ? lastCommit.author.login : lastCommit.committer.login}
            />
          </NavLink>
          <NavLink className="mx-4 text-sm text-gray-100 hover:underline" to={`/${lastCommit.author ? lastCommit.author.login : lastCommit.committer.login}`}>
            { lastCommit.author ? lastCommit.author.login : lastCommit.committer.login }
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
        <div className="group mx-4 flex items-center cursor-pointer">
          <ClockIcon className="w-4 h-4 mr-1 text-gray-400 group-hover:text-blue-700" />
          <a
            className="text-sm text-gray-400 group-hover:text-blue-700 group-hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
            href={ lastCommit.html_url }
            target="_blank"
          >
            { commitsData.length } commits
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-x-6 w-full p-4">
        <section className="flex-1">
          <h3 className="font-semibold text-base text-gray-100">About</h3>
          <p className="mt-4 text-sm text-gray-400">{ repoItem.description }</p>
        </section>
        <section className="flex-1">
          <h3 className="font-semibold text-base text-gray-100">Languages</h3>
          <div className="w-full flex items-center mt-4 rounded-md overflow-hidden">
            {Object.keys(languagesPercents).map((lang: string) => (
              <span
                key={lang}
                style={{ width: `${languagesPercents[lang]}%` }}
                className={`relative inline-block h-2 ${LANGUAGES_COLORS[lang.replace(/ /g,"_")]}`}
              />
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-4">
            {Object.keys(languagesPercents).map((lang: string) => (
              <div key={lang} className="group flex items-center text-sm cursor-pointer">
                <span
                  className={`relative inline-block w-3 h-3 mr-2 rounded-full ${LANGUAGES_COLORS[lang.replace(/ /g,"_")]}`}
                />
                <span className="mr-1 text-gray-100 group-hover:text-blue-700">{lang}:</span>
                <span className="text-gray-400 group-hover:text-blue-700">{languagesPercents[lang]}%</span>
              </div>
            ))}
          </div>
        </section>
        <section className="flex-1">
          <h3 className="font-semibold text-base text-gray-100">Contributors</h3>
          <div className="flex items-center mt-4 mb-2">
            {contributorsData?.slice(0, 6).map((contributor) => (
              <NavLink key={contributor.login} className="w-8 h-8 rounded-full mr-2" to={`/${contributor.login}/overview`}>
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
              </NavLink>
            ))}
          </div>
          {contributorsData.length > 6 &&
            <a
              href={`${repoItem.html_url}/contributors`}
              className="text-sm text-blue-700 underline"
            >
              See all contributors
            </a>
          }
        </section>
      </div>
    </div>
  )
}
export default Details
