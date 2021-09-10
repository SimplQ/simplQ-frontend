import React from 'react';
import HistoryIcon from '@material-ui/icons/History';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import QueueHistory from 'components/common/QueueHistory/QueueHistory';
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector } from 'react-redux';
import { selectQueueHistoryEvents } from 'store/selectedQueueHistory';

export default (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const Data = useSelector(selectQueueHistoryEvents).events;

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <SidePanelItem
      Icon={HistoryIcon}
      title="Queue History"
      description="History of events in the queue"
      expandable
    >
      <QueueHistory
        queueId={props.queueId}
        data={Data.slice(page * rowsPerPage, Math.min(Data.length, (page + 1) * rowsPerPage))}
      />
      <div>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          count={Data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </SidePanelItem>
  );
};
