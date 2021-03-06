/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { animated, useTrail, useSprings } from 'react-spring';
import { useMove } from 'react-use-gesture';
import styles from './styles.module.scss';
import circlesTitle from '../CircleTitles/CircleTitles';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans = (step) => (x, y) => `translate3d(
  ${x / (44 + step)}px, 
  calc(-50% + ${y / (44 + step)}px), 
  0
)`;

const circlesStyle = [
  styles.first,
  styles.second,
  styles.third,
  styles.forth,
];


const circles = [
  {
    width: '166.4vh',
    height: '166.4vh',
    left: '30vw',
    zIndex: 4,
  },
  {
    width: '100.9vh',
    height: '100.9vh',
    left: '26.1vw',
    zIndex: 3,
  },
  {
    width: '128.7vh',
    height: '128.7vh',
    left: '24.2vw',
    zIndex: 2,
  },
  {
    width: '200.9vh',
    height: '200.9vh',
    left: '21vw',
    zIndex: 1,
  },
];

const Circles = () => {
  const [slideI, setCIndex] = useState(0);

  const [wavesSpring, set] = useTrail(4, () => ({
    xy: [0, 0],
    config: { mass: 8, tension: 55, friction: 20 },
  }));

  const circlesSpring = useSprings(circles.length, circles.map((circle, i) => ({
    from: circle,
    to: async (next) => {
      if (slideI === i) {
        await next({ left: '100vw', zIndex: 1 });
        await next({ ...circles[3] });
      }
      if (i > slideI) await next({ ...circles[(i - slideI) - 1] });
      if (i < slideI) await next({ ...circles[(circles.length - 1) - slideI + i] });
    },
  })));

  const bind = useMove(({ xy: [px, py] }) => set({
    xy: calc(px, py).map((x) => x * -1),
  }));

  useEffect(() => {
    const id = setTimeout(() => setCIndex((slideI + 1) % 4), 5000);
    return () => clearTimeout(id);
  }, [slideI]);

  return (
    <animated.div {...bind()} className={styles.circles}>
      {wavesSpring.map((sp, i) => (
        <animated.div
          key={i}
          className={circlesStyle[i]}
          style={{
            transform: sp.xy.interpolate(trans(i * 2)),
            ...circlesSpring[i],
          }}
        >
          <div
            style={{ opacity: i === (slideI + 1) % 4 ? 1 : 0 }}
            className={styles.titleWrap}
          >
            {circlesTitle[i]}
          </div>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default Circles;
