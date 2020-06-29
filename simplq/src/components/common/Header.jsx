import React from 'react';
import styles from '../../styles/header.module.scss';

const Header = (props) => (
  <div>
    <h1 className={props.className ? props.className : styles.header}>{props.text}</h1>
  </div>
);

export default Header;
