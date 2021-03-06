import React from 'react';
import { Badge, Typography, Button } from 'antd';

import { TriviaContext, types} from '../../context'
import Score from "../../shared/components/Score";

import Question from "../../shared/components/Question";
import { CardStyled } from "./styles";

const { Title, Paragraph } = Typography;


class Trivia extends  React.Component {
    static contextType = TriviaContext;
    state = {
        loading: true
    }

    componentDidMount() {
        const {state} = this.context;
        if(!state.trivia.questions.length){
            this.props.history.push('/')

        }
        /* ONLY DEV */
        // dispatch({type: types.CHOOSE_QUESTIONS, payload: {numberOfQuestions: 2}})
        this.setState({loading: false})
    }

    render(){
      const {state, dispatch} = this.context;
      const {trivia} = state;
      const {loading} = this.state;

      const getPointsColor = () => {
          const questionScore = state.trivia.questions[trivia.currentQuestion].score
          if(questionScore >=10){
              return '#2943c4'
          }else if(questionScore >=5 && questionScore <10){
              return '#56c43c'
          } else if(questionScore < 5){
              return '#c46f48'
          }
      }

      const setNextQuestion = () => {
        if(trivia.questions[trivia.currentQuestion +1]){
            dispatch({type: types.SET_NEXT_QUESTION})
        }else{
            this.props.history.push('/finish')
        }
      }

        const resetTrivia = () => {
            this.props.history.push('/')
            dispatch({type: types.RESET_TRIVIA})
        }

      return (
          <>
              <Title>Trivia OSI</Title>
              <Paragraph>¿Qué tanto sabes sobre las 7 capas de referencia OSI?</Paragraph>
              <Score
                  currentQuestionIndex={state.trivia.currentQuestion +1}
              />
              <CardStyled loading={loading}>
                  <Badge
                      count={!loading && `${trivia.questions[trivia.currentQuestion].score} puntos`}
                      style={{ backgroundColor: !loading && getPointsColor() }}
                  />
                  <Question
                      question={!loading && trivia.questions[trivia.currentQuestion]}
                      currentQuestionIndex={!loading && trivia.currentQuestion}
                      nextQuestion={setNextQuestion}
                  />
              </CardStyled>
              <Button onClick={resetTrivia}>Reiniciar Trivia</Button>

          </>
      );
  }
}


export default Trivia;
