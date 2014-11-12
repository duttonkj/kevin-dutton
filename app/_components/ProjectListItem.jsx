/** @jsx React.DOM */
var React = require("react");

// Router
var Router = require('react-router');
var Link = Router.Link;

var ProjectListItem = React.createClass({

  render: function() {

	return (
    	<div className="project-list-item">

			<p>{this.props.name}</p>
			<Link to="project" params={{projectSlug: this.props.slug}}>View</Link>

		</div>
    );





  }

});

module.exports = ProjectListItem;
