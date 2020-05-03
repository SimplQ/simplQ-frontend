import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import CentralSection from "../../CentralSection";
import { makeStyles } from '@material-ui/core/styles';
import QueueService from '../../../services/queue';
import { useSelector, useDispatch } from 'react-redux';
import { setQueueName } from '../../../store/appSlice';
import ShareBar from './ShareBar';

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

    const queueId = useSelector((state) => state.appReducer.queueId);
    const queueName = useSelector((state) => state.appReducer.queueName);

    const [items, setItems] = useState();
    const dispatch = useDispatch();

    const update = () => {
        if (queueId) {
            QueueService.readQueue(queueId).then(
                data => {
                    dispatch(setQueueName(data.name)) // TOD: SHould we remove this?
                    setItems(data.users)
                }
            );
        }
    }

    useEffect(update, [queueId]);

    return <CentralSection heading={queueName}>
        
        <ShareBar queueId={queueId} className={classes.urlBox} />
        <ItemList items={items} queueId={queueId} history={props.history} />

    </CentralSection>
}

