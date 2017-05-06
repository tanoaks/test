var mongoose = require('mongoose');
var Schema= mongoose.Schema;
module.exports.mongoose= mongoose;
module.exports.Schema=Schema;
var address='mongodb://localhost:27017/jade2';
var readLine=  require('readline');
connect();
var gracefulShutdown;
gracefulShutdown=function(msg,callback){
    console.log('add new ');
mongoose.connection.close(function() {

    console.log(msg+'this msg is recive');
	console.log('mongoose disconnected')
	callback();
});

};

/*if (process.platform==="win32") {
	var r1=readLine.createInterface({
		input:process.stdin,
		output:process.stdout
	});
	r1.on("SIGINT"function() {
		process.emit("SIGINT");
	})
}*/


process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app termination', function() {
        process.exit(0);
    });
});

function connect() {
    console.log('done connection enjoy');
	mongoose.connect(address);
	
}
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + address);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});


///function disconnet(){mongoose.disconnect()};
require('./users');
require('./everything');