import React from 'react';
import Topbar from '../../components/Topbar';
import AboutUs from '../../components/AboutUs';
import BreakStripe from '../../components/BreakStripe';
import Solutions from '../../components/Solutions';
import Cases from '../../components/Cases';
import Contact from '../../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Topbar />
      <BreakStripe />
      <AboutUs />
      <Solutions />
      <Cases />
      <Contact />
    </>
  );
};

export default Main;
