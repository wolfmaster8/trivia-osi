import React, { useEffect, useContext, useState } from 'react';
import { Button, Result, Rate, Statistic } from 'antd';

import {TriviaContext, types} from "../../context";


function Finish(props) {
    let {state, dispatch} = useContext(TriviaContext)

    useEffect(() => {
        setTriviaStatus();
        calculateStars()
    }, [])

    const [result, setResult] = useState({
        status: 'info',
        title:'Calculando...',
        subtitle: '',
    })
    const [stars, setStars] = useState(0)

    const setTriviaStatus = () => {
        const percentage = (state.score *100) / state.trivia.totalPoints;

        if(percentage === 100){
            setResult({
                status: 'success',
                title: `¡Felicitaciones ${state.name}!`,
                subtitle: 'Conoces muy bien las 7 capas de referencia OSI.'
            })
        }
        if(percentage >= 50 && percentage < 100){
            setResult({
                status: 'warning',
                title: `Casi lo logras ${state.name}`,
                subtitle: 'Te recomendamos repasar las 7 capas de referencia OSI.'
            })
        }
        if(percentage < 50){
            setResult({
                status: 'error',
                title: `Lo sentimos ${state.name}`,
                subtitle: 'Debes estudiar las 7 capas de referencia OSI. Más suerte la próxima vez.'
            })
        }
    };

    const calculateStars = () => {
        const totalPoints = state.trivia.totalPoints;
        const actualPoints = state.score;
        if(actualPoints>0){
            const stars = Math.round((Number(actualPoints) *5) / Number(totalPoints), 2);
            setStars(stars)
        }
    }

    const resetTrivia = () => {
        props.history.push('/')
        dispatch({type: types.RESET_TRIVIA})
    }

  return (
    <>
        <Result
            status={result.status}
            title={result.title}
            subTitle={result.subtitle}
            extra={[
                <Statistic key={1} title="Puntos" value={state.score} suffix={`/ ${state.trivia.totalPoints}`} />,
                <Rate
                    key={2}
                    allowHalf
                    value={stars}
                    disabled
                    defaultValue={0}/>
            ]}
        />
        <Button onClick={resetTrivia}>Reiniciar Trivia</Button>
    </>
  );
}

export default Finish;
