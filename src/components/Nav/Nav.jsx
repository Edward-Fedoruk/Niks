import React from 'react';
import DesktopNav from '../DesktopNav/DesktopNav';
import styles from './styles.module.scss';
import MobileNav from '../MobileNav/MobileNav';

const Nav = () => (
  <>
    <div className={styles.mobileNav}>
      <MobileNav />
    </div>
    <div className={styles.desktopNav}>
      <DesktopNav />
    </div>
  </>
);

export default Nav;
