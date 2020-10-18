import React, { useEffect } from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';
import LandingPage from './LandingPage';
import Navbar from '../../common/Nav/Navbar';
import { scrollToHomePageTop } from '../../common/utilFns';

const Home = (props) => {
  // Scroll to top whenever home page is mounted
  useEffect(scrollToHomePageTop, []);
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
