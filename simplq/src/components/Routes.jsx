import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CreateQueue from "./page/CreateQueue"
import JoinQueue from "./page/JoinQueue";
import QueueStatus from "./page/QueueStatus";
import Admin from "./page/admin/index";

export default () => {
  return <Router>
      <Route path="/" exact component={CreateQueue} />
      <Route path="/queue/:queueId/admin" component={Admin} />
      <Route path="/join" component={JoinQueue} />
      <Route path="/queue-status" component={QueueStatus} />
  </Router>
}
