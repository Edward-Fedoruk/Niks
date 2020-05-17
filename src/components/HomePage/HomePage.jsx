import React from 'react';
import Circles from '../Circles/Circles';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
import CirclesMobile from '../CirclesMobile/CirclesMobile';
import MobileNav from '../MobileNav/MobileNav';

const HomePage = () => (
  <div className={styles.home}>
    {/* <Nav /> */}
    {/* <Circles /> */}
    <CirclesMobile />
    <MobileNav />
  </div>
);

export default HomePage;
