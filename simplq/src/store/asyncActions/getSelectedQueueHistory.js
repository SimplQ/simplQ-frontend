import {createAsyncThunk} from '@reduxjs/toolkit';
import {useMakeAuthedRequest} from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getSelectedQueueHistory/action';

/**
 * A hook to access the getSelectedQueueHistory async action creator.
 *
 * @returns — getSelectedQueueHistory async action creator
 */
const useGetSelectedQueueHistory = () => {
  const makeAuthedRequest = useMakeAuthedRequest ();

  const getSelectedQueueHistory = createAsyncThunk (
    typePrefix,
    async ({queueId}) => {
      const authedRequest = makeAuthedRequest (
        RequestFactory.getQueueHistory (queueId)
      );
      const response = await authedRequest;
      return response;
    }
  );

  return getSelectedQueueHistory;
};

const getSelectedQueueHistory = createAsyncThunk (typePrefix);

export {getSelectedQueueHistory, useGetSelectedQueueHistory};
