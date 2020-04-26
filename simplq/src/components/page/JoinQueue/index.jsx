
import React from "react";
import CentralSection from "../../CentralSection";
import JoinQueueForm from "./Form";

export function JoinQueue(props) {
    const queueId = props.match.params.queueId;

    return <CentralSection heading="Join Queue">
        <JoinQueueForm
            queueId={queueId}
            afterJoinHandler={tokenId => props.history.push("/status/" + queueId + "/" + tokenId)}
        />
    </CentralSection>;
}

export default JoinQueue;