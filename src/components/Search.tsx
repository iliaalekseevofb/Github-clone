import { useState, useEffect } from 'react';
import { useSearchUsersQuery } from "../store/api/github.api";
import {UserItem} from "../utils/models";
import {useDebounce} from "../hooks/useDebounce";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const debounced = useDebounce(searchInput);
  const {
    isError: isUsersSearchError,
    isLoading: isUserSearchLoading,
    data: usersData
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  useEffect(() => {
    setIsDropdownVisible(debounced.length > 3 && usersData?.length! > 0);
  }, [debounced, usersData])

  return (
    <div className="relative w-72">
      <input
        type="text"
        placeholder="Search for GitHub username..."
        className={`w-full h-8 ml-4 px-3 border border-gray-300 outline-none ${isDropdownVisible ? 'rounded-t-md' : 'rounded-md'} bg-gray-800 text-sm text-gray-100`}
        onChange={e => setSearchInput(e.target.value)}
      />
      {isDropdownVisible && <ul className="absolute top-8 left-0 right-0 max-h-72 overflow-y-scroll">
        {isUserSearchLoading && <p className="text-center text-gray-300">Loading...</p>}
        {usersData?.map((user: UserItem) => (
          <li>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Search