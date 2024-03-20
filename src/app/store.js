

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
