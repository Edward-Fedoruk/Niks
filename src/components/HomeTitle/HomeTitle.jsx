import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const HomeTitle = () => (
  <h1 className={styles.homeTitle}>
    We are
    <span className={styles.homeTitleUppercase}> creative</span>
    <span className={[styles.homeTitleUppercase, styles.homeTitleBold].join(' ')}> team</span>
  </h1>
);

HomeTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HomeTitle;