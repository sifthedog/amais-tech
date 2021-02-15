import React from 'react';
import { CustomArrowProps } from 'react-slick';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import { Arrow } from './styles';

export interface IProps extends CustomArrowProps {
  side: string;
}

interface IArrowSideHash {
  [key: string]: React.ReactElement;
}

const arrowSide: IArrowSideHash = {
  left: <FaChevronCircleLeft />,
  right: <FaChevronCircleRight />,
};

const SliderArrow: React.FC<IProps> = ({ side, onClick, style }) => {
  return (
    <Arrow style={{ ...style }} onClick={onClick}>
      {arrowSide[side]}
    </Arrow>
  );
};

export default SliderArrow;
