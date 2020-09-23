import React from 'react';
import styles from '../../../../styles/homePage.module.scss';


const RightNav = ({ open }) => {
  return (
    <ul className={styles['Menu-List-style']} open={open} >
      <li><a href="#" className="nostyle">Home</a></li>
      <li><a href="#" className="nostyle">Contact Us</a></li>
    </ul>
  )
}

export default RightNav