import React from 'react';
import Head from 'next/head';
import PortfolioPage from '../components/PortfolioPage/PortfolioPage';

const Portfolio = () => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PortfolioPage />
  </div>
);

export default Portfolio;
