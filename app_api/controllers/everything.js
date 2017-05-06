
var mongoose = require('mongoose');
var Eveything = mongoose.model('Eveything');
module.exports.addconfig=function (req,res) {
	console.info('this is inside the function addconfig');
	var instance = new Eveything({fieldName:req.body.fieldName,type:req.body.type,form:req.body.form,index:req.body.index});
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

module.exports.getConfig=function (req,res) {
	console.info('this is inside the function getConfig');
//console.log(req);
var vm=this;
	Eveything.find({"form":req.query.form}).sort({"index":1}).exec(function(err,field) {
		vm.fields=field;
		console.log(field);
		res.body=vm.fields;
		res.status(200);
	});
	res.status(200);
	//var instance = new Eveything({fieldName:req.body.fieldName,type:req.body.type,form:req.body.form,index:req.body.index});
	//instance.email=req.body.username;
	//instance.password=req.body.password;
	//console.log(req.body.name);
	
	
	

	
}