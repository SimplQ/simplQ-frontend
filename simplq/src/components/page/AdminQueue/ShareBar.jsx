import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { progressStep } from '../../../store/appSlice';

const ShareBar = (props) => {
    const queueId = props.queueId;
    const dispatch = useDispatch();

    if (!queueId) {
        return <Skeleton variant="rect" height={68} />
    }

    var shareUrl = window.location.origin + "/j/" + queueId;
    return (<>
        <Alert severity="info" className={props.className}
            action={
                <CopyToClipboard text={shareUrl}>
                    <Button color="inherit" size="small" onClick={() => dispatch(progressStep(2))}>
                        COPY
                    </Button>
                </CopyToClipboard>
            }
        >
            https://simplq.me/j/todo-ellipsis
        </Alert>
        </>
    );
}

export default ShareBar;