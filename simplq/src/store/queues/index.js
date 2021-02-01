import reducer, { selectQueues } from './queuesSlice';
import { fetchQueues, useFetchQueues, deleteQueue, useDeleteQueue } from './queuesAsyncActions';

export default reducer;
export { selectQueues, fetchQueues, useFetchQueues, deleteQueue, useDeleteQueue };
