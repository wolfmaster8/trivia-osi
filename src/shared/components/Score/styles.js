import styled from 'styled-components';

export const User = styled.div`
  min-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  h4 {
    margin: 0;
    padding-left: 12px;
  }
`;

export const ScoreStyled = styled.div`
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`;
