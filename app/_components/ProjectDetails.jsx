/** @jsx React.DOM */
var React = require("react");

var ImageLoader = require('./Image.jsx');
var VideoPlayer = require('./VideoPlayer.jsx');

// Include Zepto
//var FitVids = require('../bower_components/fitvids/jquery.fitvids.js');

var ProjectDetails = React.createClass({

    // States for video player
    getInitialState: function() {
        return {
            showPlayer: false,
            videoId: '8ZXWdR7RzV8',
            videoAutoPlay: false
        }
    },

    componentDidMount: function(){
        console.log('PROJECT DETAILS MOUNTED');
        //$(this.refs.projectVideos.getDomNode()).fitVids();
    },

    // Show Video Player
    handleVideoClick: function ( videoId ) {

        event.preventDefault();
        event.stopPropagation();

        this.setState({
			showPlayer: true,
            videoId: videoId,
            videoAutoPlay: true
		});

    },

    // Close video player if open
    handleBgClick: function () {


        console.log('bg click')
        console.log( 'state: %s', this.state.showPlayer)
        if( this.state.showPlayer ) {
            this.setState({
                showPlayer: false
            });
        }

    },

    render: function() {

        var _this = this;

        // Desc
        var desc;
        if(this.props.data.desc){
              desc = (<p>{this.props.data.desc}</p>);
        }

        // Images
        var images;
        if(this.props.data.images){

            var imageItems = this.props.data.images.map(function (imageInfo) {

            var imageSrc = require('./../_projects/'+_this.props.data.slug+'/'+imageInfo.filename);
              return (
                  <ImageLoader src={imageSrc} aspectRatio={imageInfo.ratio} />
              );
            });

            images = ( <div className="project-images">{imageItems}</div> );

        }


        // Videos
        var videos;
        if(this.props.data.videos){

            var _this = this;

              var videoLinks = this.props.data.videos.map(function (video) {

                return ( <a className="btn project-video-link" onClick={_this.handleVideoClick.bind(null,video.id)} href="#" data-youtube="{video.id}">{video.caption}</a> );

              });

              var videos = ( <div className="project-videos" ref="projectVideos">{videoLinks}</div> );
        }

        // Tools
        var tools;
        if(this.props.data.tools){
              var toolItems = this.props.data.tools.map(function (tool) {
                return (
                    <li>{tool}</li>
                );
              });

              var tools = ( <div className="project-tools"><h3>Frameworks/Tools</h3><ul>{toolItems}</ul></div> );
        }

        return (
        	<div className="project-details" onClick={this.handleBgClick}>

                {images}

                <div className="project-summary">
                    <h1>{this.props.data.name}</h1>
                    {desc}
                    {videos}
                    {tools}
                </div>

                
                
                <VideoPlayer showPlayer={this.state.showPlayer} videoId={this.state.videoId} autoplay={this.state.videoAutoPlay} />

        	</div>
        );

    }

});

module.exports = ProjectDetails;
