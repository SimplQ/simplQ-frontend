import React, { useState } from 'react';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Typography } from '@material-ui/core';
import CentralSection from "../../CentralSection";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import JoinQueueForm from '../JoinQueue/Form';

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
    const [items, setItems] = useState([
        {
            "name": "Nithin Jose",
            "contact": "9400413350",
            "id": 1
        },
        {
            "name": "Navaneeth Kishore",
            "contact": "9446011567",
            "id": 2
        }
    ]);

    const classes = useStyles();
    const queueId = props.match.params.queueId;
    var shareUrl = window.location.origin + "/" + queueId;

    return <CentralSection heading="Shobha Supermart">
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
            <Button variant="contained" color="primary" className={classes.button}>
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

