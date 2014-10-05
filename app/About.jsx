/** @jsx React.DOM */

var React = require("react");

var Image = require('react-image-component');


var About = React.createClass({
	render: function() {
		return (
		<div className="about view">
			<h1>About!</h1>
		</div>
		);
	}
});

module.exports = About;
