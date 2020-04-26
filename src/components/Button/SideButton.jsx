import React from 'react';
import s from './styles.module.scss';

const SideButton = (props) => (
  <button className={s.sideButton}>
    {props.text}
  </button>
)

export default SideButton;