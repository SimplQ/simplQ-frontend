import React from 'react';
import { Landing, BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';

const Home = (props) => {
  return (
    <>
      <Landing history={props.history} />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </>
  );
};

export default Home;
