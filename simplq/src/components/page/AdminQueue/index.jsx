import React, { useState } from 'react';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';
import CentralSection from "../../CentralSection";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(1)
    },
    buttonGroup: { 
        display: "flex",
        justifyContent: 'flex-end' 
    },
    urlBox: {
        margin: theme.spacing(3)
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
    var shareUrl = window.location.origin + "/" + props.match.params.queueId;

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
            <Button variant="contained" color="primary" className={classes.botton}>
                Add
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                Refresh
            </Button>
        </div>
    </CentralSection>
}

