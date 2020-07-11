import React from 'react';
import {
  ButtonGroup,
  Banner,
  BenefitsInfo,
  HowToCreate,
  HowToJoin,
  ExtraInfo,
} from './StaticInfos';

const Home = (props) => {
  return (
    <>
      <Banner />
      <ButtonGroup history={props.history} />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </>
  );
};

export default Home;
