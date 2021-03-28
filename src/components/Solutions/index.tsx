import React from 'react';

import Container from '../Container';
import CardFlip from '../CardFlip';
import { cardProperties } from './constants';
import { CardSection } from './styles';

const Solutions: React.FC = () => {
  const [idFlipped, setIdFlipped] = React.useState('');

  return (
    <Container id="solutions">
      <h1>Soluções</h1>
      <CardSection>
        {cardProperties.map(card => (
          <CardFlip
            key={card.id}
            isFlipped={card.id === idFlipped}
            handleOnHover={() => setIdFlipped(card.id)}
            handleOnLeave={() => setIdFlipped('')}
            {...card}
          />
        ))}
      </CardSection>
    </Container>
  );
};

export default Solutions;
