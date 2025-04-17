import { emptySplitApi } from "./emptySplitApi"


const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
})

export const { useGetProductsQuery } = extendedApi


