import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoItem } from "../../types/types";

const initialState: RepoItem[] = [];
export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: initialState,
  reducers: {
    setRepositories: (state, { payload: userRepositories }: PayloadAction<RepoItem[]>) => {
      if (userRepositories) {
        userRepositories.forEach((repo: RepoItem) => {
          if (!state.some(r => r.name === repo.name)) {
            state.push(repo);
          }
        });
      }
    },
  }
})

export const { actions, reducer } = repositoriesSlice;