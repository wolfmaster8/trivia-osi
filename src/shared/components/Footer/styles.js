import styled from 'styled-components';
import { Typography } from 'antd';
const { Paragraph } = Typography;

export const FooterStyled = styled(Paragraph)`
  //position: absolute;
  margin-top: 48px;
  bottom: 0;
  padding: 24px;
  text-align: center;
  @media screen and (max-width: 768px) {
    //position: fixed;
    max-width: 350px;
  }
`;
