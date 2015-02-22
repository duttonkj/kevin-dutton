


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


		// trigger view to reset scroll position
		Actions.viewMounted();

		var _this = this;

			_this.setState({
				willEnter: true
			});

			_this.setState({
				didEnter: true
			});

			setTimeout(function(){
				done();
			},800)


	},
	componentDidEnter: function() {

		Actions.viewMounted();

	},
	componentWillLeave: function( done ) {

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

		// this.setState({
		// 	willLeave: false
		// });

	}
}

module.exports = AnimationHelper;
