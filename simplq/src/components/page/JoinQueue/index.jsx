
import React from "react";
import CentralSection from "../../CentralSection";
import JoinQueueForm from "./Form";
import { useDispatch } from 'react-redux';
import { setTokenId, setJoinerStep } from '../../../store/appSlice'
import QueueService from '../../../services/queue';
import JoinerStepper from "../../stepper/JoinerStepper";

export function JoinQueue(props) {
    const queueId = props.match.params.queueId;
    const dispatch = useDispatch();
    dispatch(setJoinerStep(0));

    const joinQueueHandler = (name, contact) => {
        return QueueService.addtoQueue(name, contact, true, queueId).then((tokenId) => {
            dispatch(setTokenId(tokenId));
            props.history.push("/status");
        }).catch((err) => {
            console.log("Add to queue failed, TODO: Inform user", err)
        }).then(() => dispatch(setJoinerStep(1)))
    }

    return <>
    <JoinerStepper />
    <CentralSection heading="Join Queue">
        <JoinQueueForm
            queueId={queueId}
            joinQueueHandler={joinQueueHandler}
        />
    </CentralSection>
    </>;
}

export default JoinQueue;