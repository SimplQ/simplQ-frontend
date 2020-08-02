import React from 'react';
import TextField from '@material-ui/core/TextField';
import QuestionHoc from './QuestionHoc';

const TextQuestion = (props) => {
  const data = props.data;
  return (
    <div style={{ maxWidth: '450px', padding: 0 }}>
      <TextField
        label={data.label}
        style={{ margin: 8 }}
        placeholder={data.placeholder}
        helperText={data.helperText}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => props.setAnswer({ answerId: data.answerId, response: e.target.value })}
      />
    </div>
  );
};

export default QuestionHoc(TextQuestion);
