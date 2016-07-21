var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
	render: function() {
		return(
			<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
						{this.props.children} {/*this is where the child components will get rendered*/}
					</div>
				</div>
				{/*<h2>Main Component</h2>*/}
			</div>
		);
	}
});

module.exports = Main;