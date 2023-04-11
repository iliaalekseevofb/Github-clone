import { useState } from "react";
import { useSearchUsersQuery, useLazyGetPublicReposQuery } from "../store/github/githubApi";
import { RepoItem } from "../utils/models";
import { useDebounce } from "../hooks/useDebounce";

const Home = () => {
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

  const [fetchPublicRepos, {
    isLoading: isPublicReposLoading,
    isError: isPublicReposError,
    data: publicReposData
  }] = useLazyGetPublicReposQuery();

  return (
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

      <button onClick={() => fetchPublicRepos()}>
        Fetch repos
      </button>

      <div>
        {publicReposData?.map((repo: RepoItem) => (
          <p>{repo.description}</p>
        ))}
      </div>
    </div>
  )
}

export default Home