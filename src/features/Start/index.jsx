import React, {useEffect, useContext} from 'react';
import { Button, Typography, Form, Icon, Input } from 'antd';

import {TriviaContext, types} from "../../context";

import {MainWrapper} from "../../shared/styles";

const { Title, Paragraph } = Typography;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function Start(props) {
    let { dispatch} =  useContext(TriviaContext)
  useEffect(() => {
    props.form.validateFields();
  }, []);

  const startTrivia = (e) => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
          if(!err){
              dispatch({type: types.SET_NAME, payload: values.name})
              props.history.push('/trivia')
          }
      })
  }

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const nameError = isFieldTouched('name') && getFieldError('name');
  return (
    <>
        <Title>Trivia</Title>
        <Paragraph>Dime tu nombre y haz click en "Comenzar"</Paragraph>
        <Form layout="inline" onSubmit={startTrivia}>
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
        <Button 
          htmlType="submit" 
          size="large" 
          type="primary"
          disabled={hasErrors(getFieldsError())}
          >
            Comenzar!
          </Button>
        </Form>
    </>
  );
}
const WrappedNameForm = Form.create({ name: 'name_form' })(Start);

export default WrappedNameForm;
