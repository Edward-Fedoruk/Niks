import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MainButton from '../components/MainButton/MainButton';
import SideButton from '../components/SideButton/SideButton';
import Circles from '../components/Circles/Circles';

const Home = () => {
  const [state, setProp] = useState({
    mass: 60,
    tension: 550,
    friction: 140,
  });

  const {
    mass, tension, friction,
  } = state;

  const set = (prop) => (e) => setProp({ ...state, [prop]: parseInt(e.target.value, 10) });
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideButton text="Services" />
      <SideButton text="Portfolio" />
      <SideButton text="People" />
      <MainButton text="Valuate Project" />
      <div style={{ color: 'white' }}>Маса</div>
      <input type="text" value={mass} onChange={set('mass')} />

      <div style={{ color: 'white' }}>Напруга</div>
      <input type="text" value={tension} onChange={set('tension')} />

      <div style={{ color: 'white' }}>Тертя</div>
      <input type="text" value={friction} onChange={set('friction')} />

      <Circles config={{
        mass, tension, friction,
      }}
      />
    </div>
  );
};

export default Home;
