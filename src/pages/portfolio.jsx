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
    <div style={{ backgroundColor: '#233050', minHeight: '100vh' }}>
      <ProjectCard url="project1.png" name="“apphooks”" description="Web App that provides support for server-side development with hooks" />
      <div style={{ marginTop: '50px' }}>
        <TeamMember
          name="Eduard Sobotnyk"
          avatarUrl="eduardsobotnyk.png"
          facebookLogin="eduardsobotnyk"
          linkedInLogin="eduard-sobotnyk-917459158"
          instagramLogin="edj56"
          position="Backend"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <TeamMember
          name="Yulia Cheliak"
          avatarUrl="yuliacheliak.png"
          facebookLogin="100016107456176"
          linkedInLogin="yulia-cheliak-80a787181"
          instagramLogin="juliaachelsey"
          position="Frontend"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <TeamMember
          name="Edward Fedoruk"
          avatarUrl="edwardfedoruk.png"
          facebookLogin="100009198307977"
          linkedInLogin="eduard-fedoruk-008369162"
          instagramLogin="ed.fedoruk"
          position="Frontend"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <TeamMember
          name="Mariia Korotkova"
          avatarUrl="mariiakorotkova.png"
          facebookLogin="maria.korotkova.984"
          linkedInLogin="mariia-korotkova-ux-design"
          instagramLogin="mariiakorotkova.art"
          position="Design"
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
