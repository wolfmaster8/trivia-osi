import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Button, Typography, Form, Icon, Input } from 'antd';

import {MainWrapper} from "./styles";

const { Title, Paragraph } = Typography;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function Start(props) {
  useEffect(() => {
    props.form.validateFields();
  }, [])
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const nameError = isFieldTouched('name') && getFieldError('name');
  return (
    <MainWrapper>
        <Title>Trivia</Title>
        <Paragraph>Dime tu nombre y haz click en "Comenzar"</Paragraph>
        <Form layout="inline">
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
    </MainWrapper>
  );
}
const WrappedNameForm = Form.create({ name: 'name_form' })(Start);

export default WrappedNameForm;
