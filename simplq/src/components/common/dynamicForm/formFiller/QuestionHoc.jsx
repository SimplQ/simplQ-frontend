import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Question = (SubQuestion) =>
  function Comp(props) {
    const [answers, setAnswers] = useState([undefined]);

    const appendEmptyAnswer = () => {
      setAnswers(answers.concat([undefined]));
    };

    const removeAnswer = (targetIndex) => () => {
      if (answers.length === 1) {
        // Don't allow removing all the answers
        return;
      }
      setAnswers(answers.filter((answer, index) => index !== targetIndex));
    };

    const setAnswerCallback = (targetIndex) => (newAnswer) => {
      const newAnswers = answers.map((answer, index) => {
        return index === targetIndex ? newAnswer : answer;
      });
      setAnswers(newAnswers);
    };
    return (
      <div>
        {answers.map((e, i) => (
          <div style={{ display: 'flex' }}>
            {props.data.repeated ? (
              <IconButton onClick={removeAnswer(i)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            ) : undefined}
            <SubQuestion data={props.data} setAnswer={setAnswerCallback(i)} />
          </div>
        ))}
        {props.data.repeated ? (
          <Button onClick={appendEmptyAnswer} startIcon={<AddIcon />} variant="outlined">
            Add more
          </Button>
        ) : undefined}
      </div>
    );
  };

export default Question;
