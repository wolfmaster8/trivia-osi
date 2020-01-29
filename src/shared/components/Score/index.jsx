import React, {useContext} from 'react';
import { Card, Typography, Avatar, Progress  } from 'antd';

import { TriviaContext} from '../../../context'

import {User} from "./styles";

const { Title, Paragraph } = Typography;

function Score() {
    let {state, dispatch} =  useContext(TriviaContext)

    return (
    <>
        <Card>
            <User>
               <div>
                   <Avatar size="large" style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}>
                       <b>{state.name[0]}</b>
                   </Avatar>
                   <Title level={4}>{state.name}</Title>
               </div>
                <Progress type="circle" percent={30} width={40} />
            </User>
        </Card>

    </>
  );
}

export default Score;
