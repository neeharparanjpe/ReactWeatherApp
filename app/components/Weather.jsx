var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage= require('WeatherMessage');

var Weather = React.createClass({
	getInitialState: function(){
		return{
			location: 'Pune',//default values
			temp: 22
		};
	},
	handleSearch: function(location){
		this.setState({
			location: location,
			temp: 23
		})
	},
	render: function(){
		return(
			<div>
				<h1 className="text-center">Weather</h1>
				<WeatherForm onSearch = {this.handleSearch}/>
				<WeatherMessage location={this.state.location} temp={this.state.temp}/>
			</div>
		);
	}
});

module.exports = Weather;