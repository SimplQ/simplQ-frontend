import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import QueueService from '../../services/queue';
import { CircularProgress } from "@material-ui/core";

function QueueStatus(props) {
  const [aheadCount, setAheadCount] = useState();
  QueueService.userIndexQueue(props.match.params.queueId, props.match.params.tokenId).then(
    count => setAheadCount(count)
  );

  return <CentralSection heading="Sit Tight!">
    {aheadCount ?
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        There are {aheadCount} people ahead of you. Thanks for waiting!
      </Typography>
      :
      <CircularProgress style={{ display: "block", margin: "0px auto" }} />
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

export default QueueStatus