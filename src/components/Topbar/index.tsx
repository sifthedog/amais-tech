import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Nav, Container } from './styles';
import BurgerMenu from '../BurgerMenu';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Container>
        <img className="logo" src={logoImg} alt="AMais Tech" />
        <BurgerMenu />
      </Container>
    </Nav>
  );
};

export default Navbar;
