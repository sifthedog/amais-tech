import React from 'react';

import aboutUs from '../../assets/about-us.svg';
import Container from '../Container';
import { AboutContent } from './styles';

const AboutUs: React.FC = () => {
  return (
    <Container id="aboutUs">
      <h1>Quem Somos</h1>
      <AboutContent>
        <div>
          <div>
            <img src={aboutUs} alt="consulting" />
          </div>
          <div>
            <p>
              Atuamos há mais de 30 anos na área de tecnologia, trabalhando com
              venda, locação, manutenção e instalação de soluções em Redes, CFTV
              e Telecom.
            </p>
            <p>
              Somos especialistas em projetos de telecomunicações, vídeo
              monitoramento e redes lógicas para ambientes corporativos e órgãos
              governamentais.
            </p>
          </div>
        </div>
      </AboutContent>
    </Container>
  );
};

export default AboutUs;
