var webpack = require('webpack');

module.exports = {
	//properties
	//entry property tells webpack where it should start processing the code. in this case entry is ./public/app.js
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals:{
			jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			//key value pairs
			//key is the variable name to watch for. value is the module to replace it with
			'$':'jquery',
			'jQuery':'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx'
		},
		//this array is list of file extensions that are to be processed
		extensions: ['','.js','.jsx'] 
	},
	module: {
		loaders: [
			{
				//telling the babel-loader to take the input, parse it throught react, get the output and then run them through es2015
				loader: 'babel-loader', //loader name
				//pass some data into babel-loader telling it what to do with the files
				query:{
					presets: ['react', 'es2015']
				},
				test:/\.jsx?$/, //specify which files to get
				exclude: /(node_modules|bower_components)/ //ignore these folders
			}
		]
	}
};