
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "48a17338a7msh7cca37bbe19e935p1187c5jsn29088ea66458",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const api = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
     
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getExchanges: builder.query({
     
      query: () => createRequest(`/exchanges`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),

      

    }),
    getCryptoHistory: builder.query({
      query: ({ coinId,timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),

      

    })
  }),
});

export const { useGetCryptosQuery,useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = api;



