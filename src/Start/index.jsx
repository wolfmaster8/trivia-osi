import React from 'react';
import {Link} from "react-router-dom";
import { Button, Typography } from 'antd';

import {MainWrapper} from "./styles";

const { Title, Paragraph } = Typography;


function Start() {
  return (
    <MainWrapper>
        <Title>Trivia</Title>
        <Paragraph>Para comenzar haz click en "Comenzar"</Paragraph>
        <Button size="large" type="primary"><Link to="/trivia">Comenzar!</Link></Button>
    </MainWrapper>
  );
}

export default Start;
