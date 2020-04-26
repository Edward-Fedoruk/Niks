import React from 'react';
import s from './styles.module.scss';

const MainButton = (props) => (
  <button className={s.mainButton}>
    {props.text}
  </button>
)

export const SideButton = (props) => (
  <button className={s.sideButton}>
    {props.text}
  </button>
)

export default MainButton;