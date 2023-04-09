import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/"
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<any, string>({
      query: (userName: string) => ({
        url: "search/users",
        params: {
          q: userName,
          per_page: 10
        }
      }),
      transformResponse: (response: any) => response.items
    })
  })
})

export const { useSearchUsersQuery } = githubApi;