import React, {useContext} from 'react';
import {Card, Typography, Avatar, Progress, Rate, Statistic} from 'antd';

import {TriviaContext} from '../../../context'

import {ScoreStyled, User} from "./styles";

const {Title} = Typography;

function Score({currentQuestionIndex}) {
    let {state, dispatch} = useContext(TriviaContext)

    return (
        <ScoreStyled>
            <Card>
                <User>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar size="large" style={{backgroundColor: '#f56a00', verticalAlign: 'middle'}}>
                            <b>{state.name[0]}</b>
                        </Avatar>
                        <Title level={4}>{state.name}</Title>
                    </div>
                    <Rate disabled defaultValue={5}/>
                    <Statistic value={currentQuestionIndex} suffix="/ 10"/>

                </User>
                <Progress
                    showInfo={false}
                    status="active"
                    percent={30}
                    width={40}
                />
            </Card>

        </ScoreStyled>
    );
}

export default Score;
