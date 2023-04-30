import { useOutletContext } from "react-router-dom";
import { RepoItem } from "../utils/types";
import RepoListItem from "../components/Repositories/RepoListItem";

const Repositories = () => {
  const userReposData: RepoItem[] = useOutletContext();

  return (
    <div className="w-full">
      <ul className="w-full">
        {userReposData?.map((repoItem: RepoItem) => (
          <RepoListItem key={repoItem.full_name} repoItem={repoItem} />
        ))}
      </ul>
    </div>
  )
}

export default Repositories