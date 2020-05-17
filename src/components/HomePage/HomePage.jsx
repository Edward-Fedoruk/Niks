import React from 'react';
import Circles from '../Circles/Circles';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
import MobileNav from '../CirclesMobile/CirclesMobile';

const HomePage = () => (
  <div className={styles.home}>
    <Nav />
    {/* <Circles /> */}
    <MobileNav />
  </div>
);

export default HomePage;
