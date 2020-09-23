import React from 'react';
import styles from '../../../../styles/homePage.module.scss';


const RightNav = ({ open }) => {
  return (
    <ul className={styles['menu-list']} open={open} >
      <li><a className="nostyle">Home</a></li>
      <li><a className="nostyle">Contact Us</a></li>
    </ul>
  )
}

export default RightNav