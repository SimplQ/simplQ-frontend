import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";


function QueueStatus(props) {
  var aheadCount = 10;

  return <CentralSection heading="Your Status">
    <Typography variant="h5" align="center" color="textSecondary" component="p">
      There are {aheadCount} people ahead of you. Thanks for waiting!
    </Typography>
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