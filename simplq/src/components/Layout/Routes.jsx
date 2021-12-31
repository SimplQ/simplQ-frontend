import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import JoinQueueWithDetails from 'components/pages/Join/JoinPage';
import TokenStatusPage from 'components/pages/TokenStatus/TokenStatusPage';
import AdminPage from 'components/pages/Admin/AdminPage';
import PageNotFound from 'components/pages/PageNotFound';
import PopupNotifications from 'components/common/Popup';
import HomePage from 'components/pages/Home/HomePage';
import TermsOfService from 'components/pages/TermsOfService';
import Navbar from 'components/common/Nav/Navbar';
import { ErrorBoundary } from '../ErrorHandler';
import QrScanner from 'components/common/QrScanner/QrScanner';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/queue/:queueId" element={<AdminPage />} />
          <Route path="/j/:queueName" element={<JoinQueueWithDetails />} />
          <Route path="/token/:tokenId" element={<TokenStatusPage />} />
          <Route path="/privacy" element={<TermsOfService />} />
          <Route path="/scanQr" element={<QrScanner />} />
          <Route path="/pageNotFound/queueName=:queueName" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <PopupNotifications />
      </ErrorBoundary>
    </>
  );
};
