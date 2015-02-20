/** @jsx React.DOM */
var React = require("react");

var ImageLoader = require('./Image.jsx');
var VideoPlayer = require('./VideoPlayer.jsx');

var Actions = require("../_reflux/Actions.js");


// Include Zepto
//var FitVids = require('../bower_components/fitvids/jquery.fitvids.js');

var ProjectDetails = React.createClass({

    // States for video player
    getInitialState: function() {
        return {
            showPlayer: false,
            videoId: '0',
            videoAutoPlay: false
        }
    },

    componentDidMount: function(){
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


        //alert('call close button');
        Actions.viewMounted();

    },


    handleBgClick: function () {

        // Close video player if open

        console.log('bg click')
        console.log( 'state: %s', this.state.showPlayer)
        if( this.state.showPlayer ) {
            this.setState({
                showPlayer: false
            });
        }

        this.pauseVideo();

        //Actions.closeButtonHide();

    },

    pauseVideo: function (state) {
        var div = document.getElementById("project-video-player");
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    },

    render: function() {

        var _this = this;

        var cx = React.addons.classSet;
        var classes = cx({
            'project-details': true,
            'blur': this.state.showPlayer
        });

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

            var btnClasses = 'btn project-video-link';

               btnClasses += (this.props.data.videos.length < 2 ) ? ' single' : ' multiple';

              var videoLinks = this.props.data.videos.map(function (video) {


                return ( <a className={btnClasses} onClick={_this.handleVideoClick.bind(null,video.id)} href="#" data-youtube="{video.id}">{video.caption}</a> );

              });

              var videos = ( <div className="project-videos" ref="projectVideos"><h3>Video Experience</h3>{videoLinks}</div> );
        }

        // Tools
        var tools;
        if(this.props.data.tools){
              var toolItems = this.props.data.tools.map(function (tool) {
                return (
                    <li>{tool}</li>
                );
              });

              var tools = ( <div className="project-tools"><ul>{toolItems}</ul></div> );
        }

        // Site Link
        var projectLink;
        if(this.props.data.link){

            var link = this.props.data.link;
            var projectLink = ( <div className="project-link"><a className="btn project-link-btn" href={link} target="_blank">Visit Site</a></div> );

        }

        return (
        	<div className={classes} onClick={this.handleBgClick}>

                <div className="project-blur">
                    {images}

                    <div className="project-summary">
                        <h1>{this.props.data.name}</h1>
                        {desc}
                        {tools}
                        {videos}
                        {projectLink}
                    </div>
                </div>


                <VideoPlayer showPlayer={this.state.showPlayer} videoId={this.state.videoId} autoplay={this.state.videoAutoPlay} />

        	</div>
        );

    }

});

module.exports = ProjectDetails;
