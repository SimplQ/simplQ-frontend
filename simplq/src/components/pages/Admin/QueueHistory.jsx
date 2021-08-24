import React, { useEffect, useState } from 'react';
import HistoryIcon from '@material-ui/icons/History';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useSelector } from 'react-redux';
import { selectRemoveTokens, selectTokens } from 'store/selectedQueue';

import moment from 'moment';
import AddedInQueue from '../QueueHistory/AddedInQueue';
import RemovedFromQueue from '../QueueHistory/RemovedFromQueue';

export default () => {
  const [tokens, setTokens] = useState([]);
  const [removedTokens, setRemovedTokens] = useState([]);
  const [queueHistory, setQueueHistory] = useState([]);

  const added = useSelector(selectTokens);
  const removed = useSelector(selectRemoveTokens);

  useEffect(() => {
    (async () => {
      let lastAdded = [];
      let lastRemoved = [];
      let lastRemovedPrime = [];
      if (added) {
        lastAdded = await added.filter((item) => {
          let isPresent = false;
          tokens.forEach((token) => {
            if (item.tokenId === token.tokenId) {
              isPresent = true;
            }
          });

          return !isPresent;
        });
      }
      if (removed) {
        lastRemoved = await removed.filter((item) => {
          let isPresent = false;
          removedTokens.forEach((removedToken) => {
            if (item.tokenId === removedToken.tokenId) {
              isPresent = true;
            }
          });

          return !isPresent;
        });
        lastRemovedPrime = await lastRemoved.map((item) => {
          const newObj = { ...item };
          newObj.tokenCreationTimestamp = new Date().getTime();
          return newObj;
        });
      }

      setTokens([...tokens, ...lastAdded]);
      setRemovedTokens([...removedTokens, ...lastRemovedPrime]);
      setQueueHistory([...tokens, ...removedTokens]);
    })();
  }, [added, removed]);

  const sortData = () => {
    let sortedData = queueHistory;
    sortedData = sortedData.sort(function (x, y) {
      return new Date(y.tokenCreationTimestamp) - new Date(x.tokenCreationTimestamp);
    });
    return sortedData;
  };

  console.log('sortData', sortData());

  const creationTime = (timeStamp) => {
    if (!timeStamp) return '';

    const localTimeStamp = moment(timeStamp);
    return `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;
  };

  return (
    <SidePanelItem
      Icon={HistoryIcon}
      title="Queue History"
      description="History of events in the queue"
      expandable
    >
      {sortData().map((item) => {
        return (
          <>
            {item.tokenStatus === 'WAITING' ? (
              <AddedInQueue
                creationTime={creationTime}
                name={item.name}
                tokenNumber={item.tokenNumber}
                tokenCreationTimestamp={item.tokenCreationTimestamp}
              />
            ) : (
              <RemovedFromQueue
                creationTime={creationTime}
                name={item.name}
                tokenNumber={item.tokenNumber}
                tokenCreationTimestamp={item.tokenCreationTimestamp}
              />
            )}
          </>
        );
      })}
    </SidePanelItem>
  );
};
