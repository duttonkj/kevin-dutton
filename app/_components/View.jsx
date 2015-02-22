/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({

	render: function() {

		var cx = React.addons.classSet;
		var animateClasses = cx({
			'view' : true,
			'view-enter': this.props.willEnter,
			'view-enter-active': this.props.didEnter,
			'view-leave': this.props.willLeave,
			'view-leave-active': this.props.didLeave
		});

		return (
		<div className={this.props.classRoute+' '+animateClasses}>
			{this.props.children}
		</div>
		);
	}
});
