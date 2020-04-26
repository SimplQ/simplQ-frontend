import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Typography, TextareaAutosize } from '@material-ui/core';
import CentralSection from "../../CentralSection";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import JoinQueueForm from '../JoinQueue/Form';
import QueueService from '../../../services/queue';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            Your queue is ready for use, share this url to begin
        </Alert>

        <ItemList items={items} />

        <ExpansionPanel className={classes.addBox}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Add New</Typography>
            </ExpansionPanelSummary>
            <JoinQueueForm
                buttonName="Add"
                afterJoinHandler={() => props.history.push("/admin/" + queueId)}
                queueId={queueId}
            />
        </ExpansionPanel>
    </CentralSection>
}

