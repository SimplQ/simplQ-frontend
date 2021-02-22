import React from 'react';
import Loading from 'components/common/Loading/Loading';
import Token from './Token';
import styles from './admin.module.scss';

function TokenList({ tokens }) {
  const Dispaly = () =>
    tokens.length === 0 ? (
      <p>Your queue has been created and is currently empty. Waiting for people to join...</p>
    ) : (
      tokens.map((token) => <Token token={token} key={token.tokenId} />)
    );

  return (
    <Loading isLoading={tokens === undefined}>
      <div className={styles['token-list']}>
        <Dispaly />
      </div>
    </Loading>
  );
}

export default TokenList;
