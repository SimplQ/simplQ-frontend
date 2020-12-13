import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorPopupMessage } from '../../../store/appSlice';
import Alert from './Alert';

export default () => {
  const errorText = useSelector((state) => state.appReducer.errorText);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setErrorPopupMessage(''));
  };

  return (
    <Snackbar open={errorText.length > 0} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {errorText}
      </Alert>
    </Snackbar>
  );
};
