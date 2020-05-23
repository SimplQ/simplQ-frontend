import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import QueueService from '../../services/queue';
import { CircularProgress, makeStyles } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import JoinerStepper from "../stepper/JoinerStepper";
import { setAheadCount, setJoinerStep } from "../../store/appSlice";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  },
  content: {
    minHeight: theme.spacing(16),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function QueueStatus() {
  const dispatch = useDispatch();
  const [notified, setNotified] = useState();
  const queueId = useSelector((state) => state.appReducer.queueId);
  const tokenId = useSelector((state) => state.appReducer.tokenId);
  const aheadCount = useSelector((state) => state.appReducer.aheadCount);
  const [updateInProgress, setUpdateInProgress] = useState(false);
  const classes = useStyles();
  const [userLeft, setUserLeft] = useState(false);

  const update = () => {
    if (queueId && tokenId) {
      setUpdateInProgress(true);
      QueueService.userStatus(queueId, tokenId).then(
        response => {
          dispatch(setAheadCount(response.aheadCount));
          setNotified(response.notified);
          setUpdateInProgress(false);
        }
      ).catch(() => {
        setUpdateInProgress(false);
        setUserLeft(true);
      })
    }
  }

  const onDeleteClick = () => {
    setUpdateInProgress(true);
    QueueService.deleteFromQueue(queueId, tokenId).then(() => {
      setUserLeft(true);
      setUpdateInProgress(false);
    }).catch(() => {
        setUpdateInProgress(false);
        setUserLeft(true);
      }
    )
  }

  if (aheadCount == null && !updateInProgress & !userLeft) {
    update()
  }

  var status = null;
  if (updateInProgress) {
    status = <CircularProgress />;
  } else if (userLeft) {
    status = <Typography align="center">You have been removed from the queue</Typography>
  } else if (notified) {
    dispatch(setJoinerStep(3))
    status = <img src="/tenor.gif" alt="description of gif" />
  }
  else if (aheadCount === 0) {
    status = <Alert severity="success" ><Typography variant="h6" align="center" color="textSecondary" component="p">
      There is no one ahead of you. Please wait to be notified by the queue manager.
  </Typography></Alert>

  }
  else {
    status = <Typography variant="h5" align="center" color="textSecondary" component="p">
      People infront of you : {aheadCount}
    </Typography>
  }

  return <>
    <JoinerStepper />
    <CentralSection heading="Thanks for waiting!">
      <div className={classes.content}>
        {status}
      </div>
      { !userLeft && !updateInProgress ?
      <div className={classes.buttonGroup}>
        <Button className={classes.button} variant="outlined" color="primary" onClick={update}>
            Check Status
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary" onClick={onDeleteClick}>
            Leave Queue
        </Button>
</div> : <div></div> }
    </CentralSection>
  </>
}

export default QueueStatus