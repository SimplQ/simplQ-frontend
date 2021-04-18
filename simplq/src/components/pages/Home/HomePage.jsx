import React, { useEffect } from 'react';
import { smoothScrollToHomePageTop } from 'utils/scrollingOperations';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo, Pricing } from './StaticInfos';
import LandingPage from './LandingPage';

const HomePage = () => {
  // Scroll to top whenever home page is mounted
  useEffect(smoothScrollToHomePageTop, []);
  return (
    <>
      <LandingPage />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
      <Pricing />
    </>
  );
};

export default HomePage;
