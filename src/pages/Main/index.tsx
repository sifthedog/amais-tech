import React from 'react';
import Topbar from '../../components/Topbar';
import AboutUs from '../../components/AboutUs';
import Solutions from '../../components/Solutions';
import Cases from '../../components/Cases';
import Customers from '../../components/Customers';
import Contact from '../../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Topbar />
      <AboutUs />
      <Solutions />
      <Cases />
      <Customers />
      <Contact />
    </>
  );
};

export default Main;
