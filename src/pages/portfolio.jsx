import React from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import TeamMember from '../components/TeamMember/TeamMember';

const Portfolio = () => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* DEMO, THIS PAGE SHOULD BE DELETED */}
    <div style={{ backgroundColor: '#233050', height: '100vh' }}>
      <ProjectCard url="project1.png" name="“apphooks”" description="Web App that provides support for server-side development with hooks" />
      <div style={{ marginTop: '50px' }}>
        <TeamMember name="Eduard Sobotnyk" avatarUrl="eduardsobotnyk.png" facebookLogin="eduardsobotnyk" instagramLogin="edj56" position="Backend" />
      </div>
    </div>
  </div>
);

export default Portfolio;
