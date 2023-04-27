import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSearchResponse, UserSearchItem, RepoItem, UserDetailsItem } from '../../types/types';

const GITHUB_API_BASE_URL = "https://api.github.com/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_API_BASE_URL
  }),
  endpoints: (build) => ({
    // Find users via name
    searchUsers: build.query<UserSearchItem[], string>({
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
    getUserInfo: build.query<UserDetailsItem, string>({
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
} = api;