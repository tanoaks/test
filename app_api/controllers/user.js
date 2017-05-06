
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports.addUser=function (req,res) {
	console.info('this is inside the function');
	var instance = new User({email:req.body.name,password:req.body.password});
	//instance.email=req.body.username;
	//instance.password=req.body.password;
	console.log(req.body.name);
	instance.save(function(err) {
		if (err) {
			console.log(err);
		}
		else{
			res.json({'status':'success'});
		}
	});
	res.status(200);

	
}