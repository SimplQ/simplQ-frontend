import React from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo, Footer } from './StaticInfos';
import LandingPage from './LandingPage';
import Navbar from './Nav/Navbar';

const Home = (props) => {
  return (
    <>
      <Navbar />
      <LandingPage history={props.history} />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
      <Footer />
    </>
  );
};

export default Home;
