import React from "react";
import {
  Route
} from "react-router-dom";
import CreateQueue from "./page/CreateQueue"
import JoinQueue from "./page/JoinQueue";
import QueueStatus from "./page/QueueStatus";
import Admin from "./page/admin/index";

export default () => {
  return <>
      <Route path="/" exact component={CreateQueue} />
      <Route path="/admin/:queueId" exact component={Admin} />
      <Route path="/:queueId" exact component={JoinQueue} />
      <Route path="/status/:queueId/:tokenId" exact component={QueueStatus} />
  </>
}
