import React from 'react';
import PropTypes from 'prop-types';
import MainButton from '../MainButton/MainButton';
import styles from './styles.module.scss';

const HomeTitle = ({ children }) => (
  <div className={styles.homeTitleWrap}>
    {children}
    <MainButton classes={styles.mainButton}>
      Order Project
    </MainButton>
  </div>
);

HomeTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTitle;
