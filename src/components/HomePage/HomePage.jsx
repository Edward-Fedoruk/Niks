import React from 'react';
import Circles from '../Circles/Circles';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';

const HomePage = () => (
  <div className={styles.home}>
    <Nav />
    <Circles />
  </div>
);

export default HomePage;
