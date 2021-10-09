import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectTokensByQueueName } from 'store/tokens';
import { useGetUserTokens } from 'store/asyncActions';
import styles from './MyTokens.module.scss';

export default ({ queueInfo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const myTokens = useSelector(selectTokensByQueueName(queueInfo.queueName));
  const getUserTokens = useCallback(useGetUserTokens(), []);

  const queueId = queueInfo.queueId;

  useEffect(() => {
    dispatch(getUserTokens({ queueId }));
  }, [queueId, dispatch, getUserTokens]);

  return (
    <div className={styles['my-token']}>
      <p>
        <b>{myTokens.length > 0 ? 'Your Tokens' : ''}</b>
      </p>
      {myTokens.map((token, idx) => {
        const handler = () => history.push(`/token/${token.tokenId}`);
        return (
          <div
            key={token.tokenId}
            tabIndex="0"
            role="button"
            onKeyDown={handler}
            onClick={handler}
            className={styles['my-token-item']}
          >
            <div>
              Token
              {idx + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
};
