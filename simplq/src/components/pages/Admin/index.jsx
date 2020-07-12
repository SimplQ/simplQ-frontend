import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import { progressCreationStep } from '../../../store/appSlice';
import ShareBar from './ShareBar';
import PageNotFound from '../PageNotFound';
import CreatorStepper from '../../common/stepper/CreatorStepper';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/adminPage.module.scss';
import AddMember from './AddMember';

const TIMEOUT = 10000;
let timeoutId;

export default () => {
  const dispatch = useDispatch();
  const queueId = useSelector((state) => state.appReducer.queueId);
  const queueName = useSelector((state) => state.appReducer.queueName);

  if (!queueId) {
    // If queue id is not here, most probably his session storage got cleared. This can be solved only with proper auth.
    return <PageNotFound />;
  }

  dispatch(progressCreationStep(1));

  const [items, setItems] = useState();

  const update = useCallback(() => {
    clearTimeout(timeoutId);
    if (queueId) {
      QueueService.get(queueId)
        .then((data) => {
          setItems(data.tokens);
          timeoutId = setTimeout(update, TIMEOUT);
        })
        .catch((err) => {
          handleApiErrors(err);
          timeoutId = setTimeout(update, TIMEOUT);
        });
    }
  }, [queueId]);

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  const addNewItem = (name, contact) => {
    TokenService.create(name, contact, false, queueId)
      .then((response) => {
        setItems([...items, { tokenId: response.tokenId, name, contact, notifyable: false }]);
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  const removeItemHandler = (tokenId) => {
    setItems(items.filter((item) => item.tokenId !== tokenId));
  };

  return (
    <>
      <SimplQHeader />
      <Header className={styles.header} text={queueName} />
      <CreatorStepper />
      <ShareBar
        queueId={queueId}
        className={styles.shareButton}
        onRefresh={() => {
          update();
        }}
      />
      <div className={styles.list}>
        <ItemList
          items={items}
          queueId={queueId}
          joinQueueHandler={addNewItem}
          removeItemHandler={removeItemHandler}
        />
      </div>
      <div className={styles['add-member']}>
        <AddMember queueId={queueId} joinQueueHandler={addNewItem} />
      </div>
    </>
  );
};
