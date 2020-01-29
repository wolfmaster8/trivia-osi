import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { Button, Typography, Radio, Card } from 'antd';

import {TriviaConsumer, TriviaContext, types} from '../../context'
import Score from "../../shared/components/Score";

import Question from "../../shared/components/Question";

const { Title, Paragraph } = Typography;


function Trivia() {
  let {state, dispatch} = useContext(TriviaContext)

  return (
    <>
      <Title>Trivia OSI</Title>
      <Paragraph>¿Qué tanto sabes sobre las 7 capas de referencia OSI?</Paragraph>
      <Score/>
      <Card>
        <Question />
      </Card>
    </>
  );
}

export default Trivia;
