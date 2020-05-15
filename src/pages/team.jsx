import React from 'react';
import Head from 'next/head';
import TeamPage from '../components/TeamPage/TeamPage';

const Team = () => (
  <div className="container">
    <Head>
      <title>Team</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TeamPage />
  </div>
);

export default Team;
