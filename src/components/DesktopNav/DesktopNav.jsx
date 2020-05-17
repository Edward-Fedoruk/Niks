/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import Link from 'next/link';
import styles from './styles.module.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans = (i) => (x, y) => `translate3d(
  ${x / (34)}px, 
  ${y / (34) + (i === 0 ? 0 : -37 * i)}px, 
  0
)`;
const nav = [
  { navName: 'Team', style: styles.team, link: '/team' },
  { navName: 'Portfolio', style: styles.portfolio, link: '/portfolio' },
  { navName: 'Services', style: styles.services, link: '/services' },
];

const DesktopNav = () => {
  const [springs, set] = useTrail(3, () => ({ xy: [0, 0] }));

  const handleMove = ({ x, y }) => set({ xy: calc(x, y) });

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.buttonGroup}>
        {springs.map((sp, i) => (
          <Link key={nav[i].link} href={nav[i].link}>
            <animated.a
              type="button"
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
            </animated.a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;
