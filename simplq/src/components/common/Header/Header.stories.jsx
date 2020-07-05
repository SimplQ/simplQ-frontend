import React from 'react';
import Header from './Header';
import styles from '../../../styles/header.module.scss';

export default {
  component: Header,
  title: 'Header',
};

export const SimplQHeader = () => {
  return (
    <span className={styles['header-with-font']}>
      <Header text="SimplQ" />
    </span>
  );
};
