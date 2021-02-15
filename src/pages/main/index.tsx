import React from 'react';
import Topbar from '../../components/Topbar';
import AboutUs from '../../components/AboutUs';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Topbar />
      <AboutUs />
      <Solutions />
      <Contact />
    </>
  );
};

export default Main;
