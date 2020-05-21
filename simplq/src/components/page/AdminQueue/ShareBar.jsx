import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { progressCreationStep } from '../../../store/appSlice';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FileCopyIcon from '@material-ui/icons/FileCopy';

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
        return <Skeleton variant="rect" height={68} />
    }

    var shareUrl = window.location.origin + "/j/" + queueId;

    return (<>
        <Typography 
            align='center'
            color='initial'
            display='block'
            gutterBottom={true}
            component={'span'}
        >

            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div style={{ 'overflow': 'auto' }}>
                    <Tooltip
                        PopperProps={{disablePortal: true,}}
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
                                onClick={
                                    () => {
                                        dispatch(progressCreationStep(2));
                                        handleTooltipOpen();
                                    }
                                }
                            >
                                {'Link'}
                            </Button>
                        </CopyToClipboard>
                    </Tooltip>
                </div>
            </ClickAwayListener>

        </Typography>
        </>
    );
}

export default ShareBar;