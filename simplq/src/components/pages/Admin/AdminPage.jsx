/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Ribbon from 'components/common/Ribbon';
import Tour from 'components/common/Tour';
import { QueueRequestFactory } from 'api/requestFactory';
import useRequest from 'api/useRequest';
import HeaderSection from './AdminHeaderSection';
import TokenList from './TokenList';
import styles from './admin.module.scss';
import SidePanel from './AdminSidePanel';
import getToursteps from './TourSteps';

const TIMEOUT = 10000;
let timeoutId;

export default (props) => {
  const queueId = props.match.params.queueId;

  const [tokens, setTokens] = useState();
  const [queueName, setQueueName] = useState();
  const [description, setDescription] = useState('');

  const [toursteps, setToursteps] = useState(getToursteps(window.innerHeight));
  const { isAuthenticated } = useAuth0();
  const { requestMaker } = useRequest();

  const update = useCallback(() => {
    clearTimeout(timeoutId);
    requestMaker(QueueRequestFactory.get(queueId)).then((data) => {
      if (data) {
        setTokens(data.tokens);
        setQueueName(data.queueName);
        // TODO: setDescription as soon as the backend returns it
        setDescription('Ready to share');
      }
      timeoutId = setTimeout(update, TIMEOUT);
    });
  }, [queueId, requestMaker]);

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
        <TokenList tokens={tokens} queueId={queueId} />
        <SidePanel queueId={queueId} />
      </div>
    </div>
  );
};
