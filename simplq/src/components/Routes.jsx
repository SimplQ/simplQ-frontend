import React from "react";
import {
  Route
} from "react-router-dom";
import CreateQueue from "./page/CreateQueue"
import JoinQueue from "./page/JoinQueue";
import QueueStatus from "./page/QueueStatus";
import AdminQueue from "./page/AdminQueue";

export default () => {
  return <>
      <Route path="/" exact component={CreateQueue} />
      <Route path="/admin/:queueId" exact component={AdminQueue} />
      <Route path="/:queueId" exact component={JoinQueue} />
      <Route path="/status/:queueId/:tokenId" exact component={QueueStatus} />
  </>
}
