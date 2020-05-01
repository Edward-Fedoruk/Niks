import React from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Portfolio = () => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* DEMO, THIS PAGE SHOULD BE DELETED */}
    <div style={{ backgroundColor: '#233050', height: '100vh' }}>
      <ProjectCard url="project1.png" name="“apphooks”" description="Web App that provides support for server-side development with hooks" />
    </div>
  </div>
);

export default Portfolio;
