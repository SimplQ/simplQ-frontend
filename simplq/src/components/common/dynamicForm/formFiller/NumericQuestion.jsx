import React from 'react';
import TextField from '@material-ui/core/TextField';
import QuestionHoc from './QuestionHoc';

const NumericQuestion = (props) => {
  const data = props.data;
  return (
    <div style={{ maxWidth: '450px', padding: 0 }}>
      <TextField
        label={data.label}
        style={{ margin: 8 }}
        placeholder={data.placeholder}
        helperText={data.helperText}
        fullWidth
        type="number"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default QuestionHoc(NumericQuestion);
