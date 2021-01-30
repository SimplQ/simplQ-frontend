import React from 'react';
import QueueStats from '.';

export default {
  component: QueueStats,
  title: 'QueueStats',
};

const queueStatus = {
  queueId: '49b1ffa6-87fd-4a46-b95f-5588711cecca',
  queueName: 'aa',
  status: 'ACTIVE',
  numberOfActiveTokens: 0,
  totalNumberOfTokens: 0,
  queueCreationTimestamp: '2020-12-15T08:07:55.374+0000',
};

export const Active = () => <QueueStats queueStatus={queueStatus} />;
export const Paused = () => <QueueStats queueStatus={{ ...queueStatus, status: 'PAUSED' }} />;
export const Deleted = () => <QueueStats queueStatus={{ ...queueStatus, status: 'DELETED' }} />;
