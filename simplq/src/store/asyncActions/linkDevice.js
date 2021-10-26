import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'linkDevice/action';

/**
 * A hook to access the linkDevice async action creator.
 *
 * @returns — linkDevice async action creator
 *
 * @example
 *
 * import linkDevice from 'store/tokens'
 *
 * const linkDevice = useLinkDevice()
 */
const useLinkDevice = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const linkDevice = createAsyncThunk(typePrefix, async (deviceId) => {
    return makeAuthedRequest(RequestFactory.linkDevice(deviceId));
  });

  return linkDevice;
};

/**
 * A shadow function that returns linkDevice async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see store/tokensSlice.js
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns linkDevice() async action creator
 */
const linkDevice = createAsyncThunk(typePrefix);

export { linkDevice, useLinkDevice };
