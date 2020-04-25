import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
      marginTop: theme.spacing(2)
    }
  }));

function JoinQueue(props) {
    const [value, setValue] = useState();
    const classes = useStyles();

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
        />
        <PhoneInput
            containerClass={classes.textField}
            placeholder="Contact Number"
            country={'in'}
            value={value}
            inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true

            }}
            inputStyle={{
                width: '100%'
            }}
            onChange={setValue} />
        <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" style={{
                marginTop: 30,
                marginLeft: 10,
            }}>
                Join
        </Button>
        </div>
    </CentralSection>
}

export default JoinQueue