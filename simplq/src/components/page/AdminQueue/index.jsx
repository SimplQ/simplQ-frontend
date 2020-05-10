import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import CentralSection from "../../CentralSection";
import { makeStyles } from '@material-ui/core/styles';
import QueueService from '../../../services/queue';
import { useSelector, useDispatch } from 'react-redux';
import { progressStep } from '../../../store/appSlice';
import ShareBar from './ShareBar';
import PageNotFound from '../PageNotFound';

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

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const queueId = useSelector((state) => state.appReducer.queueId);
    const queueName = useSelector((state) => state.appReducer.queueName);

    if(!queueId) {
        // If queue id is not here, most probably his session storage got cleared. This can be solved only with proper auth.
        return <PageNotFound />
    }

    dispatch(progressStep(1))

    const [items, setItems] = useState();

    const update = () => {
        if (queueId) {
            QueueService.readQueue(queueId).then(
                data => {
                    setItems(data.users)
                }
            );
        }
    }

    const addNewItem = (name, contact) => {
        return QueueService.addtoQueue(name, contact, false, queueId).then((tokenId) => {
            setItems([...items, {tokenId: tokenId, name: name, contact: contact, notifyable: false}]);
        }).catch((err) => {
            console.log("Add to queue failed, TODO: Inform user", err)
        })
    }

    const removeItemHandler = (tokenId) => { setItems(items.filter(item => item.tokenId !== tokenId))} 

    useEffect(update, [queueId]);

    return <CentralSection heading={queueName}>
        
        <ShareBar queueId={queueId} className={classes.urlBox} />
        <ItemList items={items} queueId={queueId} joinQueueHandler={addNewItem} removeItemHandler={removeItemHandler}/>

    </CentralSection>
}

