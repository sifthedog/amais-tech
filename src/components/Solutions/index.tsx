import React from 'react';
import {
  FaVideo,
  FaBroadcastTower,
  FaPhoneSquareAlt,
  FaDoorClosed,
} from 'react-icons/fa';

import Container from '../Container';
import { CardSection, Card } from './styles';

const Solutions: React.FC = () => {
  return (
    <Container id="solutions">
      <h1>Soluções</h1>
      <CardSection>
        <Card>
          <div>
            <FaVideo />
          </div>
          <div>Monitoramento</div>
        </Card>
        <Card>
          <div>
            <FaBroadcastTower />
          </div>
          <div>Conectividade</div>
        </Card>
        <Card>
          <div>
            <FaPhoneSquareAlt />
          </div>
          <div>Telefonia</div>
        </Card>
      </CardSection>
    </Container>
  );
};

export default Solutions;
