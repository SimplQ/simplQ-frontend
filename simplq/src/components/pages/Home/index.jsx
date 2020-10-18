import React from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';
import LandingPage from './LandingPage';
import Navbar from '../../common/Nav/Navbar';

const Home = (props) => {
  return (
    <>
      <Navbar />
      <LandingPage history={props.history} />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </>
  );
};

export default Home;
