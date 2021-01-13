/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import CropFreeIcon from '@material-ui/icons/CropFree';
import TokenList from './TokenList';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import ShareQueue from './ShareQueue';
import Header from '../../common/Header';
import styles from './admin.module.scss';
import SidePanel from './AdminSidePanel';
import StandardButton from '../../common/Button';
import Ribbon from '../../common/Ribbon';
import QRCode from '../../common/Popup/QrCode';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;

  const [tokens, setTokens] = useState();
  const [queueName, setQueueName] = useState();
  const [description, setDescription] = useState('');
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);

  const update = useCallback(() => {
    clearTimeout(timeoutId);
    QueueService.get(queueId).then((data) => {
      if (data) {
        setTokens(data.tokens);
        setQueueName(data.queueName);
        // TODO: setDescription as soon as the backend returns it
        setDescription('Ready to share');
      }
      timeoutId = setTimeout(update, TIMEOUT);
    });
  }, [queueId]);

  const generateQrCOde = useCallback(() => {
    setShowQrCodeModal(true);
  }, []);

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  const addNewToken = async (name, contactNumber) => {
    const response = await TokenService.create(name, contactNumber, false, queueId);
    if (!response) {
      return;
    }
    setTokens([
      ...tokens,
      {
        tokenId: response.tokenId,
        name,
        contactNumber,
        notifiable: false,
        tokenStatus: response.tokenStatus,
        tokenNumber: response.tokenNumber,
      },
    ]);
  };

  const removeToken = (tokenId) => {
    TokenService.remove(tokenId).then((response) => {
      if (response) {
        setTokens(tokens.filter((token) => token.tokenId !== tokenId));
      }
    });
  };

  const HeaderSection = () => (
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
            Generate QrCode
          </StandardButton>
          {showQrCodeModal && (
            <QRCode queueName={queueName} show={showQrCodeModal} onClose={setShowQrCodeModal} />
          )}
        </div>
        <div className={styles['admin-button']}>
          <StandardButton onClick={update} icon={<RefreshIcon />} outlined>
            Refresh status
          </StandardButton>
        </div>
        <div className={styles['admin-button']}>
          <ShareQueue queueName={queueName} className={styles.shareButton} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles['admin-content']}>
      <HeaderSection />
      <Ribbon />
      <div className={styles['main-body']}>
        <TokenList tokens={tokens} queueId={queueId} removeTokenHandler={removeToken} />
        <SidePanel queueId={queueId} joinQueueHandler={addNewToken} />
      </div>
    </div>
  );
};
