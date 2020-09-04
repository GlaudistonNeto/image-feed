import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const postReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return [...state, { title: `Image Post #${state.length + 1}` }];
    case 'decrement':
      return [...state, { title: `Image Post #${state.length - 1}` }];
    default:
      return state;
  }
}; // helper function with reducer

const Increment = () => {
  dispatch({ type: 'increment' });
}; // a call for the helper function

const Decrement = () => {
  dispatch({ type: 'decrement' });
}; // a call for the helper function

export const { Context, Provider } = createDataContext(
  postReducer,
  {
    Increment,
    Decrement
  },
  []
);
