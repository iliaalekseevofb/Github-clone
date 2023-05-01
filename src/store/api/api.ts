import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GITHUB_API_BASE_URL } from '../../utils/constants'
import {
  type UserSearchResponse,
  type UserSearchItem,
  type RepoItem,
  type UserDetailsItem,
  type RepoCommit,
  type RepoLanguages, type RepoContributor
} from '../../utils/types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_API_BASE_URL
  }),
  endpoints: (build) => ({
    // Find users via name
    searchUsers: build.query<UserSearchItem[], string>({
      query: (userName: string) => ({
        url: '/search/users',
        params: {
          q: userName,
          per_page: 10
        }
      }),
      transformResponse: (response: UserSearchResponse) => response.items
    }),

    // Get user info by login
    getUserInfo: build.query<UserDetailsItem, string>({
      query: (userName: string) => ({
        url: `/users/${userName}`
      })
    }),

    // Lists public repositories for the specified user
    getReposByUser: build.query<RepoItem[], string>({
      query: (userName: string) => ({
        url: `/users/${userName}/repos`,
        sort: 'updated',
        per_page: 10
      })
    }),

    // Get repository commits
    getRepoCommits: build.query<RepoCommit[], object>({
      query: ({ userName, repoName }: { userName: string, repoName: string }) => ({
        url: `/repos/${userName}/${repoName}/commits`,
        per_page: 10
      })
    }),

    // Get repository languages
    getRepoLanguages: build.query<RepoLanguages, object>({
      query: ({ userName, repoName }: { userName: string, repoName: string }) => ({
        url: `/repos/${userName}/${repoName}/languages`
      })
    }),

    // Get repository contributors
    getRepoContributors: build.query<RepoContributor[], object>({
      query: ({ userName, repoName }: { userName: string, repoName: string }) => ({
        url: `/repos/${userName}/${repoName}/contributors`,
        per_page: 10
      })
    })
  })
})

export const {
  useSearchUsersQuery,
  useLazyGetUserInfoQuery,
  useLazyGetReposByUserQuery,
  useLazyGetRepoCommitsQuery,
  useLazyGetRepoLanguagesQuery,
  useLazyGetRepoContributorsQuery
} = api
