/** @jsx React.DOM */
var React = require('react')

// Video Player  N
module.exports = React.createClass({


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

		return (

			<div className={classes}>
				<a href="#" className="done btn">Done</a>
				<div className="video-wrapper">
					<div id="project-video-player" className='embed-container'>
						<iframe src={videoUrl} frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>

		);

	}

});
