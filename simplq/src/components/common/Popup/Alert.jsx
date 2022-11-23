import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAlert elevation={6} variant="filled" {...props} />
);
