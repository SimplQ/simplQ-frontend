import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'linkDevice/action';

/**
 * A hook to access the linkDevice async action creator.
 *
 * @returns — linkDevice async action creator
 */
const useLinkDevice = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const linkDevice = createAsyncThunk(typePrefix, async (deviceId) => {
    return makeAuthedRequest(RequestFactory.linkDevice(deviceId));
  });

  return linkDevice;
};

const linkDevice = createAsyncThunk(typePrefix);

export { linkDevice, useLinkDevice };
