import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { makeStyles } from '@material-ui/core/styles';
import QueueService from '../../../services/queue';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2)
    },
    buttonGroup: { 
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
}));


export function JoinQueueForm(props) {
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const classes = useStyles();

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleContactChange(e) {
        setContact(e)
    }

    const handleClick = () => {
        const tokenIdPromise = QueueService.addtoQueue(name, contact, props.queueId);
        if (props.afterJoinHandler) {
            tokenIdPromise.then(tokenId => props.afterJoinHandler(tokenId))
        }
    }

    return <>
        <TextField
            placeholder="Your Name"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            inputStyle="material"
            value={name}
            onChange={handleNameChange}
        />
        <PhoneInput
            containerClass={classes.textField}
            placeholder="Contact Number"
            country={'in'}
            value={contact}
            inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true

            }}
            inputStyle={{
                width: '100%'
            }}
            onChange={handleContactChange} />
        <div className={classes.buttonGroup}>
            <Button variant="contained" color="primary" onClick={handleClick}>
                {props.buttonName ? props.buttonName : "Join"}
            </Button>
        </div>
        </>
}

export default JoinQueueForm;
