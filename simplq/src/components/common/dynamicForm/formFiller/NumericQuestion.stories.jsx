import React from 'react';
import NumericQuestion from './NumericQuestion';

export default {
  component: NumericQuestion,
  title: 'DynamicForm/NumericQuestion',
};

export const NumericQuestionSimple = () => {
  const data = {
    questionId: 'random-test-id-1',
    placeholder: 'Full Name',
  };
  return <NumericQuestion data={data} />;
};
