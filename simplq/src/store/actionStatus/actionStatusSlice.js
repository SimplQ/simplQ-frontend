/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

/**
 * Async Action Status slice
 *
 * Keeps the state of all dispathced async actions
 * where action type has form `[actionName]/action`
 * (e.g, `deleteQueue/action`). The state can be
 * pending, fulfilled, or rejected. Use useSelector to get
 * desired action state.
 *
 * @example
 *
 * import { useSelector } from 'react-redux';
 *
 * const actionStatus = useSelector((state) => state['deleteQueue'])
 */
const actionStatusSlice = createSlice({
  name: 'actionStatus',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.includes('action'),
      (state, action) => {
        const [name, , status] = action.type.split('/');
        state[name] = status;
      }
    );
  },
});

export default actionStatusSlice.reducer;
