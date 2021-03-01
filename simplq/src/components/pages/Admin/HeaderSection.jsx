import React, { useState, useCallback } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { useDispatch } from 'react-redux';

import Header from 'components/common/Header';
import StandardButton from 'components/common/Button';
import QRCode from 'components/common/Popup/QrCode';
import { useGetSelectedQueue } from 'store/asyncActions';
import ShareQueue from './ShareQueue';
import styles from './admin.module.scss';

const HeaderSection = ({ description, queueName, queueId }) => {
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);
  const dispatch = useDispatch();
  const getSelectedQueue = useGetSelectedQueue();

  const handleRefreshClick = () => {
    dispatch(getSelectedQueue({ queueId }));
  };

  const generateQrCOde = useCallback(() => {
    setShowQrCodeModal(true);
  }, []);

  return (
    <div className={styles['header-bar']}>
      <div className={styles['header-title']}>
        <Header className={styles['header']}>{queueName}</Header>
        <div className={styles['sub-header']}>
          <h2>{description}</h2>
        </div>
      </div>
      <div className={styles['main-button-group']}>
        <div className={styles['admin-button']}>
          <StandardButton onClick={generateQrCOde} icon={<CropFreeIcon />} outlined>
            Generate QR Code
          </StandardButton>
          {showQrCodeModal && (
            <QRCode queueName={queueName} show={showQrCodeModal} onClose={setShowQrCodeModal} />
          )}
        </div>
        <div className={styles['admin-button']}>
          <StandardButton onClick={handleRefreshClick} icon={<RefreshIcon />} outlined>
            Refresh status
          </StandardButton>
        </div>
        <div className={styles['admin-button']}>
          <ShareQueue tourTag="reactour__shareQueue" queueName={queueName} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
