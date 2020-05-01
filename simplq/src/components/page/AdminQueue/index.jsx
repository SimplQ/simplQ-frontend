import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';
import CentralSection from "../../CentralSection";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import QueueService from '../../../services/queue';

const useStyles = makeStyles((theme) => ({
    urlBox: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    addBox: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    }
}));

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

    useEffect(update, []);

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
            Your queue is ready for use, copy and share this url to begin
        </Alert>

        <ItemList items={items} queueId={queueId} history={props.history}/>

    </CentralSection>
}

