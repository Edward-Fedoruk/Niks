import React from 'react';
import styles from '../styles.module.scss';

const FacebookIcon = () => (
  <svg className={styles.socialIcon} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M30 15.0001C30 6.71625 23.2847 0 14.9999 0C6.71532 0 0 6.71625 0 15.0001C0 23.2847 6.71522 30 14.9999 30C23.2847 30 30 23.2848 30 15.0001ZM18.7599 10.3263H16.8267C16.3064 10.3263 15.9408 10.767 15.9408 11.3164V12.1779H18.7017L18.2546 14.9744H15.9399V22.4707H13.1142V14.9744H11.2393V12.1779H13.1142V10.752H13.1199C13.1696 9.12631 13.7339 7.57852 16.4874 7.481V7.4707H18.7599V10.3263Z" fill="white" fillOpacity="0.8" />
  </svg>
);

FacebookIcon.propTypes = {

};

export default FacebookIcon;
