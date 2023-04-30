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
      <div className="flex flex-col lg:flex-row justify-between gap-y-6 lg:gap-x-10 w-full p-4">
        { repoItem && repoItem.description ? <About repoItemDescription={ repoItem.description } /> : ''}
        { languagesData && Object.keys(languagesData).length ? <Languages languagesData={ languagesData } /> : '' }
        { contributorsData && contributorsData.length
          ? <Contributors
              contributorsData={ contributorsData }
              repoItem={ repoItem }
            />
          : ''
        }
      </div>
    </div>
  )
}
export default Details
