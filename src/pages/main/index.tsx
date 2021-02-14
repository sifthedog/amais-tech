import React from 'react';
import Topbar from '../../components/Topbar';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Topbar />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Main;
