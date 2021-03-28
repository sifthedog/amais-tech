import React from 'react';
import ReactCardFlip from 'react-card-flip';

import { Card } from './styles';

interface ICardFlipProps {
  icon: JSX.Element;
  isFlipped: boolean;
  title: string;
  content: string[];
  handleOnHover(): void;
  handleOnLeave(): void;
}

const CardFlip: React.FC<ICardFlipProps> = ({
  icon,
  isFlipped,
  title,
  content,
  handleOnHover,
  handleOnLeave,
}) => {
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <Card
        isFlipped={isFlipped}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnLeave}
      >
        <div>{icon}</div>
        <div>{title}</div>
      </Card>
      <Card isFlipped={isFlipped}>
        {content.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Card>
    </ReactCardFlip>
  );
};

export default CardFlip;
