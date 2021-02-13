import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetToken } from 'store/asyncActions';
import { selectToken } from 'store/token';
import styles from './status.module.scss';
import HeaderSection from '../../common/HeaderSection';
import StatusContainer from './StatusContainer';
import StatusSidePanel from './StatusSidePanel';
import TokenNumber from './TokenNumber';

// TODO Rename component to token status, component and folder/page name
function QueueStatus(props) {
  const tokenId = props.match.params.tokenId;
  const dispatch = useDispatch();
  const { token, loaded } = useSelector(selectToken);
  const getToken = useGetToken();

  useEffect(() => {
    dispatch(getToken({ tokenId, refresh: true }));
  }, [tokenId, dispatch, getToken]);

  return (
    <>
      <HeaderSection queueName={loaded ? token.queueName : 'Loading...'} />
      <div className={styles['main-body']}>
        <TokenNumber />
        <StatusContainer />
        <StatusSidePanel />
      </div>
    </>
  );
}

export default QueueStatus;
