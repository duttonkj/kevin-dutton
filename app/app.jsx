
//// App setup // //////

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var App = React.createClass({
  render: function() {
    return (
    <div>
		<Header />
		<div className="viewport">
			<ReactCSSTransitionGroup transitionName="example" component={React.DOM.div}>
	          {this.props.activeRouteHandler()}
	        </ReactCSSTransitionGroup>
		</div>
	</div>
    );
  }
});

var routes = (
  <Routes>
    <Route handler={App}>
		<Route name="about" path="about" handler={About}/>
		<Route name="work" path="work" handler={Work}/>
		<Route name="contact" path="contact" handler={Contact}/>
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('app'));
