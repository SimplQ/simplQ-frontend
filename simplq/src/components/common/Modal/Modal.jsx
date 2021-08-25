import React from 'react';
import { Dialog } from '@material-ui/core';
import styles from './Modal.module.scss';

export default ({ open, onClose, children }) => (
  <Dialog PaperProps={{ className: styles['content'] }} open={open} onClose={onClose}>
    {children}
  </Dialog>
);
