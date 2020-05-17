/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './styles.module.scss';

const routes = [
  { routeName: 'Home', route: '/' },
  { routeName: 'Services', route: '/services' },
  { routeName: 'Portfolio', route: '/portfolio' },
  { routeName: 'Team', route: '/team' },
];

const MobileNav = () => {
  const router = useRouter();
  return (
    <nav className={styles.mobileNav}>
      {routes.map(({ routeName, route }) => (
        <Link key={route} href={route}>
          <a className={cn(styles.link, {
            [styles.activeLink]: route === router.route,
          })}
          >
            {routeName}
          </a>
        </Link>
      ))}
    </nav>
  );
};
export default MobileNav;
