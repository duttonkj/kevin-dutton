/** @jsx React.DOM */
var React = require("react");

// Project data mixin
var LoadJSONMixin = require("./LoadJSONMixin.js");
var ProjectListItem = require("./ProjectListItem.jsx");



var ProjectList = React.createClass({

	mixins: [LoadJSONMixin],


	getInitialState: function() {
		return {
		  projects: [],
		  loading: true
		};
	},

	componentWillMount: function(){

		this.setState({
			projects: this.loadJSONLocal()
		});

	},


//   componentDidMount: function() {
//
// 	// Fetch JSON project file
//
// 	console.log('load JSON');
//
// 	var _this = this
//
// 	this.loadJSONLocal( function( result ){
//
// 		console.log( 'projects fetched');
// 		console.log( result );
//
// 		if (_this.isMounted()) {
//
// 			_this.setState({
// 				projects: result,
// 				loading:false
// 			});
//
// 		};
//
// 	}, function( error ){
//
// 		console.log( 'Fetched error!');
// 		console.log( error );
//
// 		if (_this.isMounted()) {
//
// 			_this.setState({
// 				projects: result,
// 				loading:false
// 			});
//
// 		};
//
// 	});
//
//
//   },

  render: function() {

	var projectNodes = 'Loading';
	if(this.state.projects.length > 0){
    	projectNodes = this.state.projects.map(function (project) {
	      return (
	          <ProjectListItem name={project.name} images={project.images} slug={project.slug} />
	      );
    	});
	}
    return (
      <div className="project-list">
        {projectNodes}
      </div>
    );


	// return (
	// 	<div>
	// 		<p>Project list goes here</p>
	// 	</div>
	// )


  }

});

module.exports = ProjectList;
