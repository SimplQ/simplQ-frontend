import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CircularProgress } from '@material-ui/core';
import Item from './Item';

function ItemList(props) {
  const queueId = props.queueId;
  let listContent = null;

  if (!props.items) {
    listContent = <CircularProgress style={{ margin: 'auto' }} />;
  } else if (props.items.length === 0) {
    listContent = (
      <>
        <ListItem button>
          <ListItemText
            primaryTypographyProps={{ align: 'center' }}
            primary="Your queue has been created and is currently empty. Waiting for people to join..."
          />
        </ListItem>
      </>
    );
  } else {
    listContent = (
      <div style={{ width: '100%' }}>
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

  return (
    <List>
      <div style={{ minHeight: '200px', display: 'flex' }}>{listContent}</div>
    </List>
  );
}

export default ItemList;
