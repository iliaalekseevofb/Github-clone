import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSearchResponse, UserItem, RepoItem } from '../../utils/models';

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/"
  }),
  endpoints: (build) => ({
    // Search users by name
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

    // Get random public repos
    getPublicRepos: build.query<RepoItem[], void>({
      query: () => ({
        url: "/repositories",
      }),
    })
  })
})

export const { useSearchUsersQuery, useLazyGetPublicReposQuery } = githubApi;