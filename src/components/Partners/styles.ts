import styled from 'styled-components';

const Container = styled.div`
  margin: 16px auto;
  padding: 16px 8px 8px 8px;
  text-align: center;
  max-width: 1024px;
  @media (max-width: 1024px) {
    border-radius: 0px;
  }
`;

const PartnersLogos = styled.div`
  display: flex;
  align-items: center;
  color: #00467b;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    padding: 16px;
    width: 20%;
  }
  @media (max-width: 900px) {
    img {
      width: 25%;
    }
  }
  @media (max-width: 750px) {
    img {
      width: 33%;
    }
  }
`;

export { Container, PartnersLogos };
