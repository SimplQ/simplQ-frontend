import { withRouter } from 'react-router-dom'

import React from "react";

function Admin(props) {
return <h1>Hello, Admin {props.match.params.queueId}</h1>;
}
export default withRouter(Admin);