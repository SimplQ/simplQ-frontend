import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SyncIcon from '@material-ui/icons/Sync';
import { progressCreationStep } from '../../../store/appSlice';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    paddingBottom: theme.spacing(3),
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ShareBar = (props) => {
  const classes = useStyles();
  const queueId = props.queueId;
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  if (!queueId) {
    return <Skeleton variant="rect" height={68} />;
  }

  const shareUrl = `${window.location.origin}/j/${queueId}`;

  return (
    <div className={classes.buttonGroup}>
      <div className={classes.button}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{ disablePortal: true }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied to clipboard"
          >
            <CopyToClipboard text={shareUrl}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FileCopyIcon />}
                onClick={() => {
                  dispatch(progressCreationStep(2));
                  handleTooltipOpen();
                }}
              >
                Link
              </Button>
            </CopyToClipboard>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<SyncIcon />}
        className={classes.button}
        onClick={props.onRefresh}
      >
        Refresh
      </Button>
    </div>
  );
};

export default ShareBar;
