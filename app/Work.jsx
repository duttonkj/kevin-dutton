/** @jsx React.DOM */
var React = require("react");

var View = require("./_components/View.jsx");
var AnimationHelper = require("./_components/AnimationHelper.js");

var ProjectList = require("./_components/ProjectList.jsx");

var Work = React.createClass({

	mixins: [AnimationHelper],

	render: function() {

		return (
		<View classRoute={this.props.classId}  willEnter={this.state.willEnter} didEnter={this.state.didEnter}>

			<h1>Selected Work</h1>

			<ProjectList />

		</View>
		);
	}
});

module.exports = Work;
