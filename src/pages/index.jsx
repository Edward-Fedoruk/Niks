import React from 'react';
import Head from 'next/head';
import HomeTitle from '../components/HomeTitle/HomeTitle';
import HomeSubtitle from '../components/HomeSubtitle/HomeSubtitle';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeTitle />
    <HomeSubtitle />
  </div>
);

export default Home;
