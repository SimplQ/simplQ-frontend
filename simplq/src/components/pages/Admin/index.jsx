/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TokenList from './TokenList';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import ShareQueue from './ShareQueue';
import { handleApiErrors } from '../../ErrorHandler';
import { RefreshButton } from '../../common/Button/Button.stories';
import Header from '../../common/Header';
import styles from '../../../styles/adminPage.module.scss';
import SidePanel from './AdminSidePanel';
import { AdminNavbar } from '../../common/Nav/Navbar';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;

  const [tokens, setTokens] = useState();
  const [queueName, setQueueName] = useState();
  const [description, setDescription] = useState('');

  const update = useCallback(() => {
    clearTimeout(timeoutId);
    QueueService.get(queueId)
      .then((data) => {
        setTokens(data.tokens);
        setQueueName(data.queueName);
        // TODO: setDescription as soon as the backend returns it
        setDescription('Ready to share');
        timeoutId = setTimeout(update, TIMEOUT);
      })
      .catch((err) => {
        handleApiErrors(err);
        timeoutId = setTimeout(update, TIMEOUT);
      });
  }, [queueId]);

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  const addNewToken = async (name, contactNumber) => {
    try {
      const response = await TokenService.create(name, contactNumber, false, queueId);
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
    } catch (err) {
      handleApiErrors(err);
    }
  };

  const removeToken = (tokenId) => {
    TokenService.remove(tokenId)
      .then(() => setTokens(tokens.filter((token) => token.tokenId !== tokenId)))
      .catch((err) => handleApiErrors(err));
  };

  const HeaderSection = () => (
    <div className={styles['header-bar']}>
      <div className={styles['header-title']}>
        <Header className={styles['header']}>{queueName}</Header>
        <div className={styles['sub-header']}>
          <h2>{description}</h2>
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles['main-button-group']}>
        <div className={styles['admin-button']}>
          <RefreshButton onClick={update} />
        </div>
        <div className={styles['admin-button']}>
          <ShareQueue queueName={queueName} className={styles.shareButton} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles['admin-content']}>
      <AdminNavbar />
      <HeaderSection />
      <div className={styles['main-body']}>
        <TokenList tokens={tokens} queueId={queueId} removeTokenHandler={removeToken} />
        <SidePanel queueId={queueId} joinQueueHandler={addNewToken} />
      </div>
    </div>
  );
};
