/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueueName } from 'store/selectedQueue';
import Ribbon from 'components/common/Ribbon';
import Tour from 'components/common/Tour';
import { useGetSelectedQueue } from 'store/asyncActions';
import HeaderSection from './AdminHeaderSection';
import TokenList from './TokenList';
import styles from './admin.module.scss';
import SidePanel from './AdminSidePanel';
import getToursteps from './TourSteps';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;
  const queueName = useSelector(selectQueueName);
  const description = queueName && 'Ready to share';
  const dispatch = useDispatch();
  const getSelectedQueue = useGetSelectedQueue();

  const [toursteps, setToursteps] = useState(getToursteps(window.innerHeight));
  const { isAuthenticated } = useAuth0();
  const update = useCallback(() => {
    clearTimeout(timeoutId);
    dispatch(getSelectedQueue({ queueId }));
    timeoutId = setTimeout(update, TIMEOUT);
    // TODO: Check if this is good solution.
    /* eslint-disable-next-line */
  }, [queueId]);

  const resize = () => setToursteps(getToursteps(window.innerWidth));

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  return (
    <div className={styles['admin-content']}>
      <Tour toursteps={toursteps} />
      <HeaderSection queueId={queueId} queueName={queueName} description={description} />
      {isAuthenticated ? null : (
        <Ribbon
          title="Temporary queue warning!"
          subTitle="Please sign up to make your queue permanent."
        />
      )}
      <div className={styles['main-body']}>
        <TokenList queueId={queueId} />
        <SidePanel queueId={queueId} />
      </div>
    </div>
  );
};
