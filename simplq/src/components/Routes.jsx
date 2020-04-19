import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CreateQueue from "./page/CreateQueue"
import Admin from "./page/Admin"
import JoinQueue from "./page/JoinQueue";
import QueueStatus from "./page/QueueStatus";

export default () => {
  return <Router>
      <Route path="/" exact component={CreateQueue} />
      <Route path="/admin" component={Admin} />
      <Route path="/join" component={JoinQueue} />
      <Route path="/queue-status" component={QueueStatus} />
  </Router>
}