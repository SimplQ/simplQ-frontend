import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { rootReducer } from 'store';

const reduxDecorator = (Story, context) => {
  const { state } = context.parameters;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

  store.dispatch = action('dispatch');

  const Decorator = () => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };

  return <Decorator />;
};

export default reduxDecorator;
