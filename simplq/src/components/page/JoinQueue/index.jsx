
import React from "react";
import CentralSection from "../../CentralSection";
import JoinQueueForm from "./Form";
import { useDispatch } from 'react-redux';
import { setTokenId } from '../../../store/appSlice'
import QueueService from '../../../services/queue';

export function JoinQueue(props) {
    const queueId = props.match.params.queueId;
    const dispatch = useDispatch();

    const joinQueueHandler = (name, contact) => {
        return QueueService.addtoQueue(name, contact, true, queueId).then((tokenId) => {
            dispatch(setTokenId(tokenId));
            props.history.push("/status");
        }).catch((err) => {
            console.log("Add to queue failed, TODO: Inform user", err)
        })
    }

    return <CentralSection heading="Join Queue">
        <JoinQueueForm
            queueId={queueId}
            joinQueueHandler={joinQueueHandler}
        />
    </CentralSection>;
}

export default JoinQueue;