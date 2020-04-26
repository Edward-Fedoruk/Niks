import React from 'react';
import s from './styles.module.scss';

const Button = (props) => (
  <button type="button" className={s.mainButton}>
    {props.text}
  </button>
);

export default Button;
