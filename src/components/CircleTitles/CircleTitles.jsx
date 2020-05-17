import React from 'react';
import HomeTitle from '../HomeTitle/HomeTitle';
import styles from './styles.module.scss';

const circlesTitle = [
  (
    <HomeTitle>
      <>
        <h1 className={styles.title}>
          We are
          <b className={styles.bold}>YOUR</b>
          <br />
          development
          <br />
          <b className={styles.bold}>TEAM</b>
        </h1>
        <p className={styles.description}>
          creative.
          <br />
          flexible.
          <br />
          accessible.
        </p>
      </>
    </HomeTitle>
  ),
  (
    <HomeTitle>
      <>
        <h1 className={styles.title}>
          We are
          <br />
          CREATIVE
          <br />
          <b className={styles.bold}>TEAM</b>
        </h1>
        <p className={styles.description}>
          For custom solutions
          <br />
          to your problem.
        </p>
      </>
    </HomeTitle>
  ),
  (
    <HomeTitle>
      <>
        <h1 className={styles.title}>
          We are
          <br />
          a FLEXIBLE
          <br />
          <b className={styles.bold}>TEAM</b>
        </h1>
        <p className={styles.description}>
          Choose your interaction
          <br />
          mode and toolbox.
        </p>
      </>
    </HomeTitle>
  ),
  (
    <HomeTitle>
      <>
        <h1 className={styles.title}>
          We are
          <br />
          an ACCESSIBLE
          <br />
          <b className={styles.bold}>TEAM</b>
        </h1>
        <p className={styles.description}>
          Direct communication with
          <br />
          each team member.
        </p>
      </>
    </HomeTitle>
  ),
];

export default circlesTitle;
