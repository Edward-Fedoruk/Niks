import React from 'react';
import Head from 'next/head';
import Circles from '../components/Circles/Circles';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Circles />
  </div>
);

export default Home;
