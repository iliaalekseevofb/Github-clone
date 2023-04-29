import {
  CodeBracketIcon,
  EllipsisHorizontalCircleIcon,
  ArrowPathRoundedSquareIcon,
  PlayCircleIcon,
  TableCellsIcon,
  ShieldExclamationIcon,
  ChartBarSquareIcon
} from "@heroicons/react/24/outline";
import { InnerNavbar } from "../components";
import { InnerNavigationLinkItem, Location, RepoItem } from "../types/types";
import { useRepositories } from "../hooks/useRepositories"
import { useParams } from "react-router-dom";
import { useLazyGetReposByUserQuery } from "../store/api/api";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";

const Repository = () => {
  const { user, repository } = useParams<string>();
  const { setRepositories } = useActions();
  const repositories = useRepositories();
  let currentRepository: RepoItem | undefined,
    navigationLinks: InnerNavigationLinkItem[] | undefined;

  const [fetchUserReposInfo, {
    isLoading: isUserReposLoading,
    isError: isUserReposError,
    isSuccess: isUserReposSuccess,
    data: userReposData
  }] = useLazyGetReposByUserQuery();

  useEffect(() => {
    fetchUserReposInfo(user!);
  }, []);

  useEffect(() => {
    setRepositories(userReposData!);
  }, [userReposData]);

  currentRepository =
    repositories.find((repoItem: RepoItem) => repoItem.name === repository);

  navigationLinks = [
    {path: `/${user}/${repository}`, text: 'Code', external: false, icon: <CodeBracketIcon />},
    {path: `${currentRepository?.html_url}/issues`, text: 'Issues', external: true, icon: <EllipsisHorizontalCircleIcon />},
    {path: `${currentRepository?.html_url}/pulls`, text: 'Pull requests', external: true, icon: <ArrowPathRoundedSquareIcon />},
    {path: `${currentRepository?.html_url}/actions`, text: 'Actions', external: true, icon: <PlayCircleIcon />},
    {path: `${currentRepository?.html_url}/projects`, text: 'Projects', external: true, icon: <TableCellsIcon />},
    {path: `${currentRepository?.html_url}/security`, text: 'Security', external: true, icon: <ShieldExclamationIcon />},
    {path: `${currentRepository?.html_url}/insights`, text: 'Insights', external: true, icon: <ChartBarSquareIcon />},
  ]

  return (
    <div>
      <InnerNavbar
        location={Location.REPOSITORY_page}
        navigationLinks={navigationLinks!}
      />
    </div>
  )
}

export default Repository