import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

import { Ul } from './styles';

interface IProps {
  open: boolean;
}

const RightNavbar: React.FC<IProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Quem Somos</li>
      <li>Soluções</li>
      <li>Cases</li>
      <li>Clientes</li>
      <li>Contato</li>
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
