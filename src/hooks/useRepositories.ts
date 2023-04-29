import { useTypedSelector } from "./useTypedSelector";

export const useRepositories = () => {
  const { repositories } = useTypedSelector(state => state);

  return repositories;
}