import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div`
  margin: 16px auto;
  padding: 16px 8px 8px 8px;
  text-align: center;
  max-width: 1024px;
  @media (max-width: 1024px) {
    border-radius: 0px;
  }
`;

const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  color: #00467b;
  .slick-track {
    display: flex !important;
    align-items: center;
    img {
      padding: 16px;
    }
  }
`;

export { Container, StyledSlider };
