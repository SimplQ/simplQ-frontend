/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from '../../../styles/navbar.module.scss';
import LeftNav from './LeftNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const toggleClose = () => setOpen(!open);

  return (
    <>
      <div className={styles['left-nav-overlay']} open={open} onClick={toggleClose} />
      <div className={styles['burger']} open={open} onClick={toggleClose}>
        <div open={open} onClick={toggleClose} />
        <div open={open} onClick={toggleClose} />
        <div open={open} onClick={toggleClose} />
      </div>
      <LeftNav open={open} toggleClose={toggleClose} />
    </>
  );
};
export default Burger;
