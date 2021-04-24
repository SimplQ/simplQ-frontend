import React from 'react';
import Loading from 'components/common/Loading/Loading';
import { useSelector } from 'react-redux';
import { selectTokens } from 'store/selectedQueue';
import { QrCode } from 'components/common/Popup/QrCode';
import Token from './Token';
import styles from './admin.module.scss';

const EmptyTokenList = ({ queueName }) => {
  return (
    <>
      <p>
        Your line has been created and is currently empty. Add people to the line and share the
        below QR code for them to see their status
      </p>
      <QrCode queueName={queueName} />
    </>
  );
};

const TokenList = ({ queueName }) => {
  const tokens = useSelector(selectTokens);
  const ListContent = () =>
    tokens.length === 0 ? (
      <EmptyTokenList queueName={queueName} />
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
};

export default TokenList;
