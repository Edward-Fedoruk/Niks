import React from 'react';
import Circles from '../Circles/Circles';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
import CirclesMobile from '../CirclesMobile/CirclesMobile';
import MobileNav from '../MobileNav/MobileNav';
import Logo from '../Logo/Logo';

const HomePage = () => (
  <div className={styles.home}>
    <div className={styles.logo}>
      <Logo />
    </div>

    <div className={styles.mobileNav}>
      <CirclesMobile />
      <MobileNav />
    </div>
    <div className={styles.desktopNav}>
      <Nav />
      <Circles />
    </div>

  </div>
);

export default HomePage;
