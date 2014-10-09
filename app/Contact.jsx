/** @jsx React.DOM */

var React = require("react");
var Actions = require("./_reflux/Actions.js");

var Contact = React.createClass({
	componentDidMount: function(){

		console.log('Contact: trigger viewMounted');
		Actions.viewMounted();

	},
	render: function() {
		var age = this.props.query.showAge ? '33' : '';
		return (
		<div className="contact view">
			<h1>Get in touch</h1>
			<a href="mailto:duttonkj@gmail.com" className="btn">duttonkj@gmail.com</a>
			<a href="https://github.com/duttonkj" className="social">Github</a>
			<a href="http://twitter.com/duttonkj" className="social">Twitter</a>
			<a href="http://linkedin.com/duttonkj" className="social">LinkedIn</a>
			<a href="https://www.facebook.com/kevindutton" className="social">Facebook</a>
		</div>
		);
	}
});

module.exports = Contact;
