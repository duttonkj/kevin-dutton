/** @jsx React.DOM */


var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
		<header className="intro">

			<Link to="intro" className="logo">Home</Link>

			<div className="info">
				<h1>Kevin Dutton</h1>
				<p>Building websites, apps, and teams</p>
			</div>

			<nav>
				<ul>
					<li><Link to="about">About</Link></li>
					<li><Link to="work">Work</Link></li>
					<li class="active"><Link to="contact">Contact</Link></li>
				</ul>
			</nav>

		</header>
		);
	}
});

module.exports = Header;
