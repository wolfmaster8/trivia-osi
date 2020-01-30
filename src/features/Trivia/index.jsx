import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { Badge, Typography, Radio, Card } from 'antd';

import {TriviaConsumer, TriviaContext, types} from '../../context'
import Score from "../../shared/components/Score";

import Question from "../../shared/components/Question";

const { Title, Paragraph } = Typography;


class Trivia extends  React.Component {
    static contextType = TriviaContext;
    state = {
        loading: true
    }

    componentDidMount() {
        const {dispatch} = this.context;
        /* ONLY DEV */
        dispatch({type: types.CHOOSE_QUESTIONS})
        this.setState({loading: false})
    }

    render(){
      console.log(this.context)
      const {state, dispatch} = this.context;
      const {trivia} = state;
      const {loading} = this.state;
      console.log(trivia.questions);

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
            console.log('Finish')
        }
      }
      return (
          <>
              <Title>Trivia OSI</Title>
              <Paragraph>¿Qué tanto sabes sobre las 7 capas de referencia OSI?</Paragraph>
              <Score
                  currentQuestionIndex={state.trivia.currentQuestion +1}
              />
              <Card style={{minWidth: 500}} loading={loading}>
                  <Badge
                      count={!loading && `${trivia.questions[trivia.currentQuestion].score} puntos`}
                      style={{ backgroundColor: !loading && getPointsColor() }}
                  />
                  <Question
                      question={!loading && trivia.questions[trivia.currentQuestion]}
                      currentQuestionIndex={!loading && trivia.currentQuestion}
                      nextQuestion={setNextQuestion}
                  />
              </Card>
              <Link to="/">Reset</Link>
          </>
      );
  }
}


export default Trivia;
