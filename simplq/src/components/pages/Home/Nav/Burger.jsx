import React, { useState } from 'react';
import styles from '../../../../styles/homePage.module.scss';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles['burger']} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
