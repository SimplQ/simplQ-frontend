import HeaderSection from 'components/common/HeaderSection';
import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useGetToken } from 'store/asyncActions';
import { selectToken } from 'store/token';
import styles from './status.module.scss';
import StatusContainer from './StatusContainer';
import StatusSidePanel from './StatusSidePanel';
import TokenNumber from './TokenNumber';

// TODO Rename component to token status, component and folder/page name
function QueueStatus(props) {
  const tokenId = props.match.params.tokenId;
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const getToken = useCallback(useGetToken(), []);

  useEffect(() => {
    dispatch(getToken({ tokenId, refresh: true }));
  }, [tokenId, dispatch, getToken]);

  return (
    <>
      <HeaderSection queueName={token ? token.queueName : 'Loading...'} />
      <div className={styles['main-body']}>
        <TokenNumber />
        <StatusContainer />
        <StatusSidePanel />
      </div>
    </>
  );
}

export default QueueStatus;
