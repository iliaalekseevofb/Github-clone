import { NavLink } from 'react-router-dom'
import { type RepoContributor, type RepoItem } from '../../../utils/types'
import SectionTitle from './SectionTitle'

interface ContributorsProps {
  contributorsData: RepoContributor[]
  repoItem: RepoItem
}

const Contributors = ({ contributorsData, repoItem }: ContributorsProps): JSX.Element => {
  return (
    <section className="flex-1">
      <SectionTitle title="Contributors" />
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
      {contributorsData && contributorsData.length > 6 &&
        <a
          href={`${repoItem.html_url}/contributors`}
          className="text-sm text-blue-700 underline"
          target="_blank" rel="noreferrer"
        >
          See all contributors
        </a>
      }
    </section>
  )
}
export default Contributors
