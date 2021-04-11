import React from 'react';
import Modal from '@material-ui/core/Modal';
import styles from './Modal.module.scss';

export default ({ open, onClose, children }) => (
  <Modal className={styles['root']} open={open} onClose={onClose}>
    <div className={styles['content']}>{children}</div>
  </Modal>
);
