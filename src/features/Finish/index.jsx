import React, { useEffect, useContext, useState } from 'react';
import { Button, Typography, Result, Icon, Input, Slider } from 'antd';

import {TriviaContext, types} from "../../context";
import { allQuestions } from "../../shared/questions";
import { FormStyled } from "./styles";


const { Title, Paragraph } = Typography;


function Finish(props) {

    const setTriviaStatus = () => {

    }

  return (
    <>
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
                <Button type="primary" key="console">
                    Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
            ]}
        />

    </>
  );
}

export default Finish;
