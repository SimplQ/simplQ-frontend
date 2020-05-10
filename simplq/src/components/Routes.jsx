import React from "react";
import {
  Route, Switch
} from "react-router-dom";
import CreateQueue from "./page/CreateQueue"
import JoinQueue from "./page/JoinQueue";
import QueueStatus from "./page/QueueStatus";
import AdminQueue from "./page/AdminQueue";
import PageNotFound from "./page/PageNotFound";

export default () => {
  return <Switch>
      <Route path="/" exact component={CreateQueue} />
      <Route path="/admin" exact component={AdminQueue} />
      <Route path="/j/:queueId" exact component={JoinQueue} />
      <Route path="/status" exact component={QueueStatus} />
      <Route component={PageNotFound} />
  </Switch>
}
