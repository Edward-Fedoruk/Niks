import React from 'react';
import s from './styles.module.scss';

const Button = (props) => (
  <button className={s.mainButton}>
    {props.text}
    {props.textSecond}
  </button>
)

export default Button;
