/** @jsx React.DOM */

var React = require("react");

var Intro = React.createClass({
	render: function() {
		var age = this.props.query.showAge ? '33' : '';
		return (
		<div className="intro view">
			<h1>Welcome</h1>
		</div>
		);
	}
});

module.exports = Intro;
