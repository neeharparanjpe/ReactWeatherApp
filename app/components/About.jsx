var React = require('react');

var About = React.createClass({
	render: function(){
		return(
			<div>
				<h1 className="text-center">About</h1>
				<p>
					This is a Weather App for the Complete React Web Developer Course on Udemy.
				</p>
				<p>
					Technologies used are:
				</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
					</li>
					<li>
						<a href="https://openweathermap.org">Open Weather Map</a> - Open Weather Map APIs
					</li>
				</ul>
			</div>
		);
	}
});

{/*
//stateless 
var About = (props) =>{
		return(
			<h3>About Component</h3>
		);
}
*/}


module.exports = About;