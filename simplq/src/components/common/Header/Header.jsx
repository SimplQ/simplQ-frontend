import React from 'react';
import styles from '../../../styles/header.module.scss';

const StandardHeader = (props) => (
  <h1 className={props.className ? props.className : styles.header}>{props.text}</h1>
);

export default StandardHeader;
