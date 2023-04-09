import { useSearchUsersQuery } from "../store/github/githubApi"

const Home = () => {
  const { 
    isError: isUsersSearchError,
    isLoading: isUserSearchLoading,
    data: usersData
  } = useSearchUsersQuery('ilia');

  return (
    <div>
      {isUsersSearchError && <p>Error</p>}
      {isUserSearchLoading && <p>Loading...</p>}
      <div>
        {usersData?.map((user: any) => (
          <p key={user.id}>{user.id}</p>
        ))}
      </div>
    </div>
  )
}

export default Home