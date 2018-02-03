var http = require("http");

// good port
var PORT1 = 7000;

// bad port
var PORT2 = 7500;

// this will give positive reinforcement
function positive(request, response){
	response.end("This is the good one")
};

var niceServer = http.createServer(positive);

niceServer.listen(PORT1, function(){
	console.log("connected to happy port:"+PORT1)
});


// this will give negative reinforcement

function negative(request, response){
	response.end("This is the bad one")
};

var meanServer = http.createServer(negative);

meanServer.listen(PORT2, function(){
	console.log("connected to unhappy port:"+PORT2)
});

