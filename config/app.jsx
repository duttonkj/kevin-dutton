/** @jsx React.DOM */

var React = require("react/addons");
// React Router
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;



var Application = require("../app/" + __resourceQuery.substr(1));

React.renderComponent(Application, document.body);
