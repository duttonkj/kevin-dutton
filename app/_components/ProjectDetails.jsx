/** @jsx React.DOM */
var React = require("react");

var ImageLoader = require('./Image.jsx');

// Include Zepto
//var FitVids = require('../bower_components/fitvids/jquery.fitvids.js');

var ProjectDetails = React.createClass({

    componentDidMount: function(){
        console.log('PROJECT DETAILS MOUNTED');
        console.log('apply fitvids');
        $(this.refs.projectVideos.getDomNode()).fitVids();
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

        console.log('inside images');
        console.log(imageInfo);
          var imageSrc = require('./../_projects/'+_this.props.data.slug+'/'+imageInfo.filename);
          return (
              <ImageLoader src={imageSrc} aspectRatio={imageInfo.ratio} />
          );
        });

        images = ( <div class="project-images">{imageItems}</div> );
    }


    // Videos
    var videos;
    if(this.props.data.videos){
          var videoItems = this.props.data.videos.map(function (video) {

            var videoUrl = "//www.youtube.com/embed/"+video+'?rel=0&showinfo=0&controls=0&autohide=0';
            return (
                <iframe width="420" height="315" src={videoUrl} frameborder="0" allowfullscreen></iframe>
            );
          });

          var videos = ( <div className="project-videos" ref="projectVideos"><h3>Interactions</h3>{videoItems}</div> );
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
    	<div className="project-details">

            <h1>{this.props.data.name}</h1>
    		{desc}
            {images}
            {videos}
            {tools}

    	</div>
    );

    }

});

module.exports = ProjectDetails;
