/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import styles from './styles.module.scss';

const Logo = () => {
  const spring = useSpring({
    from: {
      fillOpacity: 0,
      strokeOpacity: 1,
      strokeDasharray: 0,
      strokeDashoffset: 0,
      strokeWidth: 1,
    },
    to: async (next) => {
      await next({ strokeDasharray: 209 });
      await next({ fillOpacity: 1, strokeOpacity: 0 });
    },
    config: { duration: 3000, precision: 0.1 },
  });

  return (
    <Link href="/">
      <a className={styles.logo}>
        <svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <animated.path style={spring} d="M46.8771 38.0116H48.0047V69.4662L26.5417 41.4009V69.0116H25.4141V37.5569L46.8771 65.5809V38.0116Z" fill="white" stroke="white" />
          <animated.path style={spring} d="M51.1113 38.1218H52.4563V49.4078L65.7805 38.1218H67.4617L53.0448 50.3927L71.1605 68.9016H69.3111L52.4984 51.7881V68.9016H51.1113V38.1218Z" stroke="white" fill="white" />
          <animated.path
            style={spring}
            d="M84.8755 42.4439C84.2643 41.294 83.4273 40.3905 82.3644 39.7335C81.3281 39.0764 80.159 38.7478 78.8569 38.7478C77.5549 38.7478 76.4389 39.1722 75.5089 40.0209C74.6054 40.8423 74.1537 41.9785 74.1537 43.4295V43.6349C74.1537 45.3597 75.0837 46.9339 76.9438 48.3576C77.7409 48.9599 78.6311 49.5622 79.6142 50.1646C80.624 50.7395 81.6204 51.3692 82.6036 52.0537C83.6133 52.7107 84.5168 53.4226 85.3139 54.1892C86.1376 54.9284 86.8019 55.8455 87.3068 56.9407C87.8383 58.0358 88.104 59.2404 88.104 60.5546V60.9653C88.104 63.5662 87.2404 65.6333 85.5132 67.1664C83.8126 68.6996 81.7001 69.4662 79.1758 69.4662C75.8543 69.4662 73.2768 68.0562 71.4434 65.2363V63.0186C72.1342 64.5792 73.144 65.8523 74.4726 66.8379C75.8277 67.7961 77.5018 68.2753 79.4947 68.2753C81.4876 68.2753 83.2147 67.6182 84.6762 66.304C86.1376 64.9899 86.8684 63.2377 86.8684 61.0474V60.801C86.8684 59.4321 86.5229 58.1864 85.8321 57.0639C85.1412 55.914 84.2776 54.9831 83.2413 54.2713C82.205 53.5321 81.0757 52.7655 79.8534 51.9715C78.6311 51.1776 77.5018 50.4383 76.4655 49.7539C75.4292 49.0694 74.5656 48.207 73.8747 47.1666C73.1838 46.1263 72.8384 44.9901 72.8384 43.7581V43.4706C72.8384 41.5541 73.4363 40.0894 74.632 39.0764C75.8277 38.0634 77.3025 37.5569 79.0562 37.5569C81.5008 37.5569 83.4406 38.4877 84.8755 40.3495V42.4439Z"
            fill="#F39E50"
            stroke="#F39E50"
          />
          <animated.path
            style={spring}
            d="M47.7227 32.3329C47.7227 33.3683 48.3345 33.886 49.5581 33.886C50.7818 33.886 51.3936 33.3683 51.3936 32.3329C51.3936 31.2975 50.7818 30.7798 49.5581 30.7798C48.3345 30.7798 47.7227 31.2975 47.7227 32.3329Z"
            fill="#F39E50"
            stroke="#F39E50"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
