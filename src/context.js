import React, { useState, useReducer } from 'react';
import { allQuestions } from './shared/questions';

let TriviaContext = React.createContext({});

export const types = {
  SET_NAME: 'SET_NAME',
  CHOOSE_QUESTIONS: 'CHOOSE_QUESTIONS'
};

const initialState = {
  name: 'Felipe',
  score: '',
  trivia: {
    currentQuestion: 1,
    questions: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME:
      console.log(action);
      return { ...state, name: action.payload };
    case types.CHOOSE_QUESTIONS:
      let questions = [];
      let totalQuestions = allQuestions.length;
      const choose = 2;
      for (let i = 0; i < choose; i++) {
        const randomNumber = Math.floor(Math.random() * totalQuestions);
        totalQuestions -= 1;
        const selected = allQuestions[randomNumber];
        questions.push(selected);

        allQuestions.splice(randomNumber, 1);
      }
      return { ...state, trivia: { ...state.trivia, questions } };
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
