import { useEffect } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useLazyGetUserInfoQuery, useLazyGetReposByUserQuery } from "../store/api/api";
import { UsersIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/User/Navbar';

const User = () => {
  const { user } = useParams<string>();

  const [fetchUserInfo, {
    isLoading: isUserLoading,
    isError: isUserError,
    data: userData
  }] = useLazyGetUserInfoQuery();

  const [fetchUserReposInfo, {
    isLoading: isUserReposLoading,
    isError: isUserReposError,
    data: userReposData
  }] = useLazyGetReposByUserQuery();

  useEffect(() => {
    if (user) {
      fetchUserInfo(user);
      fetchUserReposInfo(user);
    } else {
      fetchUserInfo('iliaalekseevofb');
      fetchUserReposInfo('iliaalekseevofb');
    }
  }, [user])

  if (isUserLoading || isUserReposLoading) {
    return (
      <div className="w-full h-full">
        <span className="spinner"></span>
      </div>
    )
  }

  if (isUserError || isUserReposError) {
    return (
      <div className="w-full h-full">
        An error occurred while fetching
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar userLogin={userData ? userData.login : 'iliaalekseevofb'} />
      <section className="w-full flex justify-center mt-6 px-4 md:px-6 lg:px-8 duration-default">
        <div className="flex w-full max-w-7xl">
          <div className="shrink-0 w-64 min-w-64 lg:w-72 lg:min-w-72 -mt-16 mr-6 duration-default">
            <img
              src={userData?.avatar_url}
              className="h-64 min-h-64 lg:h-72 lg:min-h-72 rounded-full object-cover duration-default"
              alt="User avatar"
            />
            <div className='w-full py-4'>
              <h2 className="text-2xl text-gray-100">{userData?.name}</h2>
              <h3 className="text-xl text-gray-400">{userData?.login}</h3>
            </div>
            <p className="text-base text-gray-100">{userData?.bio}</p>
            <div className="mt-4 flex items-center text-gray-400 text-sm">
              <p className="group flex items-center hover:text-blue-700 cursor-pointer duration-default">
                <UsersIcon className="w-4 h-4 mr-1" />
                <span>
                  <span className="text-gray-100 group-hover:text-blue-700 duration-default">{userData?.followers}</span>
                  <span className="ml-1">{userData?.followers === 1 ? 'follower' : 'followers'}</span>
                </span>
              </p>
              <span className="mx-2 text-gray-100">·</span>
              <p className="group hover:text-blue-700 cursor-pointer">
                <span className="text-gray-100 group-hover:text-blue-700 duration-default">{userData?.following}</span>
                <span className="ml-1">following</span>
              </p>
            </div>
          </div>

          <Outlet context={ userReposData } />
        </div>
      </section>
    </div>
  )
}

export default User;