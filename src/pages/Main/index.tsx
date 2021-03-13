import React from 'react';
import Topbar from '../../components/Topbar';
import AboutUs from '../../components/AboutUs';
import Solutions from '../../components/Solutions';
import Cases from '../../components/Cases';
import Customers from '../../components/Customers';
import Partners from '../../components/Partners';
import Contact from '../../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Topbar />
      <AboutUs />
      <Solutions />
      <Customers />
      <Partners />
      <Contact />
    </>
  );
};

export default Main;
