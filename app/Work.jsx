/** @jsx React.DOM */

var React = require("react");

var Work = React.createClass({
	render: function() {
		var age = this.props.query.showAge ? '33' : '';
		return (
		<div className="work view">
			<h1>Work!</h1>
			{age}
		</div>
		);
	}
});

module.exports = Work;
