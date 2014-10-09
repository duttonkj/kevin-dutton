/** @jsx React.DOM */

var React = require("react");
var Actions = require("./_reflux/Actions.js");

var Work = React.createClass({

	componentDidMount: function(){

		console.log('Work: trigger viewMounted');
		Actions.viewMounted();

	},

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
