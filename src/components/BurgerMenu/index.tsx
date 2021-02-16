import React, { useState } from 'react';
import RightNavbar from '../RightNavbar';

import { Burger } from './styles';

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <RightNavbar open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default BurgerMenu;
