import React from 'react';
import { Dialog } from '@material-ui/core';

export default ({ open, onClose, children }) => (
  <Dialog PaperProps={{ style: { width: '27%', borderRadius: 30 } }} open={open} onClose={onClose}>
    {children}
  </Dialog>
);
