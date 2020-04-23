import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CentralSection from "../CentralSection";

function JoinQueue(props) {
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
        />
        <TextField
            placeholder="Contact Number"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
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