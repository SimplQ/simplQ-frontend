import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import QueueService from '../../services/queue';
import { CircularProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';



function QueueStatus(props) {
  const [aheadCount, setAheadCount] = useState(-1);
  const [notified, setNotified] = useState();
  QueueService.userIndexQueue(props.match.params.queueId, props.match.params.tokenId).then(
    count => setAheadCount(count)
  );
  QueueService.userNotificationStatusQueue(props.match.params.queueId, props.match.params.tokenId).then(
    notified => setNotified(notified)
  );
  return <CentralSection heading="Thanks for waiting!">
    {
      statusDetails(aheadCount, notified)
    }
    <div style={{ display: "flex", justifyContent: 'flex-end' }}>
      <Button variant="contained" color="primary" style={{
        marginTop: 30,
        marginLeft: 10,
      }}>
        Refresh
        </Button>
    </div>
  </CentralSection>
}
function statusDetails(aheadCount, notified) {
  if (aheadCount === -1) {
    return <CircularProgress style={{ display: "block", margin: "0px auto" }} />
  }
  else if (aheadCount === 0) {
    if (notified) {
      return <Alert severity="success" ><Typography variant="h6" align="center" color="textSecondary" component="p">
        You have been notified by the queue manager. Your wait is over.
    </Typography>
      </Alert>
    }
    else {
      return <Alert severity="error" ><Typography variant="h6" align="center" color="textSecondary" component="p">
        There is no one ahead of you.Please wait to be notified by the queue manager.
  </Typography></Alert>

    }
  }
  else {
    return <Typography variant="h5" align="center" color="textSecondary" component="p">
      People infront of you : {aheadCount}
    </Typography>
  }
}

export default QueueStatus