import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { makeStyles } from '@material-ui/core/styles';
import QueueService from '../../services/queue';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2)
    }
}));

function JoinQueue(props) {
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const classes = useStyles();
    function handleClick(name, contact, queueId) {
        QueueService.addtoQueue(name, contact, queueId).then(tokenId => props.history.push("/status/" + queueId + "/" + tokenId))

    }
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleContactChange(e) {
        setContact(e)
    }
    return <CentralSection heading="Join Queue">
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
        <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" style={{
                marginTop: 30,
                marginLeft: 10,
            }} onClick={() => handleClick(name, contact, props.match.params.queueId)}>
                Join
        </Button>
        </div>
    </CentralSection>
}

export default JoinQueue