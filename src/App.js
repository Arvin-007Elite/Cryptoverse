/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// import ReactDOM from "react-dom";
// import Home from './Home';

// OG- CODE
// import { Route, Link, Switch, Routes } from "react-router-dom";
// import React from "react";

// import { Layout, Typography, Space } from "antd";

// import {
//   Navbar,
//   Exchanges,
//   Homepage,
//   Cryptocurrencies,
//   News,
//   CryptoDetails,
// } from "./components";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="app">
//       <div className="navbar">
//         <Navbar />
//       </div>

//       <div className="main">
//         <Layout>
//           <div className="routes">
//             <Routes>
//               <Route exact path="/" component={Homepage} />
//               <Route exact path="/exchanges" component={Exchanges} />
//               <Route
//                 exact
//                 path="/cryptocurrencies"
//                 component={Cryptocurrencies}
//               />
//               <Route exact path="/crypto/:coinId" component={CryptoDetails} />
//               <Route exact path="/news" component={News} />
//             </Routes>
//           </div>
//         </Layout>

//         <div className="footer">
//           <Typography.Title
//             level={5}
//             style={{ color: "white", textAlign: "center" }}
//           >
//             Copyright © 2021
//             <Link to="/">Cryptoverse Inc.</Link> <br />
//             All Rights Reserved.
//           </Typography.Title>
//           <Space>
//             <Link to="/">Home</Link>
//             <Link to="/exchanges">Exchanges</Link>
//             <Link to="/news">News</Link>
//           </Space>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route ,Link} from "react-router-dom";
import { Typography, Layout, Space} from "antd";
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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto-details" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      
      <div className="footer">
         <div className="footer-links">
          <Link to="/">Home</Link> <br />
          <Link to="/exchanges">Exchanges</Link>  <br />
          <Link to="/news">News</Link>
          </div>

        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title> 
        
       
    
          
          </div>
      </div>
    </div>
  );
};

export default App;
