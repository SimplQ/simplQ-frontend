import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Item from './Item';
import styles from '../../../styles/adminPage.module.scss';

function ItemList(props) {
  const queueId = props.queueId;
  let listContent = null;

  if (!props.items) {
    listContent = (
      <div className={styles['item-list']}>
        <CircularProgress />
      </div>
    );
  } else if (props.items.length === 0) {
    listContent = (
      <div className={styles['item-list']}>
        <p>Your queue has been created and is currently empty. Waiting for people to join...</p>
      </div>
    );
  } else {
    listContent = (
      <div className={styles['item-list']}>
        {props.items.map((item) => (
          <Item
            removeItemHandler={props.removeItemHandler}
            item={item}
            queueId={queueId}
            key={item.tokenId}
          />
        ))}
      </div>
    );
  }

  return listContent;
}

export default ItemList;
