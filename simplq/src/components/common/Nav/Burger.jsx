/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from './nav.module.scss';
import LeftNav from './LeftNav';

const Burger = ({ page }) => {
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
      <LeftNav open={open} toggleClose={toggleClose} page={page} />
    </>
  );
};
export default Burger;
