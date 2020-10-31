import React from 'react';
import Routes from './Routes';
import Footer from './common/Footer';

function Layout() {
  return (
    <div className="box">
      <div className="row content">
        <Routes />
      </div>
      <div className="row footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
