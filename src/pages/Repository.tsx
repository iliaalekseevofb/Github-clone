import {
  CodeBracketIcon,
  EllipsisHorizontalCircleIcon,
  ArrowPathRoundedSquareIcon,
  PlayCircleIcon,
  TableCellsIcon,
  ShieldExclamationIcon,
  ChartBarSquareIcon
} from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  useLazyGetRepoCommitsQuery,
  useLazyGetRepoContributorsQuery,
  useLazyGetRepoLanguagesQuery,
  useLazyGetReposByUserQuery
} from '../store/api/api'
import { type InnerNavigationLinkItem, type RepoItem } from '../utils/types'
import { Location } from '../utils/enums'
import { InnerNavbar } from '../components'
import BreadCrumbs from '../components/Repository/BreadCrumbs'
import Details from '../components/Repository/Details'
import Spinner from '../components/Common/Spinner'
import Error from '../components/Common/Error'

const Repository = (): JSX.Element => {
  const { user, repository } = useParams<string>()
  let currentRepository: RepoItem | undefined,
    navigationLinks: InnerNavigationLinkItem[] | undefined

  const [fetchUserReposInfo, {
    isLoading: isUserReposLoading,
    isError: isUserReposError,
    isSuccess: isUserReposSuccess,
    data: userReposData
  }] = useLazyGetReposByUserQuery()

  const [fetchRepoCommits, {
    isLoading: isRepoCommitsLoading,
    isError: isRepoCommitsError,
    isSuccess: isRepoCommitsSuccess,
    data: repoCommitsData
  }] = useLazyGetRepoCommitsQuery()

  const [fetchRepoLanguages, {
    isLoading: isRepoLanguagesLoading,
    isError: isRepoLanguagesError,
    isSuccess: isRepoLanguagesSuccess,
    data: repoLanguagesData
  }] = useLazyGetRepoLanguagesQuery()

  const [fetchRepoContributors, {
    isLoading: isRepoContributorsLoading,
    isError: isRepoContributorsError,
    isSuccess: isRepoContributorsSuccess,
    data: repoContributorsData
  }] = useLazyGetRepoContributorsQuery()

  useEffect(() => {
    fetchUserReposInfo(user!)
    fetchRepoCommits({ userName: user, repoName: repository })
    fetchRepoLanguages({ userName: user, repoName: repository })
    fetchRepoContributors({ userName: user, repoName: repository })
  }, [])

  currentRepository =
    userReposData?.find((repoItem: RepoItem) => repoItem.name === repository)

  navigationLinks = [
    { path: `/${user}/${repository}`, text: 'Code', external: false, icon: <CodeBracketIcon /> },
    { path: `${currentRepository?.html_url}/issues`, text: 'Issues', external: true, icon: <EllipsisHorizontalCircleIcon /> },
    { path: `${currentRepository?.html_url}/pulls`, text: 'Pull requests', external: true, icon: <ArrowPathRoundedSquareIcon /> },
    { path: `${currentRepository?.html_url}/actions`, text: 'Actions', external: true, icon: <PlayCircleIcon /> },
    { path: `${currentRepository?.html_url}/projects`, text: 'Projects', external: true, icon: <TableCellsIcon /> },
    { path: `${currentRepository?.html_url}/security`, text: 'Security', external: true, icon: <ShieldExclamationIcon /> },
    { path: `${currentRepository?.html_url}/insights`, text: 'Insights', external: true, icon: <ChartBarSquareIcon /> }
  ]

  return (
    <div className="mt-4">
      {(
        isUserReposLoading ||
        isRepoCommitsLoading ||
        isRepoContributorsLoading ||
        isRepoLanguagesLoading
      )
        ? <Spinner />

        : (
            isUserReposError ||
        isRepoCommitsError ||
        isRepoContributorsError ||
        isRepoLanguagesError
          )
            ? <Error errorMessage="Something went wrong while fetching repository data :(" />

            : (
                isUserReposSuccess &&
        isRepoCommitsSuccess &&
        isRepoContributorsSuccess &&
        isRepoLanguagesSuccess
              )
                ? <div className="w-full h-full">
          <BreadCrumbs />
          <InnerNavbar
            location={Location.REPOSITORY_page}
            navigationLinks={navigationLinks}
          />
          <div className="flex items-center w-full mt-4 px-4 md:px-6 lg:px-8 duration-default">
            <Details
              repoItem={currentRepository!}
              commitsData={repoCommitsData!}
              languagesData={repoLanguagesData!}
              contributorsData={repoContributorsData!}
            />
          </div>
        </div>
                : ''}
    </div>
  )
}

export default Repository
