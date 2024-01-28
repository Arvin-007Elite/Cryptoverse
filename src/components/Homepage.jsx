/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import React from "react";
// import millify from "millify";
// import { Typography, Row, Col, Statistic } from "antd";
// import { Link } from "react-router-dom";

// import { useGetCryptosQuery } from "../services/cryptoApi";
// import Cryptocurrencies from "./Cryptocurrencies";
// import News from "./News";
// import Loader from './Loader';

// const { Title } = Typography;

// const Homepage = () => {
//   const { data, isFetching } = useGetCryptosQuery();
//   const globalStats = data?.data?.stats;
//   console.log(data);

//   if (isFetching) return "Loading...";

//   return (
//     <>
//       <Title level={2} className="heading">
//         Global Crypto Stats
//       </Title>
//       <Row gutter={[32, 32]}>
//         <Col span={12}>
//           <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Exchanges"
//             value={millify(globalStats.totalExchanges)}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Market Cap:"
//             value={`$${millify(globalStats.totalMarketCap)}`}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total 24h Volume"
//             value={`$${millify(globalStats.total24hVolume)}`}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Markets"
//             value={millify(globalStats.totalMarkets)}
//           />
//         </Col>
//       </Row>
//       <div className="home-heading-container">
//         <Title level={2} className="home-title">
//           Top 10 Cryptos In The World
//         </Title>
//         <Title level={3} className="show-more">
//           <Link to="/cryptocurrencies">Show more</Link>
//         </Title>
//       </div>
//       <Cryptocurrencies simplified />
//       <div className="home-heading-container">
//         <Title level={2} className="home-title">
//           Latest Crypto News
//         </Title>
//         <Title level={3}>
//           <Link to="/news">Show more</Link>
//         </Title>
//       </div>
//       <News simplified />
//     </>
//   );
// };

// export default Homepage;

import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useDispatch } from "react-redux";
import Loader from './Loader';
const { Title } = Typography;

const Homepage = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats || {} ;

  // console.log(data);

  if (isFetching) {
    return <Loader />
  }

  // Assuming 'data' contains the relevant information
  //   const totalCryptocurrencies = data?.data?.coins?.length || 0;
  //   const totalExchanges = data?.data?.exchanges?.length || 0;
  //   const totalMarketCap = millify(data?.data?.stats?.totalMarketCap || 0);
  // const total24hVolume = millify(data?.data?.stats?.total24hVolume || 0);

  return (
    <>
      <Title level={3} className="heading">
        {" "}
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={5} className="show-more">
          {" "}
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          {" "}
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
