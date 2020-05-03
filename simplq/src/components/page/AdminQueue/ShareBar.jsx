import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

const ShareBar = (props) => {
    const queueId = props.queueId;

    if (!queueId) {
        return <Skeleton variant="rect" height={68} />
    }

    var shareUrl = window.location.origin + "/j/" + queueId;
    return (
        <Alert severity="info" className={props.className}
            action={
                <CopyToClipboard text={shareUrl}>
                    <Button color="inherit" size="small">
                        COPY
                    </Button>
                </CopyToClipboard>
            }
        >
            Your queue is ready for use. Copy and share this link to begin
        </Alert>
    );
}

export default ShareBar;