
var _ = require('./../bower_components/underscore/underscore-min.js');

var LoadJSONMixin = {

	loadJSONLocal: function()
	{

		var projectData = require( './../_projects/projectData.json' );
		console.log('Project data loaded');
		//success( projectData );
		return projectData;

	},

	loadProject: function( searchSlug ){

		console.log('load Project: %s', searchSlug);
		console.log(searchSlug);

		return _.findWhere( this.loadJSONLocal(), { slug: searchSlug });

	}

}

module.exports = LoadJSONMixin;
