/** @jsx React.DOM */


var React = require("react/addons");
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

	getInitialState: function() {
		return {
			showMenu: false
		};
	},

	handleClick: function(e){

		console.log('header tapped: %s', this.state.showMenu);


		if(!this.state.showMenu && !this.props.isIntroActive){
			console.log('header tapped: show menu');
			this.setState({
			 	showMenu: true
			});

		}else{
			console.log('header tapped: hide menu');
			this.setState({
				showMenu: false
			});

		}

	},

	handleNavClick: function(e){

		console.log('nav tapped');

		// // Only activte menu is showMenu
		if(!this.state.showMenu && !this.props.isIntroActive){
			console.log('nav tapped: prevent default');
			e.preventDefault();
		}else{
			console.log('nav tapped: stopProp');
			e.stopPropagation();
			this.setState({
				showMenu: false
			});
		}

	},

	render: function() {

		var cx = React.addons.classSet;
		var classes = cx({
			'intro': this.props.isIntroActive,
			'collapse': this.props.isRouteActive,
			'menu' : this.state.showMenu
		});

		return (
			<header className={classes} onClick={this.handleClick}>

				<Link to="intro" className="logo">Home</Link>

				<div className="info">
					<h1>Kevin Dutton</h1>
					<p>Building websites, apps, and teams</p>
				</div>

				<nav>
					<ul>
						<li><Link to="about" onClick={this.handleNavClick}>About</Link></li>
						<li><Link to="work" onClick={this.handleNavClick}>Work</Link></li>
						<li><Link to="contact" onClick={this.handleNavClick}>Contact</Link></li>
					</ul>
				</nav>

			</header>
		);

	}
});

module.exports = Header;
