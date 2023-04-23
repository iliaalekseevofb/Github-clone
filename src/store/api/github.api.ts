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

    // Get user info bu login
    getUserInfo: build.query<any, string>({
      query: (userName: string) => ({
        url: `users/${userName}`
      })
    }),

    // Lists public repositories for the specified user
    getReposByUser: build.query<RepoItem[], string>({
      query: (userName: string) => ({
        url: `users/${userName}/repos`,
        sort: "updated",
        per_page: 10
      })
    }),
  })
})

export const {
  useSearchUsersQuery,
  useLazyGetUserInfoQuery,
  useLazyGetReposByUserQuery
} = githubApi;