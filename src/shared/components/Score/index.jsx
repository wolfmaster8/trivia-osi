import React, {useContext} from 'react';
import {Card, Typography, Avatar, Progress, Rate, Statistic} from 'antd';

import {TriviaContext} from '../../../context'

import {ScoreStyled, User} from "./styles";

const {Title} = Typography;

function Score({currentQuestionIndex}) {
    let {state, dispatch} = useContext(TriviaContext)
    const {trivia} = state;
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
                    {/*<Progress type="circle" width={50} percent={(trivia.statistics.correct/ trivia.questions.length)*100} format={correct => trivia.statistics.correct} />*/}
                    {/*<Progress type="circle" width={50} status="exception" percent={(trivia.statistics.wrong/ trivia.questions.length)*100} format={wrong => trivia.statistics.wrong} />*/}
                    <Statistic title="Puntos" value={state.score} />
                    {/*<Rate disabled defaultValue={5}/>*/}
                    <Statistic title="Preguntas" value={currentQuestionIndex} suffix={`/ ${trivia.questions.length}`}/>

                </User>
                <Progress
                    showInfo={false}
                    status="active"
                    percent={((trivia.statistics.correct + trivia.statistics.wrong)/ trivia.questions.length)*100}
                    successPercent={(trivia.statistics.correct / trivia.questions.length)*100}
                    width={40}
                />
            </Card>

        </ScoreStyled>
    );
}

export default Score;
