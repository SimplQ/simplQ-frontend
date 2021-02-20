/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { useAuth0 } from '@auth0/auth0-react';
import Header from 'components/common/Header';
import StandardButton from 'components/common/Button';
import Ribbon from 'components/common/Ribbon';
import QRCode from 'components/common/Popup/QrCode';
import Tour from 'components/common/Tour';
import { TokenRequestFactory, QueueRequestFactory } from 'api/requestFactory';
import useRequest from 'api/useRequest';
import TokenList from './TokenList';
import ShareQueue from './ShareQueue';
import styles from './admin.module.scss';
import SidePanel from './AdminSidePanel';
import getToursteps from './TourSteps';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;

  const [tokens, setTokens] = useState();
  const [queueName, setQueueName] = useState();
  const [description, setDescription] = useState('');
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);

  const [toursteps, setToursteps] = useState(getToursteps(window.innerHeight));
  const { isAuthenticated } = useAuth0();
  const { requestMaker } = useRequest();

  const update = useCallback(() => {
    clearTimeout(timeoutId);
    requestMaker(QueueRequestFactory.get(queueId)).then((data) => {
      if (data) {
        setTokens(data.tokens);
        setQueueName(data.queueName);
        // TODO: setDescription as soon as the backend returns it
        setDescription('Ready to share');
      }
      timeoutId = setTimeout(update, TIMEOUT);
    });
  }, [queueId, requestMaker]);

  const generateQrCOde = useCallback(() => {
    setShowQrCodeModal(true);
  }, []);

  const resize = () => setToursteps(getToursteps(window.innerWidth));

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  const addNewToken = async (name, contactNumber) => {
    const response = await requestMaker(
      TokenRequestFactory.create(name, contactNumber, false, queueId)
    );
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
    requestMaker(TokenRequestFactory.remove(tokenId)).then((response) => {
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
            Generate QR Code
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
          <ShareQueue tourTag="reactour__shareQueue" queueName={queueName} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles['admin-content']}>
      <Tour toursteps={toursteps} />
      <HeaderSection />
      {isAuthenticated ? null : (
        <Ribbon
          title="Temporary queue warning!"
          subTitle="Please sign up to make your queue permanent."
        />
      )}
      <div className={styles['main-body']}>
        <TokenList tokens={tokens} queueId={queueId} removeTokenHandler={removeToken} />
        <SidePanel queueId={queueId} joinQueueHandler={addNewToken} />
      </div>
    </div>
  );
};
