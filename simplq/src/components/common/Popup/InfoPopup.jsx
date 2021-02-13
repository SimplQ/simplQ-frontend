import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { setInfoPopupMessage } from 'store/appSlice';
import Alert from './Alert';

export default () => {
  const infoText = useSelector((state) => state.appReducer.infoText);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setInfoPopupMessage(''));
  };

  return (
    <Snackbar open={infoText.length > 0} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="info">
        {infoText}
      </Alert>
    </Snackbar>
  );
};
