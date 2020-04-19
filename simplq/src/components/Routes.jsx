export default () => {
  return       <Switch>
  <Route path={`${match.path}/:topicId`}>
    <Topic />
  </Route>
  <Route path={match.path}>
    <h3>Please select a topic.</h3>
  </Route>
</Switch>
}