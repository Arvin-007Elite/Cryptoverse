/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { api } from './services/cryptoApi'; 

import App from "./App";

// import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>

{/* <ApiProvider api={api}>
    <App />
  </ApiProvider> */}
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
