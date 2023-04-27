import { useEffect } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useLazyGetUserInfoQuery, useLazyGetReposByUserQuery } from "../store/api/api";
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
      <div>
        <img src={userData?.avatar_url} alt="User avatar" />
      </div>

      <Outlet />
    </div>
  )
}

export default User;