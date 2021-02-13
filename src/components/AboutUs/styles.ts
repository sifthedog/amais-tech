import styled from 'styled-components';

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 16px auto;
  color: #00467b;
  h1 {
    margin: 16px;
  }
  div {
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

const ResponsiveImage = styled.img`
  width: 50%;
`;

export { Container, ResponsiveImage };
