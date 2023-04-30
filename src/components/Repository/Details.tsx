import { RepoCommit, RepoContributor, RepoItem, RepoLanguages } from "../../utils/types";
import Header from "./Card/Header";
import About from "./Card/About";
import Languages from "./Card/Languages";
import Contributors from "./Card/Contributors";

const Details = ({
  repoItem,
  commitsData,
  languagesData,
  contributorsData
}: {
  repoItem: RepoItem,
  commitsData: RepoCommit[],
  languagesData: RepoLanguages,
  contributorsData: RepoContributor[]
}) => {
  return (
    <div className="w-full border border-gray-300 rounded-md bg-gray-700 overflow-hidden">
      <Header commitsData={ commitsData } />
      <div className="flex justify-between gap-x-6 w-full p-4">
        <About repoItemDescription={ repoItem.description } />
        <Languages languagesData={ languagesData } />
        <Contributors
          contributorsData={ contributorsData }
          repoItem={ repoItem }
        />
      </div>
    </div>
  )
}
export default Details
