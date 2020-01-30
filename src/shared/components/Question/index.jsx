import React, {useContext, useState} from 'react';
import {message, Typography, Alert, Progress, Rate, Statistic, Radio, Button} from 'antd';

import {TriviaContext, types} from '../../../context'

import {ButtonsStyled, ParagraphStyled} from "./styles";

const {Title, Paragraph} = Typography;

function Question({question = '', currentQuestionIndex=1, nextQuestion}) {
    const [selected, setAnswer] = useState({})
    let {state, dispatch} = useContext(TriviaContext)
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
        if(selected.correct){
            dispatch({type: types.SET_CORRECT_ANSWER, payload: question.score})
            message.success('Correcto!')
        }else{
            dispatch({type: types.SET_INCORRECT_ANSWER, payload: question.score})
            message.error('Ouch! No es correcto')

        }
    }
    return (
        <>
            <ParagraphStyled><b>{currentQuestionIndex +1}. </b>{question.inquiry}</ParagraphStyled>
            <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />

            <Radio.Group name="radiogroup" >
                {question.responses.map(answer => (
                <Radio
                    onClick={() => setSelected(answer)}
                    style={radioStyle}
                    value={answer.description+ currentQuestionIndex}
                    disabled={state.canGoToNext}
                >
                    {answer.description}
                </Radio>
                ))}
            </Radio.Group>
            <ButtonsStyled>
                {!state.canGoToNext ? (
                    <Button
                        disabled={!selected.description}
                        onClick={submitAnswer}
                        type="primary"
                        shape="circle"
                        icon="check"
                        size="large" />
                ) :
                    (
                <Button
                    onClick={nextQuestion}
                    type="primary"
                    shape="round"
                    size="large"
                >
                    {state.trivia.questions[currentQuestionIndex +1] ? 'Próxima' : 'Terminar'}
                </Button>
                    )}
            </ButtonsStyled>
        </>
    );
}

export default Question;
