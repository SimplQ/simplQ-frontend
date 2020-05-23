import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from "@material-ui/core";

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
    const [name, setName] = useState('');
    const [invalidName, setInvalidName] = useState(false);
    const [contact, setContact] = useState('');
    const [invalidContact, setInvalidContact] = useState(false);
    const [addingInProgress, setAddingInProgress] = useState(false);
    const classes = useStyles();

    function handleNameChange(e) {
        setName(e.target.value);
        setInvalidName(false);
    }

    function handleContactChange(e) {
        setContact(e);
        setInvalidContact(false);
    }

    const handleClick = () => {
        if (name === '') {
            setInvalidName(true);
            return;
        }
        if (contact === '') {
            setInvalidContact(true);
            return;
        }

        setAddingInProgress(true);

        props.joinQueueHandler(name, contact).then(() => {
            setName('');
            setContact('');
            setAddingInProgress(false);
        })
    }

    return <>
        <TextField
            placeholder="Name"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            error={invalidName}
            helperText={invalidName ? "Name is required" : ""}
        />
        <PhoneInput
            containerClass={classes.textField}
            placeholder="Phone Number"
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
            isValid={() => invalidContact ? "Phone number is not valid" : true}
            onChange={handleContactChange} />
        <div className={classes.buttonGroup}>
            { addingInProgress ? <CircularProgress size={30} style={{padding: "6px 16px"}}/> : 
            <Button variant="contained" color="primary" onClick={handleClick}>
                {props.buttonName ? props.buttonName : "Join"}
            </Button>
            }
        </div>
    </>
}

export default JoinQueueForm;
