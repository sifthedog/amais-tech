import React from 'react';

import SliderArrow from '../SliderArrow';
import cameras from '../../assets/cameras.jpg';
import antenna from '../../assets/antennas.jpg';
import { Container, CarouselContent, StyledSlider } from './styles';

const Cases: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: <SliderArrow side="right" />,
    prevArrow: <SliderArrow side="left" />,
  };

  return (
    <Container>
      <h1 style={{ color: '#f7f7ff' }}>Cases</h1>
      <StyledSlider {...settings}>
        <CarouselContent>
          <img src={cameras} alt="ba" />

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            tempora nulla consequatur ex dicta, necessitatibus voluptas
            accusamus omnis adipisci asperiores, ullam nemo. Voluptatibus odit
            delectus deleniti! Autem alias animi ad.
          </div>
        </CarouselContent>
        <CarouselContent>
          <img src={antenna} alt="ba" />

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            tempora nulla consequatur ex dicta, necessitatibus voluptas
            accusamus omnis adipisci asperiores, ullam nemo. Voluptatibus odit
            delectus deleniti! Autem alias animi ad.
          </div>
        </CarouselContent>
      </StyledSlider>
    </Container>
  );
};

export default Cases;
