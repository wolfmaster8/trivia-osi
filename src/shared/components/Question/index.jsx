import React, { useContext, useState } from 'react';
import { message, Alert, Radio, Button } from 'antd';

import { TriviaContext, types } from '../../../context'

import { ButtonsStyled, ParagraphStyled } from "./styles";


function Question({question = '', currentQuestionIndex = 1, nextQuestion}) {
    const [selected, setAnswer] = useState({
        description: null,
        correct: null
    });
    const [correct, setCorrect] = useState(false)
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
        if (selected.correct) {
            dispatch({type: types.SET_CORRECT_ANSWER, payload: question.score})
            message.success('Correcto!')
            setCorrect(true)
            setAnswer({description: null, correct: null})

        } else {
            dispatch({type: types.SET_INCORRECT_ANSWER, payload: question.score})
            message.error('Ouch! No es correcto')
            setCorrect(false)
            setAnswer({description: null, correct: null})

        }
    }
    return (
        <>
            <ParagraphStyled><b>{currentQuestionIndex + 1}. </b><span  dangerouslySetInnerHTML={{__html: question.inquiry}}/></ParagraphStyled>
            {state.canGoToNext && !correct ?
                <Alert
                    message="La respuesta correcta es:"
                    description={question.responses.map(question => question.correct && question.description)}
                    type="info"
                /> : null}

            {correct || !state.canGoToNext ? (
                <Radio.Group name="radiogroup">
                    {question.responses.map(answer => (
                        <Radio
                            key={answer.description + currentQuestionIndex}
                            onClick={() => setSelected(answer)}
                            style={radioStyle}
                            value={answer.description + currentQuestionIndex}
                            disabled={state.canGoToNext}
                        >
                            {answer.description}
                        </Radio>
                    ))}
                </Radio.Group>
            ) : null}

            <ButtonsStyled>
                {!state.canGoToNext ? (
                        <Button
                            disabled={!selected.description}
                            onClick={submitAnswer}
                            type="primary"
                            shape="circle"
                            icon="check"
                            size="large"/>
                    ) :
                    (
                        <Button
                            onClick={nextQuestion}
                            type="primary"
                            shape="round"
                            size="large"
                        >
                            {state.trivia.questions[currentQuestionIndex + 1] ? 'Próxima' : 'Terminar'}
                        </Button>
                    )}
            </ButtonsStyled>
        </>
    );
}

export default Question;
