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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              minus, asperiores odio sequi veniam suscipit distinctio, dolorem
              ad voluptatibus repudiandae doloremque! Quod, aliquid deserunt!
              Quae enim illo sapiente quam rem?
            </p>
          </div>
        </div>
      </AboutContent>
    </Container>
  );
};

export default AboutUs;
