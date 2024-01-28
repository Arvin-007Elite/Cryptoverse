/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./services/cryptoApi";

import App from "./App";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* <ApiProvider api={api}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
