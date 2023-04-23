import { useState, useEffect } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useLazyGetUserInfoQuery, useLazyGetReposByUserQuery } from "../store/api/github.api";

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
    if (user == undefined) {
      fetchUserInfo('iliaalekseevofb');
      fetchUserReposInfo('iliaalekseevofb');
    } else {
      fetchUserInfo(user!);
      fetchUserReposInfo(user!);
    }
  }, [user])

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="text-white">
        {user}
      </div>

      <Outlet />
    </div>
  )
}

export default User;