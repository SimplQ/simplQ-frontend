import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Typography } from '@material-ui/core';
import CentralSection from "../../CentralSection";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import JoinQueueForm from '../JoinQueue/Form';
import QueueService from '../../../services/queue';

const useStyles = makeStyles((theme) => ({
    buttonGroup: { 
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    urlBox: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
}));

function content(items) {
    if (items == null) {
        return <p>Loading...</p>
    }
    if (items.length > 0) {
        return <ItemList items={items} />
    } else {
        return <p>Empty Queue</p>
    }
}


export default (props) => {
    const classes = useStyles();
    const queueId = props.match.params.queueId;

    const [items, setItems] = useState();
    const [name, setName] = useState();

    const update = () => {
        QueueService.readQueue(queueId).then(
            data => {
                setName(data.name);
                setItems(data.users)
            }
        );
    }

    useEffect(update);

    var shareUrl = window.location.origin + "/" + queueId;

    return <CentralSection heading={name}>
        <Alert severity="info" className={classes.urlBox}
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
        {content(items)}
        <div className={classes.buttonGroup}>
            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={update}
            >
                Refresh
            </Button>
        </div>
        <Typography variant="h6" align="center" gutterBottom>Add Manually</Typography>
        <JoinQueueForm 
            buttonName="Add" 
            afterJoinHandler={() => props.history.push("/admin/" + queueId)}
            queueId={queueId}
            />
    </CentralSection>
}

