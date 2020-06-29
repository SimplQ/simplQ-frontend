import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import * as QueueService from '../../../services/queue';
import { progressCreationStep } from '../../../store/appSlice';
import ShareBar from './ShareBar';
import PageNotFound from '../PageNotFound';
import CreatorStepper from '../../common/stepper/CreatorStepper';
import { handleApiErrors } from '../../ErrorHandler';
import { SimplQHeader } from '../../common/Header.stories';
import Header from '../../common/Header';
import styles from '../../../styles/adminPage.module.scss';

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

  const update = () => {
    if (queueId) {
      QueueService.readQueue(queueId)
        .then((data) => {
          setItems(data.users);
        })
        .catch((err) => {
          handleApiErrors(err);
        });
    }
  };

  const addNewItem = (name, contact) => {
    return QueueService.addtoQueue(name, contact, false, queueId)
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

  useEffect(update, [queueId]);

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
          setItems(false);
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
    </>
  );
};
