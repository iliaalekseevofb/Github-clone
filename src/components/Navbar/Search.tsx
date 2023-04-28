import { useState, useEffect } from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import UserCircleIcon from '@heroicons/react/20/solid/UserCircleIcon';
import ArrowUturnLeftIcon from '@heroicons/react/20/solid/ArrowUturnLeftIcon';
import { useSearchUsersQuery } from "../../store/api/api";
import {useDebounce} from "../../hooks/useDebounce";
import {UserSearchItem} from "../../types/types";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const debounced = useDebounce(searchInput);

  const {
    isError: isUsersSearchError,
    isLoading: isUsersSearchLoading,
    data: usersData
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  const handleOnUserClick = (userLogin: string): void => {
    navigate(`/${userLogin}/overview`);
    setIsDropdownVisible(false);
    setSearchInput('');
  }

  useEffect(() => {
    setIsDropdownVisible(debounced.length > 3 && usersData?.length! > 0);
  }, [debounced, usersData])

  return (
    <div className=" ml-4 relative">
      <input
        type="text"
        placeholder="Search for GitHub username..."
        value={searchInput}
        className={`${debounced.length > 3 && usersData?.length! > 0 ? 'w-96' : 'w-64'} duration-default h-8 px-3 border border-gray-300 outline-none ${isDropdownVisible ? 'rounded-t-md' : 'rounded-md'} bg-gray-800 text-sm text-gray-100`}
        onChange={e => setSearchInput(e.target.value)}
      />
      {isDropdownVisible && <ul className="absolute top-8 left-0 right-0 z-10 max-h-72">
        {isUsersSearchLoading && <p className="text-center text-gray-300">Loading...</p>}
        {isUsersSearchError && <p className="text-center text-gray-300">An error occurred while fetching data...</p>}
        {usersData?.map((user: UserSearchItem) => (
          <li
            onClick={() => handleOnUserClick(user.login)}
            key={user.id}
            className="group w-full h-10 px-3 flex justify-between items-center text-gray-200 text-sm bg-gray-800 hover:bg-blue-700 border-x border-b border-gray-300 hover:border-blue-700 last:rounded-b-md cursor-pointer"
          >
            <div className="flex items-center">
              <UserCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-200" />
              <span className="ml-2 text-gray-200">{user.login}</span>
            </div>
            <div className="w-22 h-6 px-2 hidden group-hover:flex items-center text-gray-400 border-gray-400 bg-gray-800 border rounded-md">
              <span className="text-xs">Jump to</span>
              <ArrowUturnLeftIcon className="w-3 h-3 ml-3" />
            </div>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Search