import React from 'react';
import { Banner, BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';

const Home = (props) => {
  return (
    // <ComposeInSinglePage>
    <>
      <Banner history={props.history} />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
      {/* </ComposeInSinglePage> */}
    </>
  );
};

export default Home;
