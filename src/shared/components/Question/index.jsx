import React, {useContext} from 'react';
import {Card, Typography, Avatar, Progress, Rate, Statistic, Radio, Button} from 'antd';

import {TriviaContext} from '../../../context'

import {ButtonsStyled, ParagraphStyled} from "./styles";

const {Title, Paragraph} = Typography;

function Question() {
    let {state, dispatch} = useContext(TriviaContext)
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    return (
        <>
            <ParagraphStyled><b>1. </b>
                Builds the app for production to the build folder.
                It correctly bundles React in production mode and optimizes the build for the best performance.

                The build is minified and the filenames include the hashes.
                Your app is ready to be deployed!

                See the section about deployment for more information.
            </ParagraphStyled>
            <Radio.Group name="radiogroup" >
                <Radio style={radioStyle} value={1}>A</Radio>
                <Radio style={radioStyle} value={2}>B</Radio>
                <Radio style={radioStyle} value={3}>C</Radio>
                <Radio style={radioStyle} value={4}>D</Radio>
            </Radio.Group>
            <ButtonsStyled>
                <Button type="primary" shape="round" icon="check" size="large" />
                {/*<Button type="primary" shape="round"  size="large" >Próxima</Button>*/}
            </ButtonsStyled>
        </>
    );
}

export default Question;
