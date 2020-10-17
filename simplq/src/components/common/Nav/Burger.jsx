/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from '../../../styles/navbar.module.scss';
import LeftNav from './LeftNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles['left-nav-overlay']} open={open} onClick={() => setOpen(!open)} />
      <div className={styles['burger']} open={open} onClick={() => setOpen(!open)}>
        <div open={open} onClick={() => setOpen(!open)} />
        <div open={open} onClick={() => setOpen(!open)} />
        <div open={open} onClick={() => setOpen(!open)} />
      </div>
      <LeftNav open={open} />
    </>
  );
};
export default Burger;
