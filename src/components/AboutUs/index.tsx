import React from 'react';

import aboutUs from '../../assets/about-us.svg';
import { Container } from './styles';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <h1>Quem Somos</h1>
      <div>
        <div>
          <img src={aboutUs} alt="consulting" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            minus, asperiores odio sequi veniam suscipit distinctio, dolorem ad
            voluptatibus repudiandae doloremque! Quod, aliquid deserunt! Quae
            enim illo sapiente quam rem?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
