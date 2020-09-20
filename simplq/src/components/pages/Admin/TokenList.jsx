import React from 'react';
import Token from './Token';
import styles from '../../../styles/adminPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

function TokenList(props) {
  const queueId = props.queueId;
  let listContent = null;

  if (!props.tokens) {
    listContent = (
      <div className={styles['token-list']}>
        <LoadingIndicator />
      </div>
    );
  } else if (props.tokens.length === 0) {
    listContent = (
      <div className={styles['token-list']}>
        <p>Your queue has been created and is currently empty. Waiting for people to join...</p>
      </div>
    );
  } else {
    listContent = (
      <div className={styles['token-list']}>
        {props.tokens.map((token) => (
          <Token
            removeTokenHandler={props.removeTokenHandler}
            token={token}
            queueId={queueId}
            key={token.tokenId}
          />
        ))}
      </div>
    );
  }

  return listContent;
}

export default TokenList;
