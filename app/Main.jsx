/** @jsx React.DOM */

//var Reflux = require("reflux");
//Reflux.nextTick(process.nextTick);

var React = require("react/addons");
var CSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');


// Basic styling
require("./bower_components/normalize.css/normalize.css");
require("./styles/main.scss");

// React Router
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;
var ActiveState = Router.ActiveState;


// Pages
var Intro = require('./Intro.jsx');
var About = require('./About.jsx');
var Work = require('./Work.jsx');
var Contact = require('./Contact.jsx');

// Components
var Header = require('./_components/Header.jsx');


var Main = React.createClass({

	mixins: [ ActiveState ],

	getInitialState: function () {
    	return {
			isIntroActive: false,
			isRouteActive: false
		};
	},

	updateActiveState: function () {
		this.setState({
			isIntroActive: this.isActive('intro'),
			isRouteActive: this.isActive('work') || this.isActive('about') || this.isActive('contact')
		})
	},

	render: function() {

		console.log(this.state);
		return (
			<div className="app">
				<Header isIntroActive={this.state.isIntroActive} isRouteActive={this.state.isRouteActive} />
				<div className="viewport">
					<CSSTransitionGroup transitionName="example" component={React.DOM.div}>
			          <this.props.activeRouteHandler />
			        </CSSTransitionGroup>
				</div>
			</div>
		);
	}

});


var Application = (
	<Routes location="history">
		<Route handler={Main}>
			<Route name="intro" path="/" handler={Intro} />
			<Route name="about" path="about" handler={About}/>
			<Route name="work" path="work" handler={Work}/>
			<Route name="contact" path="contact" handler={Contact}/>
		</Route>
	</Routes>
);


module.exports = Application;
