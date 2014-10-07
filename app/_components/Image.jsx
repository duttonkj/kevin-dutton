/** @jsx React.DOM */

var React = require("react");

//var Image = require('react-image-component');
console.log(Image);

var About = React.createClass({
	render: function() {

		return (
		<div className="about view">
			<h1>About!</h1>
			<Image ref={'about-photo'} src={'http://pugholdit.herokuapp.com/500x400.jpg'} aspectRatio={0.8} />
		</div>
		);
	}
});

module.exports = About;
