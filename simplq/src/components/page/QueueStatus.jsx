import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import QueueService from '../../services/queue';
import { CircularProgress } from "@material-ui/core";


function QueueStatus(props) {
  const [aheadCount, setAheadCount] = useState(-1);
  QueueService.userIndexQueue(props.match.params.queueId, props.match.params.tokenId).then(
    count => setAheadCount(count)
  );
  return <CentralSection heading="Thanks for waiting!">
    { 
      statusDetails(aheadCount)
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
function statusDetails(aheadCount){
  if (aheadCount === -1) {
    return <CircularProgress style={{ display: "block", margin: "0px auto" }} />
 }
  else if (aheadCount === 0) {
  return <Typography variant="h5" align="center" color="textSecondary" component="p">
    You're turn is now.
</Typography>
  }
  else {
    return <Typography variant="h5" align="center" color="textSecondary" component="p">
    People infront of you : {aheadCount}
    </Typography>
  }
  }

export default QueueStatus