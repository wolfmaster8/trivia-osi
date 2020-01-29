import React, { useState, useReducer } from 'react';

let TriviaContext = React.createContext({});

export const types = {
  SET_NAME: 'SET_NAME'
};

const initialState = {
  name: 'Felipe'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME:
      console.log(action);
      return { ...state, name: action.payload };
    default:
      return initialState;
  }
};

function TriviaProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <TriviaContext.Provider value={value}>
      {props.children}
    </TriviaContext.Provider>
  );
}

let TriviaConsumer = TriviaContext.Consumer;

export { TriviaContext, TriviaProvider, TriviaConsumer };
