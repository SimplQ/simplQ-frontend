import React, { useState, useEffect, useCallback } from 'react';
import TokenList from './TokenList';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import ShareQueue from './ShareQueue';
import { handleApiErrors } from '../../ErrorHandler';
import { RefreshButton } from '../../common/Button/Button.stories';
import Header from '../../common/Header';
import styles from '../../../styles/adminPage.module.scss';
import AddMember from './AddMember';
import PauseQueue from './PauseQueue';
import DeleteQueue from './DeleteQueue';
import QueueHistory from './QueueHistory';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;

  const [tokens, setTokens] = useState();
  const [queueName, setQueueName] = useState();
  const update = useCallback(() => {
    clearTimeout(timeoutId);
    QueueService.get(queueId)
      .then((data) => {
        setTokens(data.tokens);
        setQueueName(data.queueName);
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
      <Header className={styles['header']} text={queueName} />
      <div className={styles['main-button-group']}>
        <div className={styles['admin-button']}>
          <RefreshButton onClick={update} />
        </div>
        <div className={styles['admin-button']}>
          <ShareQueue queueId={queueId} className={styles.shareButton} />
        </div>
      </div>
    </div>
  );

  const Navbar = () => (
    <div>
      <nav className={styles['navbar']}>
        {/* <img src="public/LogoLight.png" alt="Home" /> */}
        {/* <p className={styles['simplq']}>SimplQ</p>
        <p className={styles['sign-in']}>Sign In / Sign Up</p> */}
      </nav>
    </div>
  );

  return (
    <>
      {Navbar()}
      {HeaderSection()}
      <div className={styles['main-body']}>
        <div className={styles['token-list']}>
          <TokenList tokens={tokens} queueId={queueId} removeTokenHandler={removeToken} />
        </div>
        <div className={styles['sidebar']}>
          <div className={styles['card']}>
            <AddMember queueId={queueId} joinQueueHandler={addNewToken} />
          </div>
          <div className={styles['card']}>
            <PauseQueue />
          </div>
          <div className={styles['card']}>
            <DeleteQueue />
          </div>
          <div className={styles['card']}>
            <QueueHistory />
          </div>
        </div>
      </div>
    </>
  );
};
