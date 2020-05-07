/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import styles from './styles.module.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans = (i) => (x, y) => `translate3d(
  ${x / (34)}px, 
  ${y / (34) + (i === 0 ? 0 : -37 * i)}px, 
  0
)`;
const nav = [
  { navName: 'Team', style: styles.team },
  { navName: 'Portfolio', style: styles.portfolio },
  { navName: 'Services', style: styles.services },
];

const Nav = () => {
  const [springs, set] = useTrail(3, (i) => ({
    xy: [0, 0],
  }));

  const handleMove = ({ x, y }) => set({ xy: calc(x, y) });

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <nav className={styles.nav}>
      {springs.map((sp, i) => (
        <animated.button
          type="button"
          key={i}
          className={nav[i].style}
          style={{
            ...sp,
            transform: sp.xy.interpolate(trans(i)),
            width: 150 + i * 10,
            height: 150 + i * 10,
            zIndex: i,
          }}
        >
          <span
            className={styles.btnText}
            style={{ marginLeft: 71 + i * 5 }}
          >
            {nav[i].navName}
          </span>
        </animated.button>
      ))}
    </nav>
  );
};

export default Nav;
