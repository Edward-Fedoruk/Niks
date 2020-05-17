import React from 'react';
import Circles from '../Circles/Circles';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
import CirclesMobile from '../CirclesMobile/CirclesMobile';

const HomePage = () => (
  <div className={styles.home}>
    {/* <Nav /> */}
    {/* <Circles /> */}
    <CirclesMobile />
  </div>
);

export default HomePage;
