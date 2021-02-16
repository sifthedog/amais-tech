import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

import logoAlt from '../../assets/logo-alt.svg';
import { BottomBar, Container, ContentBox } from './styles';

const Contact: React.FC = () => {
  return (
    <BottomBar>
      <Container>
        <ContentBox>
          <img src={logoAlt} alt="alternative logo" />
        </ContentBox>
        <ContentBox>
          <span>Redes sociais:</span>
          <div>
            <a href="https://www.facebook.com/amaistech/">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/amais-tech">
              <FaLinkedin />
            </a>
          </div>
        </ContentBox>
        <ContentBox>
          <span>
            <FaEnvelope />
            contato@amaistech.com.br
          </span>
          <span>
            <FaPhone />
            (17) 3523-5444
          </span>
          <span>
            <FaMapMarkerAlt />
            Rua Alagoas, 932. Catanduva - SP
          </span>
        </ContentBox>
      </Container>
    </BottomBar>
  );
};

export default Contact;
