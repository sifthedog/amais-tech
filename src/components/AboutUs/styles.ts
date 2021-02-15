import styled from 'styled-components';

const AboutContent = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  div {
    color: #00467b;
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      align-items: center;
    }
    display: flex;
    align-items: flex-start;
    min-width: 50%;
    img {
      width: 100%;
    }
    p {
      margin: 24px;
    }
  }
`;

export { AboutContent };
