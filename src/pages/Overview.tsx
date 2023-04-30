import { useOutletContext } from "react-router-dom";
import RepoCard from "../components/Overview/RepoCard";
import {RepoItem} from "../utils/types";

const Overview = () => {
  const userReposData: RepoItem[] = useOutletContext();

  return (
    <div className="w-full">
      <h3 className="text-base text-gray-100">Random repositories</h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2" >
        {userReposData?.slice(0, 6).map((repoItem: RepoItem) => (
          <RepoCard
            key={repoItem.name}
            languageColorClass={`bg-${repoItem.language}`}
            RepoItem={repoItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Overview