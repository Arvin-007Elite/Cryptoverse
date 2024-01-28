import React from "react";
import {  Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        {/* <Layout> */}
          <div className="routes">
            <Routes>
              <Route exact path="/">
              {<Homepage />}
              </Route>

              <Route exact path="/exchanges">
                <Exchanges />
              </Route>

              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>

              <Route exact path="/crypto/:coinID">
                <CryptoDetails />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Routes>
          </div>
        {/* </Layout> */}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;




is this code is crct with the below code , if any  mistakes  tell that