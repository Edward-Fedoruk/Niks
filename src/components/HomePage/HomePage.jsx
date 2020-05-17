import React from 'react';
import Circles from '../Circles/Circles';
import styles from './styles.module.scss';
import CirclesMobile from '../CirclesMobile/CirclesMobile';
import Logo from '../Logo/Logo';

const HomePage = () => (
  <div className={styles.home}>
    <Logo />
    <div className={styles.mobileNav}>
      <CirclesMobile />
    </div>
    <div className={styles.desktopNav}>
      <Circles />
    </div>
  </div>
);

export default HomePage;
