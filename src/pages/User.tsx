import { Outlet } from 'react-router-dom';
import { useState } from "react";
import { useSearchUsersQuery, useLazyGetReposByUserQuery } from "../store/api/github.api";
import { useDebounce } from "../hooks/useDebounce";
import { RepoItem } from "../utils/models";

const User = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const debounced = useDebounce(searchInput);

  const {
    isError: isUsersSearchError,
    isLoading: isUserSearchLoading,
    data: usersData
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  return (
    <div className="bg-white dark:bg-black">
      <div>
        {isUsersSearchError && <p>Error</p>}
        {isUserSearchLoading && <p>Loading...</p>}

        <input
          type="text"
          className="w-96 h-10 border"
          placeholder="Search for GitHub username..."
          value={searchInput}
          onChange={e => {setSearchInput(e.target.value)}}
        />
      </div>

      <Outlet />
    </div>
  )
}

export default User;