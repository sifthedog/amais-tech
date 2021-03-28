import styled from 'styled-components';

interface ICardProps {
  isFlipped: boolean;
}

const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 8px;
  border-radius: 16px;
  max-width: 200px;
  max-height: 200px;
  background: ${({ isFlipped }) => (isFlipped ? '#ec610c' : '#00467b')};
  div {
    font-size: 16px;
    svg {
      font-size: 48px;
      color: #ec610c;
      margin: 16px;
    }
  }
  p {
    padding: 4px 8px 4px 8px;
  }
  width: 50vw;
  height: 50vw;
`;

export { Card };
