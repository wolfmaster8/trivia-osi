import React, { useEffect, useContext, useState } from 'react';
import { Button, Typography, Form, Icon, Input, Slider } from 'antd';

import {TriviaContext, types} from "../../context";
import { allQuestions } from "../../shared/questions";
import { FormStyled } from "./styles";


const { Title, Paragraph } = Typography;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function Start(props) {
    const [questionsNumber, setQuestionsNumber] = useState(1)
    let {dispatch} =  useContext(TriviaContext)
  useEffect(() => {
    props.form.validateFields();
    setQuestionsNumber(Math.round(totalQuestions/2))
  }, []);

  const startTrivia = (e) => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
          if(!err){
              dispatch({type: types.INIT_TRIVIA, payload: {name: values.name}})
              dispatch({type: types.CHOOSE_QUESTIONS, payload: {numberOfQuestions: questionsNumber}})
              props.history.push('/trivia')
          }
      })
  }

  const changeSelectedQuestions = value => {
      setQuestionsNumber(value)
  }

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const nameError = isFieldTouched('name') && getFieldError('name');
  const totalQuestions = allQuestions.length
  return (
    <>
        <Title>Trivia</Title>
        <Paragraph>Dime tu nombre y haz click en "Comenzar"</Paragraph>
        <FormStyled  onSubmit={startTrivia}>
        <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Por favor ingresa tu nombre!' }],
          })(
            <Input
            autoFocus
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Felipe"
              size="large"
            />,
          )}
        </Form.Item>
            Numero de preguntas: {questionsNumber} / {totalQuestions}
            <Slider
                min={5}
                max={totalQuestions}
                onChange={changeSelectedQuestions}
                value={typeof questionsNumber === 'number' ? questionsNumber : 0}
            />
        <Button 
          htmlType="submit" 
          size="large" 
          type="primary"
          disabled={hasErrors(getFieldsError())}
          >
            Comenzar!
          </Button>
        </FormStyled>
    </>
  );
}
const WrappedNameForm = Form.create({ name: 'name_form' })(Start);

export default WrappedNameForm;
