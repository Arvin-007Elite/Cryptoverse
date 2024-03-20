/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loader from "./Loader";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data, isLoading } = useGetCryptosQuery(100);

  // Simulate a weak network connection message
  const isNetworkWeak = true;

  if (isNetworkWeak) {
    return (
      <div>
        <div>Your network connection is weak. Unable to load news.</div>
        <Loader />
      </div>
    );
  }

  // Always display the loader
  return <Loader />;
};

export default News;




