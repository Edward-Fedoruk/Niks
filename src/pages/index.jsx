import React from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage/HomePage';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage />
  </div>
);

export default Home;
