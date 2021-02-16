import React from 'react';

import { StyledContainer } from './styles';

interface IProps {
  id?: string;
}

const Container: React.FC<IProps> = ({ id, children }) => {
  return <StyledContainer id={id}>{children}</StyledContainer>;
};

export default Container;
