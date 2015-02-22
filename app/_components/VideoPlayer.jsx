/** @jsx React.DOM */
var React = require('react')
var DetectTransitionEnd = require('./DetectTransition');

// Video Player  N
module.exports = React.createClass({

	mixins: [DetectTransitionEnd],

	getInitialState: function() {
		return {
			videoInit: false
		};
	},

	componentDidMount: function() {

		var _this = this;


		var transitionEvent = this.whichTransitionEvent();
		transitionEvent && this.getDOMNode().addEventListener(transitionEvent, function() {
			console.log('Transition complete!  This is the callback, no library needed!');
			_this.setState({
				videoInit: true
			});
		});

	},


	render: function() {

		var cx = React.addons.classSet;
		var classes = cx({
			'project-video-player': true,
			'active': this.props.showPlayer
		});


		console.log('renderVideo: %s', this.props.videoId);

		var videoUrl = "//www.youtube.com/embed/"+this.props.videoId+'?rel=0&showinfo=0&controls=0&autohide=0&enablejsapi=1';

		// Should we autoplay
		if( this.props.autoplay ){
			videoUrl += '&autoplay=1';
		}

		var youTubeEmbed = '';
		if(this.state.videoInit){
			youTubeEmbed = ( <iframe src={videoUrl} frameborder="0" allowfullscreen></iframe> );
		}

		return (

			<div className={classes}>
				<a href="#" className="done btn">Done</a>
				<div className="video-wrapper">
					<div id="project-video-player" className="embed-container">
						{youTubeEmbed}
					</div>
				</div>
			</div>

		);

	}

});
