import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BestSellerApi = createApi({
  reducerPath: "getBestSeller",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://amazon24.p.rapidapi.com/api/bsr/amazon-devices",
  }),
  endpoints: (builder) => ({
    getBestSeller: builder.query({
      query: () => ({
        url: 'https://amazon24.p.rapidapi.com/api/bsr/amazon-devices',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'acf98f86cfmsh1b9ccaec815f035p1feb70jsn5f42e0e56c61',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
      })
    }),
  }),
});

export default BestSellerApi;

export const { useGetBestSellerQuery } = BestSellerApi;


