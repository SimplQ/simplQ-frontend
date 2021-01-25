// Creates axios config objects for the various backend API requests
// Example object:
//
// {
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// }
//
// These objects are used to make requests from components using the
// useRequest  hook. (See src/api/useRequest.js for usage example)
//
import * as QueueRequestFactory from './queue';
import * as TokenRequestFactory from './token';

export { QueueRequestFactory, TokenRequestFactory };
