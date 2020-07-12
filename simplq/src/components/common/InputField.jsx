import React from 'react';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';

// StylesProvider added to enable CSS use through className prop
export default (props) => (
  <StylesProvider injectFirst>
    <TextField
      placeholder={props.placeholder}
      fullWidth
      required
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      error={props.error}
      helperText={props.helperText}
      className={props.className}
    />
  </StylesProvider>
);
