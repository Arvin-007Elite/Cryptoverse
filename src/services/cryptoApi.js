/* eslint-disable no-unused-vars */
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Note: Change v1 to v2 on rapid api

// const cryptoApiHeaders = {
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//   // "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
//   "x-rapidapi-key": "48a17338a7msh7cca37bbe19e935p1187c5jsn29088ea66458",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '48a17338a7msh7cca37bbe19e935p1187c5jsn29088ea66458',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }), // before only beaseUrl was there
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     }),

//     getCryptoDetails: builder.query({
//       query: (coinId) => createRequest(`/coin/${coinId}`),
//     }),

//     // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
//     getCryptoHistory: builder.query({
//       query: ({ coinId, timeperiod }) =>
//         createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
//     }),

//     // Note: To access this endpoint you need premium plan
//     getExchanges: builder.query({
//       query: () => createRequest("/exchanges"),
//     }),
//   }),
// });

// export const {
//   useGetCryptosQuery,
//   useGetCryptoDetailsQuery,
//   useGetExchangesQuery,
//   useGetCryptoHistoryQuery,
// } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
// headers: {
//     'X-RapidAPI-Key': '48a17338a7msh7cca37bbe19e935p1187c5jsn29088ea66458',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

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
      query: ({ coinId,timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`),

      

    })
  }),
});

export const { useGetCryptosQuery,useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = api;

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '48a17338a7msh7cca37bbe19e935p1187c5jsn29088ea66458',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
