import React from 'react';

import fundacaoPadreAlbinoLogo from '../../assets/fundacaoPadreAlbinoLogo.png';
import dlaPharmaLogo from '../../assets/dlaPharmaLogo.png';
import colegioJesusAdolescenteLogo from '../../assets/colegioJesusAdolescenteLogo.png';
import graficaSaoDomingosLogo from '../../assets/graficaSaoDomingosLogo.png';
import hospitalSaoDomingosLogo from '../../assets/hospitalSaoDomingosLogo.png';
import linxLogo from '../../assets/linxLogo.png';
import prefeituraSantaAdeliaLogo from '../../assets/prefeituraSantaAdeliaLogo.png';
import tronLogo from '../../assets/tronLogo.png';
import qualyconLogo from '../../assets/qualyconLogo.png';
import kelvinLogo from '../../assets/kelvinLogo.png';
import saecLogo from '../../assets/saecLogo.png';
import SliderArrow from '../SliderArrow';
import { Container, StyledSlider } from './styles';

const Customers: React.FC = () => {
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
    <Container id="customers">
      <h1>Clientes</h1>
      <StyledSlider {...settings}>
        <img
          src={colegioJesusAdolescenteLogo}
          alt="Colégio Jesus Adolescente"
        />
        <img src={dlaPharmaLogo} alt="DLA Pharma" />
        <img src={fundacaoPadreAlbinoLogo} alt="Fundação Padre Albino" />
        <img src={graficaSaoDomingosLogo} alt="Gráfica São Domingos" />
        <img
          src={hospitalSaoDomingosLogo}
          alt="Hospital São Domingos Catanduva"
        />
        <img
          src={kelvinLogo}
          className="kelvinLogo"
          alt="Kelvin Sistema de Ensino"
        />
        <img src={linxLogo} alt="Linx" />
        <img src={prefeituraSantaAdeliaLogo} alt="Prefeitura de Santa Adélia" />
        <img src={qualyconLogo} alt="Qualycon" />
        <img
          src={saecLogo}
          alt="SAEC - Superintendência de Água e Esgoto Catanduva"
        />
        <img src={tronLogo} alt="Tron Ventiladores" />
      </StyledSlider>
    </Container>
  );
};

export default Customers;
