
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
								|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());


var Actions = require("../_reflux/Actions.js");

var AnimationHelper = {

	getInitialState: function() {
		return {
			willEnter: false,
			didEnter: false,
			willLeave: false,
			didLeave: false
		};
	},

	componentWillEnter: function( done ) {
		console.log('view will enter');

		var _this = this;
		//requestAnimationFrame(function() {

			_this.setState({
				willEnter: true
			});

	        //requestAnimationFrame(function() {

				
				_this.setState({
					didEnter: true
				});

				setTimeout(function(){
					done();
				},800)

	        //}.bind(this));

	     //}.bind(this));


		//done();
	},
	componentDidEnter: function() {

		console.log('view did enter');


		Actions.viewMounted();
		console.log('view Mounted triggered');

	},
	componentWillLeave: function( done ) {

		console.log('view will leave');
		var _this = this;

		requestAnimationFrame(function() {

			_this.setState({
				willEnter: false,
				didEnter: false,
				willLeave: true
			});

			requestAnimationFrame(function() {

				_this.setState({
					didLeave: true
				});

				done();

			}.bind(this));


		}.bind(this));


	},
	componentDidLeave: function() {
		console.log('view did leave');

		// this.setState({
		// 	willLeave: false
		// });

	}
}

module.exports = AnimationHelper;
