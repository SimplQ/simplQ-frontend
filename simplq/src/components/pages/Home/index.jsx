import React from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo, Footer } from './StaticInfos';
import LandingPage from './LandingPage';

const Home = (props) => {
  return (
    <>
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
