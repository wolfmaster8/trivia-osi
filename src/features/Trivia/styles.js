import styled from 'styled-components';
import { Card } from 'antd';

export const CardStyled = styled(Card)`
  min-width: 500px;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    min-width: 350px;
    max-width: 350px;
  }
`;
