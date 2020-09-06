import React, { useState, useEffect, useCallback } from 'react';
import ItemList from './ItemList';
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

  const [items, setItems] = useState();
  const [queueName, setQueueName] = useState();
  const update = useCallback(() => {
    clearTimeout(timeoutId);
    QueueService.get(queueId)
      .then((data) => {
        setItems(data.tokens);
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

  const addNewItem = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, false, queueId)
      .then((response) => {
        setItems([
          ...items,
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

  const removeItem = (tokenId) => {
    TokenService.remove(tokenId)
      .then(() => setItems(items.filter((item) => item.tokenId !== tokenId)))
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
        <ItemList items={items} queueId={queueId} removeItemHandler={removeItem} />
      </div>
      <div className={styles['add-member']}>
        <AddMember queueId={queueId} joinQueueHandler={addNewItem} />
      </div>
    </>
  );
};
