import React from 'react';
import styles from './styles.module.scss';

const HomeTitle = () => (
  <h1 className={styles.homeTitle}>
    We are
    <br/><span className={styles.homeTitleUppercase}> creative</span>
    <br/><span className={[styles.homeTitleUppercase, styles.homeTitleBold].join(' ')}> team</span>
  </h1>
);

export default HomeTitle;