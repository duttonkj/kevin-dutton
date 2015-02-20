/** @jsx React.DOM */
var React = require("react");

// Router
var Router = require('react-router');
var Link = Router.Link;

var ImageLoader = require('./Image.jsx');


var ProjectListItem = React.createClass({

  render: function() {

      var _this = this;

      // Images
      var images;
      if(this.props.images){

          var imageItems = this.props.images.map(function (imageInfo) {

              var imageSrc = require('./../_projects/'+_this.props.slug+'/'+imageInfo.filename);
              return (
                  <ImageLoader src={imageSrc} aspectRatio={imageInfo.ratio} />
              );
          });

          images = ( <div className="project-list-image">{imageItems}</div> );

      }


	return (

        <div className="project-list-item">
            {images}

			<Link to="project" className="btn" params={{projectSlug: this.props.slug}}>{this.props.name}</Link>

		</div>

    );





  }

});

module.exports = ProjectListItem;
