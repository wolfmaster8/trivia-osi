import React, { useState, useReducer } from 'react';
import { allQuestions } from './shared/questions';

let TriviaContext = React.createContext({});

export const types = {
  SET_NAME: 'SET_NAME',
  CHOOSE_QUESTIONS: 'CHOOSE_QUESTIONS',
  SET_INCORRECT_ANSWER: 'SET_INCORRECT_ANSWER',
  SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
  SET_NEXT_QUESTION: 'SET_NEXT_QUESTION'
};

const initialState = {
  name: 'Felipe',
  score: 0,
  canGoToNext: false,
  trivia: {
    statistics: {
      wrong: 0,
      correct: 0
    },
    currentQuestion: 0,
    questions: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME:
      // console.log(action);
      return { ...state, name: action.payload };
    case types.CHOOSE_QUESTIONS:
      let questions = [];
      let totalQuestions = allQuestions.length;
      const choose = 4;
      for (let i = 0; i < choose; i++) {
        const randomNumber = Math.floor(Math.random() * totalQuestions);
        totalQuestions -= 1;
        const selected = allQuestions[randomNumber];
        questions.push(selected);

        allQuestions.splice(randomNumber, 1);
      }
      return { ...state, trivia: { ...state.trivia, questions } };
    case types.SET_CORRECT_ANSWER:
      console.log(`aaaa`, action);
      return {
        ...state,
        canGoToNext: true,
        score: state.score + action.payload,
        trivia: {
          ...state.trivia,
          statistics: {
            ...state.trivia.statistics,
            correct: state.trivia.statistics.correct + 1
          }
        }
      };
    case types.SET_INCORRECT_ANSWER:
      console.log(`aaaa`, action);
      return {
        ...state,
        canGoToNext: true,
        score: state.score - action.payload,
        trivia: {
          ...state.trivia,
          statistics: {
            ...state.trivia.statistics,
            wrong: state.trivia.statistics.wrong + 1
          }
        }
      };
    case types.SET_NEXT_QUESTION:
      return {
        ...state,
        canGoToNext: false,
        trivia: {
          ...state.trivia,
          currentQuestion: state.trivia.currentQuestion + 1
        }
      };
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
