import React from 'react';
import {Link} from "react-router-dom";
import { Button, Typography } from 'antd';

import TriviaContext from '../../context'

import {MainWrapper} from "./styles";

const { Title, Paragraph } = Typography;


function Trivia() {
  return (
    <MainWrapper>
      <TriviaContext.Consumer>
        {({name}) => name}
      </TriviaContext.Consumer>
        <Title>1/2</Title>
        <Paragraph>Para comenzar haz click en "Comenzar"</Paragraph>
        <Button size="large" type="primary"><Link to="/trivia">Comenzar!</Link></Button>
    </MainWrapper>
  );
}

export default Trivia;
