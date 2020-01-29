import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { Button, Typography, Radio, Card } from 'antd';

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
      console.log(trivia.questions)
      return (
          <>
              <Title>Trivia OSI</Title>
              <Paragraph>¿Qué tanto sabes sobre las 7 capas de referencia OSI?</Paragraph>
              <Score
                  currentQuestionIndex={state.trivia.currentQuestion +1}
              />
              <Card style={{minWidth: 500}} loading={loading}>
                  <Question
                      question={!loading && trivia.questions[trivia.currentQuestion].question}
                      currentQuestionIndex={!loading && trivia.currentQuestion}
                      answers={!loading && trivia.questions[trivia.currentQuestion].answers}
                      onSubmitAnswer=""
                      result=""
                  />
              </Card>
              <Link to="/">Reset</Link>
          </>
      );
  }
}


export default Trivia;
