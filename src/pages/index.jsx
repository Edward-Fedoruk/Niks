import React from 'react';
import Head from 'next/head';
import Button from '../components/Button/Button';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button text="Services" />
  </div>
);

export default Home;
