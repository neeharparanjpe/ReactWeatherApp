var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // same as var Route = require('react-router').Route.
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//router tag made available because of the require above
ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path="/" component={Main}> //render the main component
		//render the child components of main component
			<Route path="about" component = {About}/> //if the route is '/about', about component will get rendered. if the route is only '/', the weather component will get rendered.
			<Route path="examples" component = {Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);