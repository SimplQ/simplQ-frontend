import React from 'react';
import LoadingIndicator from 'components/common/LoadingIndicator';
import { selectActiveTokens } from 'store/queue';
import { useSelector } from 'react-redux';
import Token from './Token';
import styles from './admin.module.scss';

function TokenList({ queueId }) {
  let listContent = null;
  const tokens = useSelector(selectActiveTokens);

  if (!tokens) {
    listContent = (
      <div className={styles['token-list']}>
        <LoadingIndicator />
      </div>
    );
  } else if (tokens.length === 0) {
    listContent = (
      <div className={styles['token-list']}>
        <p>Your queue has been created and is currently empty. Waiting for people to join...</p>
      </div>
    );
  } else {
    listContent = (
      <div className={styles['token-list']}>
        {tokens.map((token) => (
          <Token token={token} queueId={queueId} key={token.tokenId} />
        ))}
      </div>
    );
  }

  return listContent;
}

export default TokenList;
