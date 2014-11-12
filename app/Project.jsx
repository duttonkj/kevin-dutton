/** @jsx React.DOM */
var React = require("react");

var View = require("./_components/View.jsx");
var AnimationHelper = require("./_components/AnimationHelper.js");


// Project data mixin
var LoadJSONMixin = require("./_components/LoadJSONMixin.js");

// Details Compontent
var ProjectDetails = require("./_components/ProjectDetails.jsx");




var Project = React.createClass({

	mixins: [AnimationHelper,LoadJSONMixin],

	getInitialState: function () {
		return {
			project: {}
		};
	},

	componentWillMount: function(){

		this.setState({
			project: this.loadProject(this.props.params.projectSlug)
		});

		console.log("PROJEcT STATE:");
		console.log(this.state.project);
	},

	render: function() {

		return (
			<View classRoute={this.props.classId}  willEnter={this.state.willEnter} didEnter={this.state.didEnter}>
				<ProjectDetails data={this.state.project} />
			</View>
		);
	}

});

module.exports = Project;
