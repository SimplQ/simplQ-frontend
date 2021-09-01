import React, { useEffect, useState } from 'react';
import HistoryIcon from '@material-ui/icons/History';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useSelector } from 'react-redux';
import { selectRemovedTokens, selectTokens } from 'store/selectedQueue';
import moment from 'moment';
import QueueHistoryListItem from '../QueueHistory/QueueHistoryListItem.jsx';
import styles from './QueueHistory.module.scss';

const MAX_ITEMS = 6;

export default () => {
  const [tokens, setTokens] = useState([]);
  const [removedTokens, setRemovedTokens] = useState([]);
  const [queueHistory, setQueueHistory] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(0);
  const [sortedData, setSortedData] = useState([]);

  const added = useSelector(selectTokens);
  const removed = useSelector(selectRemovedTokens);

  useEffect(() => {
    (async () => {
      let lastAdded = [];
      let lastRemoved = [];
      let lastRemovedPrime = [];
      if (added) {
        lastAdded = added.filter((item) => {
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
        lastRemoved = removed.filter((item) => {
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
    let data = queueHistory;
    data = data.sort(function (x, y) {
      return new Date(y.tokenCreationTimestamp) - new Date(x.tokenCreationTimestamp);
    });
    return data;
  };

  useEffect(() => {
    setSortedData(sortData());
  }, [queueHistory]);

  const creationTime = (timeStamp) => {
    if (!timeStamp) return '';

    const localTimeStamp = moment(timeStamp);
    return `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;
  };

  const increaseCount = () => {
    if (count === sortedData.length / MAX_ITEMS) {
      return;
    }
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <SidePanelItem
      Icon={HistoryIcon}
      title="Queue History"
      description="History of events in the queue"
      expandable
    >
      {showMore
        ? sortedData.slice(count * MAX_ITEMS, (count + 1) * MAX_ITEMS).map((item) => {
            return (
              <QueueHistoryListItem
                creationTime={creationTime}
                name={item.name}
                tokenNumber={item.tokenNumber}
                tokenCreationTimestamp={item.tokenCreationTimestamp}
                tokenStatus={item.tokenStatus}
              />
            );
          })
        : sortedData.slice(0, 2).map((item) => {
            return (
              <QueueHistoryListItem
                creationTime={creationTime}
                name={item.name}
                tokenNumber={item.tokenNumber}
                tokenCreationTimestamp={item.tokenCreationTimestamp}
                tokenStatus={item.tokenStatus}
              />
            );
          })}
      {showMore ? (
        <>
          <button
            type="button"
            className={styles['show-button']}
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show Less
          </button>
          <button type="button" onClick={decreaseCount} className={styles['show-button']}>
            Prev
          </button>
          <button type="button" onClick={increaseCount} className={styles['show-button']}>
            Next
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            setShowMore(!showMore);
          }}
          className={styles['show-button']}
        >
          Show More ...
        </button>
      )}
    </SidePanelItem>
  );
};
