import React, { useState, useEffect, useCallback } from 'react';
import TokenList from './TokenList';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import ShareBar from './ShareBar';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/adminPage.module.scss';
import AddMember from './AddMember';

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

  const addNewToken = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, false, queueId)
      .then((response) => {
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
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  const removeToken = (tokenId) => {
    TokenService.remove(tokenId)
      .then(() => setTokens(tokens.filter((token) => token.tokenId !== tokenId)))
      .catch((err) => handleApiErrors(err));
  };

  return (
    <>
      <SimplQHeader />
      <Header className={styles.header} text={queueName} />
      <ShareBar
        queueId={queueId}
        className={styles.shareButton}
        onRefresh={() => {
          update();
        }}
      />
      <div className={styles.list}>
        <TokenList tokens={tokens} queueId={queueId} removeTokenHandler={removeToken} />
      </div>
      <div className={styles['add-member']}>
        <AddMember queueId={queueId} joinQueueHandler={addNewToken} />
      </div>
    </>
  );
};
