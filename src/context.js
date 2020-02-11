import React, { useReducer } from 'react';
import { allQuestions } from './shared/questions';

let TriviaContext = React.createContext({});

export const types = {
  INIT_TRIVIA: 'INIT_TRIVIA',
  CHOOSE_QUESTIONS: 'CHOOSE_QUESTIONS',
  SET_INCORRECT_ANSWER: 'SET_INCORRECT_ANSWER',
  SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
  SET_NEXT_QUESTION: 'SET_NEXT_QUESTION',
  RESET_TRIVIA: 'RESET_TRIVIA'
};

const initialState = {
  name: '',
  score: 0,
  canGoToNext: false,
  trivia: {
    statistics: {
      wrong: 0,
      correct: 0
    },
    totalPoints: 0,
    currentQuestion: 0,
    questions: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_TRIVIA:
      // console.log(action);
      // Spread Operator
      return { ...state, name: action.payload.name };
    case types.CHOOSE_QUESTIONS:
      let questions = [];
      let listOfQuestions = allQuestions.slice();
      let totalPoints = 0;
      let totalQuestions = allQuestions.length;
      const choose = action.payload.numberOfQuestions;
      for (let i = 0; i < choose; i++) {
        const randomNumber = Math.floor(Math.random() * totalQuestions);
        totalQuestions -= 1;
        const selected = listOfQuestions[randomNumber];
        totalPoints = totalPoints + selected.score;
        questions.push(selected);

        listOfQuestions.splice(randomNumber, 1);
      }
      return { ...state, trivia: { ...state.trivia, questions, totalPoints } };
    case types.SET_CORRECT_ANSWER:
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
    case types.RESET_TRIVIA:
      return initialState;
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
