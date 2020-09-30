import React, { useState } from 'react';
import styles from '../../../../styles/homePage.module.scss';
import LeftNav from './LeftNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
