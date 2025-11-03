import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { GetStatsReq, GetStatsRes } from "./_declarations/logger"

export const loggerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
    }),
    tagTypes: ['Stats'],
    endpoints: (builder) => ({
        getStats: builder.query<GetStatsRes, GetStatsReq>(
            {
                providesTags: ['Stats'],
                query: () => 'stats/'
            }
        )
    })
})
export const {
    useGetStatsQuery
} = loggerApi
