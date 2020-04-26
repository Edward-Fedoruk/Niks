import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SideButton = ({ text }) => (
  <button className={styles.sideButton}>
    {text}
  </button>
);

SideButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default SideButton;