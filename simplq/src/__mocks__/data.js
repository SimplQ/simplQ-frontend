export const queues = {
  queues: [
    {
      queueId: '49891e84-63a5-4c7b-9200-0c1e65393572',
      queueName: 'QueueI',
      queueCreationTimestamp: '2021-02-14T04:28:59.776+0000',
    },
    {
      queueId: 'cef39fc3-f947-450b-ad69-0e18dc406653',
      queueName: 'QueueII',
      queueCreationTimestamp: '2021-02-14T08:47:29.988+0000',
    },
    {
      queueId: '7121848f-023b-482a-9b9c-f7e7cd7b8904',
      queueName: 'QueueIII',
      queueCreationTimestamp: '2021-02-14T11:50:09.218+0000',
    },
    {
      queueId: '0d6c1a43-ec5f-48b2-be8b-1414eef39584',
      queueName: 'QueueIV',
      queueCreationTimestamp: '2021-02-14T11:51:04.540+0000',
    },
    {
      queueId: '376ef115-12f1-4845-a5b7-f8fa190a866e',
      queueName: 'Q',
      queueCreationTimestamp: '2021-02-12T23:16:49.009+0000',
    },
  ],
};

export const queue = {
  queueId: '376ef115-12f1-4845-a5b7-f8fa190a866e',
  queueName: 'Q',
  queueCreationTimestamp: '2021-02-12T23:16:49.009+0000',
  tokens: [
    {
      name: 'T 1',
      contactNumber: '916565656565',
      tokenId: 'b44b496c-604f-4441-9a99-423188957412',
      tokenNumber: 1,
      tokenCreationTimestamp: '2021-02-13T16:52:40.739+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
    {
      name: 'T 2',
      contactNumber: '4545454545',
      tokenId: 'eea174db-fc27-4dbb-9c7a-f0e0f0783202',
      tokenNumber: 2,
      tokenCreationTimestamp: '2021-02-13T16:53:02.232+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
    {
      name: 'T 3',
      contactNumber: '915454545454',
      tokenId: '9c89bf98-440f-48cf-a061-a986930edc7b',
      tokenNumber: 3,
      tokenCreationTimestamp: '2021-02-13T16:54:26.175+0000',
      tokenStatus: 'WAITING',
      notifiable: true,
    },
    {
      name: 'T 4',
      contactNumber: '916565656565',
      tokenId: '2ae5ff76-8507-4887-b069-5f78bd791109',
      tokenNumber: 4,
      tokenCreationTimestamp: '2021-02-13T17:00:05.468+0000',
      tokenStatus: 'NOTIFIED',
      notifiable: true,
    },
    {
      name: 'T 5',
      contactNumber: '915656656656',
      tokenId: '38c84086-053f-48f6-8924-15c282a73926',
      tokenNumber: 5,
      tokenCreationTimestamp: '2021-02-13T17:00:25.281+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
    {
      name: 'T 6',
      contactNumber: '914545454545',
      tokenId: '55bb5336-5d32-48e4-9e6a-1024a4d346bb',
      tokenNumber: 6,
      tokenCreationTimestamp: '2021-02-13T17:13:37.161+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
    {
      name: 'T 7',
      contactNumber: '914545454545',
      tokenId: '29217695-91ae-438a-8124-2f83e6c8a4cd',
      tokenNumber: 7,
      tokenCreationTimestamp: '2021-02-13T20:04:36.072+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
    {
      name: 'T 8',
      contactNumber: '914545454545',
      tokenId: '778a3ac4-73ce-4dc8-bc0a-660e04697bfe',
      tokenNumber: 8,
      tokenCreationTimestamp: '2021-02-13T20:04:41.798+0000',
      tokenStatus: 'WAITING',
      notifiable: false,
    },
  ],
};

export const removedToken = { queueName: 'm1', tokenStatus: 'REMOVED' };

export const deletedQueue = {
  queueId: '0671f7bf-8a0b-49a5-941e-1e315634f38e',
  queueName: 'd',
  status: 'DELETED',
};

export const queueInfo = {
  queueId: '376ef115-12f1-4845-a5b7-f8fa190a866e',
  queueName: 'Q',
  status: 'ACTIVE',
  numberOfActiveTokens: 7,
  totalNumberOfTokens: 8,
  queueCreationTimestamp: '2021-02-12T23:16:49.009+0000',
};

export const createdToken = {
  tokenId: 'a9b9fc18-04d6-4c1f-98b6-ae919061627d',
  name: 'MMM',
  contactNumber: '914444444444',
  tokenNumber: 3,
  tokenStatus: 'WAITING',
  queueName: 'asdsad',
  queueId: '49891e84-63a5-4c7b-9200-0c1e65393572',
  aheadCount: 2,
  notifiable: false,
  tokenCreationTimestamp: '2021-02-16T13:38:16.058+0000',
};
