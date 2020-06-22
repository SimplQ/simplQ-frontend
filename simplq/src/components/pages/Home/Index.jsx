import React from 'react';

export default Home = (props) => {
  return (
    <ComposeInSinglePage>
      <Banner />
      <CreateQButton />
      <JoinQButton />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </ComposeInSinglePage>
  );
};
