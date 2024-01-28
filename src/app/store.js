/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
// import { configureStore } from "@reduxjs/toolkit";

// import { cryptoApi } from "../services/cryptoApi";
// import { cryptoNewsApi } from "../services/cryptoNewsApi";

// export default configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,
//     [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
//   },
// });
import { api } from "../services/cryptoApi";
import { configureStore } from "@reduxjs/toolkit";

import { cryptoNewsApi } from "../services/cryptoNewsApi";


export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware , cryptoNewsApi.middleware),
});

// export default store;
