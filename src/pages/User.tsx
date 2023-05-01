import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { BookmarkSquareIcon, BookOpenIcon, CubeIcon, StarIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import { useLazyGetUserInfoQuery, useLazyGetReposByUserQuery } from '../store/api/api'
import { GITHUB_BASE_URL } from '../utils/constants'
import { type InnerNavigationLinkItem } from '../utils/types'
import { Location } from '../utils/enums'
import { InnerNavbar, Profile } from '../components'
import Spinner from '../components/Common/Spinner'
import Error from '../components/Common/Error'

const User = (): JSX.Element => {
  const { user } = useParams<string>()

  const [fetchUserInfo, {
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
    data: userData
  }] = useLazyGetUserInfoQuery()

  const [fetchUserReposInfo, {
    isLoading: isUserReposLoading,
    isError: isUserReposError,
    isSuccess: isUserReposSuccess,
    data: userReposData
  }] = useLazyGetReposByUserQuery()

  useEffect(() => {
    if (user) {
      fetchUserInfo(user)
      fetchUserReposInfo(user)
    } else {
      fetchUserInfo('iliaalekseevofb')
      fetchUserReposInfo('iliaalekseevofb')
    }
  }, [user])

  const navigationLinks: InnerNavigationLinkItem[] = [
    { path: `/${userData?.login}/overview`, text: 'Overview', external: false, icon: <BookOpenIcon /> },
    { path: `/${userData?.login}/repositories`, text: 'Repositories', external: false, icon: <BookmarkSquareIcon /> },
    { path: `${GITHUB_BASE_URL}/${userData?.login}/?tab=projects`, text: 'Projects', external: true, icon: <TableCellsIcon /> },
    { path: `${GITHUB_BASE_URL}/${userData?.login}/?tab=packages`, text: 'Packages', external: true, icon: <CubeIcon /> },
    { path: `${GITHUB_BASE_URL}/${userData?.login}/?tab=stars`, text: 'Stars', external: true, icon: <StarIcon /> }
  ]

  return (
    <div className="mt-6">
      { (isUserLoading || isUserReposLoading) ? <Spinner /> : '' }
      { (isUserError || isUserReposError) ? <Error errorMessage="Something went wrong while fetching user data :(" /> : '' }
      { (isUserSuccess && isUserReposSuccess) ? (
        <div className="w-full h-full">
          {/* For cases when screen size larger than 1024px */}
          <div className="hidden lg:block">
            <InnerNavbar
              location={Location.USER_PAGE}
              navigationLinks={navigationLinks}
            />
            <section className="flex justify-center w-full mt-6 px-4 md:px-6 lg:px-8 duration-default">
              <div className="flex w-full max-w-7xl">
                <Profile userData={userData!} />
                <Outlet context={userReposData} />
              </div>
            </section>
          </div>

          {/* For cases when screen size smaller than 1024px */}
          <div className="block lg:hidden">
            <div className="w-full mt-6 px-4 md:px-6 duration-default">
              <Profile userData={userData!} />
            </div>
            <InnerNavbar
              location={Location.USER_PAGE}
              navigationLinks={navigationLinks}
            />
            <div className="w-full mt-6 px-4 md:px-6 duration-default">
              <Outlet context={ userReposData } />
            </div>
          </div>
        </div>
      ) : '' }
    </div>
  )
}

export default User
