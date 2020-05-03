import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MainButton = ({ children, classes }) => (
  <button
    type="button"
    className={`${styles.mainButton} ${classes}`}
  >
    {children}
  </button>
);

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
};

export default MainButton;
