var http = require("http");

// good port
var PORT1 = 7000;

// bad port
var PORT2 = 7500;

function positive(request, response){
	response.end("This is the good one")
};

var niceServer = http

