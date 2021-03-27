import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setInfoPopupMessage } from 'store/appSlice';

const typePrefix = 'deleteToken/action';

/**
 * A hook to access the deleteToken async action creator.
 *
 * @returns — deleteToken async action creator
 */
const useDeleteToken = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteToken = createAsyncThunk(typePrefix, async (arg) => {
    const { tokenId } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.deleteToken(tokenId));
    const response = await authedRequest;
    // TODO: remove token from redux store on success
    if (arg.goHome) {
      dispatch(setInfoPopupMessage('Successfully left queue'));
      history.push('/');
    }
    return response;
  });

  return deleteToken;
};

const deleteToken = createAsyncThunk(typePrefix);

export { deleteToken, useDeleteToken };
