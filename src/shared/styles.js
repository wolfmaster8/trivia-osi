import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;
