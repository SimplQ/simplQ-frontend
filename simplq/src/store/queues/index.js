import reducer, { selectQueues } from './queuesSlice';
import { fetchQueues, useFetchQueues } from './queuesAsyncActions';

export default reducer;
export { selectQueues, fetchQueues, useFetchQueues };
