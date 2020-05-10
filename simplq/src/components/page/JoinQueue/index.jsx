
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
            afterJoin={tokenId => {
                dispatch(setTokenId(tokenId));
                props.history.push("/status");
            }
            }
        />
    </CentralSection>;
}

export default JoinQueue;