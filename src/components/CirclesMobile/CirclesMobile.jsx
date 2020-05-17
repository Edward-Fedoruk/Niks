import React from 'react';
import styles from './styles.module.scss';

const circlesStyles = [
  styles.first,
  styles.second,
  styles.third,
  styles.forth,
];

const CirclesMobile = () => (
  <div className={styles.circlesMobile}>
    {circlesStyles.map((className) => (
      <div className={className} />
    ))}
  </div>
);

export default CirclesMobile;
