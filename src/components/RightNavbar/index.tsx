import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { Ul } from './styles';

interface IProps {
  open: boolean;
  onClick(): void;
}

const RightNavbar: React.FC<IProps> = ({ open, onClick }) => {
  const settings = {
    duration: 1000,
    spy: true,
    smooth: true,
    onClick,
  };

  return (
    <Ul open={open}>
      <li>
        <Link to="aboutUs" {...settings}>
          Quem Somos
        </Link>
      </li>
      <li>
        <Link to="solutions" {...settings}>
          Soluções
        </Link>
      </li>
      <li>
        <Link to="cases" {...settings}>
          Cases
        </Link>
      </li>
      <li>
        <Link to="customers" {...settings}>
          Clientes
        </Link>
      </li>
      <li>
        <Link to="contact" {...settings}>
          Contato
        </Link>
      </li>
      <li>
        <div>
          <a href="https://www.facebook.com/amaistech/">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/amais-tech">
            <FaLinkedin />
          </a>
        </div>
      </li>
    </Ul>
  );
};

export default RightNavbar;
