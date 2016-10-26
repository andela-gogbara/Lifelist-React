var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var MainContainer = require("../components/MainContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>

    </Route>
  </Router>
);

module.exports = routes
