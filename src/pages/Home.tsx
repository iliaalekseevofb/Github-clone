import { useSearchUsersQuery, useLazyGetPublicReposQuery } from "../store/github/githubApi";
import { RepoItem } from "../utils/models";

const Home = () => {
  // const { 
  //   isError: isUsersSearchError,
  //   isLoading: isUserSearchLoading,
  //   data: usersData
  // } = useSearchUsersQuery('ilia');

  const [fetchPublicRepos, {
    isLoading: isPublicReposLoading,
    isError: isPublicReposError,
    data: publicReposData
  }] = useLazyGetPublicReposQuery();

  return (
    <div>
      {/* {isUsersSearchError && <p>Error</p>}
      {isUserSearchLoading && <p>Loading...</p>} */}
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