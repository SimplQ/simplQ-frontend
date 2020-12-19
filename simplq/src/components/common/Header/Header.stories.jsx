import React from 'react';
import Header from '.';
import styles from './header.module.scss';

export default {
  component: Header,
  title: 'Header',
};

export const SimplQHeader = () => {
  return (
    <span className={styles['header-with-font']}>
      <Header>SimplQ</Header>
    </span>
  );
};
