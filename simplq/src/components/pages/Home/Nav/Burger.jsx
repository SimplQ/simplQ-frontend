import React, { useState } from 'react';
import styles from '../../../../styles/homePage.module.scss';
import LeftNav from './LeftNav';

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={styles['burger']} open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </div>
            <LeftNav open={open} />
        </>
    )
}
export default Burger
