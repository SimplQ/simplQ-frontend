import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    title: {
        textTransform: "capitalize"
    }
}));

export default function CentralSection(props) {
    const classes = useStyles();

    return (
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h4" align="center" gutterBottom className={classes.title}>{props.heading}</Typography>
                {props.children}
            </Paper>
    );
}
