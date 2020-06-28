import React from 'react';
import { withRouter } from 'react-router';
import Routes from './Routes';

function Layout() {
  return (
    <>
      <Routes />
    </>
  );
}

export default withRouter(Layout);
