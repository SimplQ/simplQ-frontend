import React from 'react';
import TextQuestion from './TextQuestion';

export default {
  component: TextQuestion,
  title: 'DynamicForm/TextQuestionRepeated',
};

export const TextQuestionSimple = () => {
  const data = {
    placeholder: 'Age',
    questionId: 'random-test-id-1',
    repeated: true,
  };
  return <TextQuestion data={data} />;
};
