import React from 'react';
import {Link} from "react-router-dom";
import { Button, Typography } from 'antd';

import {TriviaConsumer} from '../../context'
import Score from "../../shared/components/Score";


const { Title, Paragraph } = Typography;


function Trivia() {
  return (
    <>
      <Score/>
        <Title>1/2</Title>
        <Paragraph>Para comenzar haz click en "Comenzar"</Paragraph>
        <Button size="large" type="primary"><Link to="/trivia">Comenzar!</Link></Button>
    </>
  );
}

export default Trivia;
