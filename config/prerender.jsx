/** @jsx React.DOM */

var React = require("react");
// React Router
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;

var Application = require("../app/" + __resourceQuery.substr(1));
var html = require("../app/prerender.html");

module.exports = function(scriptUrl, styleUrl, commonsUrl) {
	var application = React.renderComponentToString(Application);
	return html.replace("STYLE_URL", styleUrl).replace("SCRIPT_URL", scriptUrl).replace("COMMONS_URL", commonsUrl).replace("CONTENT", application);
};
