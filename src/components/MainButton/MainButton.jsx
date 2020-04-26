import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MainButton = ({ text }) => (
  <button className={styles.mainButton}>
    {text}
  </button>
);

MainButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default MainButton;