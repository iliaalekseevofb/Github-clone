import { type RepoCommit, type RepoContributor, type RepoItem, type RepoLanguages } from '../../utils/types'
import { Header, About, Languages, Contributors } from './Card'

const Details = ({
  repoItem,
  commitsData,
  languagesData,
  contributorsData
}: {
  repoItem: RepoItem
  commitsData: RepoCommit[]
  languagesData: RepoLanguages
  contributorsData: RepoContributor[]
}): JSX.Element => {
  return (
    <div className="w-full border border-gray-250 dark:border-gray-300 rounded-md bg-transparent dark:bg-gray-700 overflow-hidden">
      <Header commitsData={ commitsData } />
      <div className="flex flex-col lg:flex-row justify-between gap-y-6 lg:gap-x-10 w-full p-4">
        { repoItem && repoItem.description ? <About repoItemDescription={ repoItem.description } /> : ''}
        { languagesData && (Object.keys(languagesData).length > 0) ? <Languages languagesData={ languagesData } /> : '' }
        { contributorsData && (contributorsData.length > 0)
          ? <Contributors
              contributorsData={ contributorsData }
              repoItem={ repoItem }
            />
          : ''
        }
      </div>
    </div>
  )
}
export default Details
