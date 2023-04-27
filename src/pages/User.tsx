import { useEffect } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useLazyGetUserInfoQuery, useLazyGetReposByUserQuery } from "../store/api/api";
import { MockPhoto } from "../assets";
import Navbar from '../components/User/Navbar';

const User = () => {
  const { user } = useParams<string>();

  const [fetchUserInfo, {
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
    data: userData
  }] = useLazyGetUserInfoQuery();

  const [fetchUserReposInfo, {
    isLoading: isUserReposLoading,
    isError: isUserReposError,
    isSuccess: isUserReposSuccess,
    data: userReposData
  }] = useLazyGetReposByUserQuery();

  useEffect(() => {
    // if (user) {
    //   fetchUserInfo(user);
    //   fetchUserReposInfo(user);
    // } else {
    //   fetchUserInfo('iliaalekseevofb');
    //   fetchUserReposInfo('iliaalekseevofb');
    // }
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
      <section className="w-full flex justify-center mt-4 px-4 md:px-6 lg:px-8 duration-default">
        <div className="w-full max-w-7xl">
          <div className="w-64 min-w-64 lg:w-80 lg:min-w-80 h-64 min-h-64 lg:h-80 lg:min-h-80 -mt-14 mr-4 duration-default">
            <img
              src={userData ? userData.avatar_url : MockPhoto}
              className="rounded-full object-cover border border-gray-300"
              alt="User avatar"
            />
          </div>

          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default User;