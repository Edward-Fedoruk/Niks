/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMove } from 'react-use-gesture';
import styles from './styles.module.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 6}px, calc(-50% + ${y / 16}px), 0)`;
const trans2 = (x, y) => `translate3d(${x / 9}px, calc(-50% + ${y / 19}px), 0)`;
const trans3 = (x, y) => `translate3d(${x / 12}px, calc(-50% + ${y / 22}px), 0)`;
const trans4 = (x, y) => `translate3d(${x / 15}px, calc(-50% + ${y / 25}px), 0)`;

const Circles = ({ config }) => {
  const [sp, set] = useSpring(() => ({
    xy: [0, 0],
    config: { ...config },
  }));

  console.log(config);

  const bind = useMove(({ xy: [px, py] }) => set({ xy: calc(px, py).reverse() }));

  useEffect(() => {
    set({ config });
  });

  return (
    <animated.div {...bind()} className={styles.circles}>
      <animated.div className={styles.first} style={{ transform: sp.xy.interpolate(trans1) }} />
      <animated.div className={styles.second} style={{ transform: sp.xy.interpolate(trans2) }} />
      <animated.div className={styles.third} style={{ transform: sp.xy.interpolate(trans3) }} />
      <animated.div className={styles.forth} style={{ transform: sp.xy.interpolate(trans4) }} />
    </animated.div>
  );
};

export default Circles;
