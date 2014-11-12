/** @jsx React.DOM */
var React = require("react");


var ProjectDetails = React.createClass({

  render: function() {

	return (
    	<div className="project-details">

            <h1>{this.props.data.name}</h1>
			<p>{this.props.data.slug}</p>

		</div>
    );

  }

});

module.exports = ProjectDetails;
