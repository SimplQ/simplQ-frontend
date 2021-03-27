import React from 'react';
import Loading from 'components/common/Loading/Loading';
import { useSelector } from 'react-redux';
import { selectTokens } from 'store/selectedQueue';
import Token from './Token';
import styles from './admin.module.scss';

function TokenList() {
  const tokens = useSelector(selectTokens);
  const ListContent = () =>
    tokens.length === 0 ? (
      <p>Your queue has been created and is currently empty. Waiting for people to join...</p>
    ) : (
      tokens.map((token) => <Token token={token} key={token.tokenId} />)
    );

  return (
    <Loading isLoading={tokens === undefined}>
      <div className={styles['token-list']}>
        <ListContent />
      </div>
    </Loading>
  );
}

export default TokenList;
