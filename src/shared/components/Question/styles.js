import styled from 'styled-components';
import { Typography } from 'antd';
const { Paragraph } = Typography;

export const ParagraphStyled = styled(Paragraph)`
  min-width: 450px;
  font-size: 21px;
  text-align: justify;
`;

export const ButtonsStyled = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
`;
