import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const api = process.env.NEXT_PUBLIC_URL;
// console.log("api data" , api)

export const emptySplitApi = createApi({
    reducerPath: 'emptySplitApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_URL}),
    endpoints: () => ({}),
})

