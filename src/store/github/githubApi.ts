import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSearchResponse, UserItem, RepoItem } from '../../utils/models';

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/"
  }),
  endpoints: (build) => ({
    // Find users via name
    searchUsers: build.query<UserItem[], string>({
      query: (userName: string) => ({
        url: "search/users",
        params: {
          q: userName,
          per_page: 10
        }
      }),
      transformResponse: (response: UserSearchResponse) => response.items
    }),

    // Lists public repositories for the specified user
    getReposByUser: build.query<any, string>({
      query: (userName: string) => ({
        url: `users/${userName}/repos`,
        sort: "updated",
        per_page: 10
      })
    }),

    // Lists all public repositories in the order that they were created
    getPublicRepos: build.query<RepoItem[], void>({
      query: () => ({
        url: "repositories",
      }),
    })
  })
})

export const { useSearchUsersQuery, useLazyGetPublicReposQuery } = githubApi;