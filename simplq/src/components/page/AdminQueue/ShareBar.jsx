import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '@material-ui/lab/Alert';
import { Button, Chip, Avatar } from '@material-ui/core';

const ShareBar = (props) => {
    const queueId = props.queueId;

    if (!queueId) {
        return <Skeleton variant="rect" height={68} />
    }

    var shareUrl = window.location.origin + "/j/" + queueId;
    return (<>
    <Chip variant="outlined" avatar={<Avatar src="/mike.jpg" />} component="p" label="Mike: Your queue has been created. Copy and share the link with people"/> 
        <Alert severity="info" className={props.className}
            action={
                <CopyToClipboard text={shareUrl}>
                    <Button color="inherit" size="small">
                        COPY
                    </Button>
                </CopyToClipboard>
            }
        >
            {shareUrl}
        </Alert>
        </>
    );
}

export default ShareBar;