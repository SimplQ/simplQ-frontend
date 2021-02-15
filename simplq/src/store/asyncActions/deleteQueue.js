import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setInfoPopupMessage } from 'store/appSlice';

const typePrefix = 'deleteQueue/action';

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — deleteQueue async action creator
 */
const useDeleteQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteQueue = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.deleteQueue(queueId));
    const response = await authedRequest;
    if (arg.goHome) {
      history.push('/');
    }
    if (arg.popUp) {
      dispatch(setInfoPopupMessage('Successfully deleted queue'));
    }

    return response;
  });

  return deleteQueue;
};

const deleteQueue = createAsyncThunk(typePrefix);

export { deleteQueue, useDeleteQueue };
