var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 3000;

//checking if request is http or https
//if not http, then redirect
/*
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http'){
		next();
	}
	else{
		res.redirect('http://' + req.hostname + req.url);
	}
});*/
//tell which folder to serve
app.use(express.static('public')); // app.use -->lets you add functionality to the express application
//express.static('public') --> specifies folder name that is to be exposed to the web server - in this case it is 'public'

//app.listen starts the server
app.listen(PORT, function(){
	console.log('Express server is up on port' + PORT);
});
