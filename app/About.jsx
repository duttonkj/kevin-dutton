/** @jsx React.DOM */

var React = require("react");


var Image = require('react-image-component');
var ImageSrc = require('./images/kevin-dutton.jpg');

var AnimationHelper = require('./_components/AnimationHelper.js');

var About = React.createClass({

	mixins: [AnimationHelper], // Use the mixin

	getInitialState: function() {
		return {
			willEnter: false,
			didEnter: false,
			willLeave: false,
			didLeave: false
		};
	},

	render: function() {

		var cx = React.addons.classSet;
		var animateClasses = cx({
			'about' : true,
			'view' : true,
			'view-enter': this.state.willEnter,
			'view-enter-active': this.state.didEnter,
			'view-leave': this.state.willLeave,
			'view-leave-active': this.state.didLeave
		});

		return (
		<div className={animateClasses}>
			<h1>About</h1>

			<div className="bio">
				<img src={ImageSrc} />

				<p>Kevin is a full stack developer with 14 years professional experience.   He has built solutions for fortune 50 companies, health care professionals, patients, and consumers.  He began programming for the web and has recently focused on responsive design and developing for the iOS platform. Kevin appreciates great design and enjoys tackling complex interfaces and problems.</p>
			</div>
			<section>

                <h2><strong>Languages</strong> I know:</h2>
                <p>HTML(5), CSS(3), JavaScript, PHP, Objective-C</p>

                <h2><strong>Frameworks</strong> I utilize:</h2>
                <p>ReactJS, Ember, Angular, Backbone, JQuery, Laravel</p>

                <h2><strong>Tools</strong> I use: </h2>
                <p>GIT, SVN, SASS, Compass, NodeJS, Grunt, Gulp, Webpack, Chrome Dev Tools</p>

            </section>

            <section>

                <h2><strong>Companies</strong> I've worked for:</h2>
                <p><a href="http://www.inventivhealth.com" target="_blank">inVentiv Health</a>, <a href="http://www.gsw-w.com" target="_blank">GSW</a>, <a href="http://614mediagroup.com/" target="_blank">614 MediaGroup</a>, <a href="http://www.vsiweb.com/" target="_blank">Vertex Software</a></p>

                <h2><strong>Projects</strong> I'm involved in:</h2>
                <p><a href="http://turnstyle.social" target="_blank">TurnStyle</a>,<a href="http://trafficalarm.co" target="_blank">Traffic Alarm</a></p>

            </section>

            <section className="footnotes">

                <h2>Footnotes</h2>
                <p>View the <a href="https://github.com/duttonkj/portfolio" target="_blank">source</a> for this site on GitHub</p>

            </section>

		</div>
		);
	}
});

module.exports = About;
