import React from 'react';

import googleLogo from '../../assets/google_2015.svg';
import toyotaLogo from '../../assets/toyota-7.svg';
import turkishAirlinesLogo from '../../assets/turkish-airlines.svg';
import cocaColaLogo from '../../assets/coca-cola.svg';
import SliderArrow from '../SliderArrow';
import { Container, StyledSlider } from './styles';

const Customers: React.FC = () => {
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: <SliderArrow side="right" />,
    prevArrow: <SliderArrow side="left" />,
  };

  return (
    <Container id="customers">
      <h1>Clientes</h1>
      <StyledSlider {...settings}>
        <img src={googleLogo} alt="Google" />
        <img src={toyotaLogo} alt="Toyota" />
        <img src={turkishAirlinesLogo} alt="Turkish Airlines" />
        <img src={cocaColaLogo} alt="Coca-Cola" />
      </StyledSlider>
    </Container>
  );
};

export default Customers;
