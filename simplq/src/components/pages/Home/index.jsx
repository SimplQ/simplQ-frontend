import React from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';
import LandingPage from './LandingPage';
import Navbar from '../../common/Nav/Navbar';
import Footer from '../../common/Footer';

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
