/** @jsx React.DOM */

//Reflux.nextTick(process.nextTick);

var React = require("react/addons");
var CSSTransitionGroup = require('react/lib/ReactTransitionGroup');


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

// Reflux
var Reflux = require('reflux');
var Store = require('./_reflux/Store.js');




var Main = React.createClass({

	mixins: [ ActiveState, Reflux.listenTo(Store,"onViewMounted") ],

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

	onViewMounted: function(){

			// reset scrollposition for new view entering
		    this.refs.viewport.getDOMNode().scrollTop = 0;

	},

	render: function() {

		return (
			<div className="app">
				<Header isIntroActive={this.state.isIntroActive} isRouteActive={this.state.isRouteActive} />
				<div className="viewport" ref="viewport">
					<CSSTransitionGroup transitionName="view" component={React.DOM.div}>
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
			<Route name="intro" path="/" handler={Intro} addHandlerKey={true} classId="intro" />
			<Route name="about" path="about" handler={About} addHandlerKey={true} classId="about" />
			<Route name="work" path="work" handler={Work} addHandlerKey={true} classId="work" />
			<Route name="contact" path="contact" handler={Contact} addHandlerKey={true} classId="contact" />
		</Route>
	</Routes>
);


module.exports = Application;
