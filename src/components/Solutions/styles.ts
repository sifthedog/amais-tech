import styled from 'styled-components';

const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 8px;
  border-radius: 16px;
  max-width: 200px;
  max-height: 200px;
  background: #00467b;
  div {
    font-size: 16px;
    svg {
      font-size: 48px;
      color: #ec610c;
      margin: 16px;
    }
  }
  width: 50vw;
  height: 50vw;
`;

export { CardSection, Card };
