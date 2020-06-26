import React from 'react';
import { Banner, BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';

const Home = () => {
  return (
    // <ComposeInSinglePage>
    <>
      <Banner />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
      {/* </ComposeInSinglePage> */}
    </>
  );
};

export default Home;
