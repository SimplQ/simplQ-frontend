import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { progressCreationStep } from '../../../store/appSlice';
import { RefreshButton, ShareButton } from '../../common/Button/Button.stories';
import styles from '../../../styles/adminPage.module.scss';

const ShareBar = (props) => {
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
    <div className={styles['main-button-content']}>
      <div>
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
              <ShareButton
                onClick={() => {
                  dispatch(progressCreationStep(2));
                  handleTooltipOpen();
                }}
              />
            </CopyToClipboard>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <div>
        <RefreshButton onClick={props.onRefresh} />
      </div>
    </div>
  );
};

export default ShareBar;
