import React from 'react';

import furukawaLogo from '../../assets/furukawaLogo.png';
import digitroLogo from '../../assets/digitroLogo.png';
import intelbrasLogo from '../../assets/intelbrasLogo.png';
import ubiquitiLogo from '../../assets/ubiquitiLogo.png';
import hikvisionLogo from '../../assets/hikvisionLogo.png';
import SliderArrow from '../SliderArrow';
import { Container, StyledSlider } from './styles';

const Partners: React.FC = () => {
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: <SliderArrow side="right" />,
    prevArrow: <SliderArrow side="left" />,
  };

  return (
    <Container id="partners">
      <h1>Empresas Parceiras</h1>
      <StyledSlider {...settings}>
        <img src={digitroLogo} alt="Dígitro" />
        <img src={furukawaLogo} alt="Furukawa" />
        <img src={intelbrasLogo} alt="Intelbras" />
        <img src={hikvisionLogo} alt="Hikvision" />
        <img src={ubiquitiLogo} alt="Ubiquiti" />
      </StyledSlider>
    </Container>
  );
};

export default Partners;
