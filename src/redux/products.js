import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
  reducerPath: "getBestSeller",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://amazon24.p.rapidapi.com/api/",
  }),
  endpoints: (builder) => ({
    getBestSeller: builder.query({
      query: () => ({
        url: "/bsr/amazon-devices",
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "acf98f86cfmsh1b9ccaec815f035p1feb70jsn5f42e0e56c61",
          "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        },
      }),
    }),
    bestDeals: builder.query({
      query: () => ({
        url: "todaydeals",
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "acf98f86cfmsh1b9ccaec815f035p1feb70jsn5f42e0e56c61",
          "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetBestSellerQuery, useBestDealsQuery } = storeApi;
