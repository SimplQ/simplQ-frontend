
import React from "react";
import CentralSection from "../../CentralSection";
import JoinQueueForm from "./Form";
import { useDispatch } from 'react-redux';
import { setTokenId } from '../../../store/appSlice'

export function JoinQueue(props) {
    const queueId = props.match.params.queueId;
    const dispatch = useDispatch();

    return <CentralSection heading="Join Queue">
        <JoinQueueForm
            queueId={queueId}
            onJoinClick={() => {
                dispatch(setTokenId(null))
                props.history.push("/status");
            }}
            afterJoin={tokenId => dispatch(setTokenId(tokenId))}
        />
    </CentralSection>;
}

export default JoinQueue;