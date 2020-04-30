import React from 'react';
import Head from 'next/head';
import HomeTitle from '../components/HomeTitle/HomeTitle';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeTitle />
  </div>
);

export default Home;
