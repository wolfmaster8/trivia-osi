import React, {useContext, useState} from 'react';
import {Card, Typography, Avatar, Progress, Rate, Statistic, Radio, Button} from 'antd';

import {TriviaContext} from '../../../context'

import {ButtonsStyled, ParagraphStyled} from "./styles";

const {Title, Paragraph} = Typography;

function Question({question = '', currentQuestionIndex=1, answers = [], nextQuestion}) {
    const [selected, setAnswer] = useState({})
    // let {state, dispatch} = useContext(TriviaContext)
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const setSelected = (answer) => {
        setAnswer(answer)
    };
    const submitAnswer = () => {
        console.log(selected)
    }
    return (
        <>
            <ParagraphStyled><b>{currentQuestionIndex +1}. </b>{question}</ParagraphStyled>
            <Radio.Group name="radiogroup" >
                {answers.map(answer => (
                <Radio
                    onClick={() => setSelected(answer)}
                    style={radioStyle}
                    value={answer.description}
                >
                    {answer.description}
                </Radio>
                ))}
            </Radio.Group>
            <ButtonsStyled>
                <Button
                    disabled={!selected.description}
                    onClick={submitAnswer}
                    type="primary"
                    shape="circle"
                    icon="check"
                    size="large" />
                {/*<Button type="primary" shape="round"  size="large" >Próxima</Button>*/}
            </ButtonsStyled>
        </>
    );
}

export default Question;
