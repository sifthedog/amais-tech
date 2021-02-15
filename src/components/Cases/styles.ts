import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div`
  margin: 16px auto;
  padding: 16px 8px 8px 8px;
  text-align: center;
  max-width: 1024px;
  border-radius: 16px;
  background: #00467b;
  color: #f7f7ff;
  @media (max-width: 1024px) {
    border-radius: 0px;
  }
`;

const CarouselContent = styled.div`
  padding: 8px;
  width: 100%;
  display: flex !important;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  margin: 16px 0;
  img {
    margin: 8px;
    border-radius: 16px;
    width: 40%;
  }
  div {
    margin: 8px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    img {
      width: 100%;
    }
  }
`;

const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  .slick-dots {
    color: #f7f7ff;
    bottom: 0px;
    li {
      button:before {
        color: #f7f7ff;
      }
    }
  }
`;

export { Container, CarouselContent, StyledSlider };
