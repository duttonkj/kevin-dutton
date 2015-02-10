

/** @jsx React.DOM */
var React = require("react");

var View = require("./_components/View.jsx");

var AnimationHelper = require("./_components/AnimationHelper.js");

var Contact = React.createClass({

	mixins: [AnimationHelper],

	render: function() {

		return (
		<View classRoute={this.props.classId}  willEnter={this.state.willEnter} didEnter={this.state.didEnter}>
			<h1>Get in touch</h1>
			<a href="mailto:duttonkj@gmail.com" className="btn">hello@kevindutton.com</a>
			<a href="https://github.com/duttonkj" className="social">Github</a>
			<a href="http://twitter.com/duttonkj" className="social">Twitter</a>
			<a href="http://www.linkedin.com/in/kevindutton" className="social">LinkedIn</a>
			<a href="https://www.facebook.com/kevindutton" className="social">Facebook</a>
		</View>
		);
	}
});

module.exports = Contact;
