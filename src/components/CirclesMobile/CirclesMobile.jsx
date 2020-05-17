import React from 'react';
import styles from './styles.module.scss';
import circleTitles from '../CircleTitles/CircleTitles';

const circlesStyles = [
  styles.first,
  styles.second,
  styles.third,
  styles.forth,
];

const CirclesMobile = () => (
  <div className={styles.circlesMobile}>
    {circlesStyles.map((className, i) => (
      <div key={className} className={className}>
        {circleTitles[i]}
      </div>
    ))}
  </div>
);

export default CirclesMobile;
