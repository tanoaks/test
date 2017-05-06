var mongoose=require('mongoose');
var everything = new mongoose.Schema({
	fieldName:{
	type:String,
	unique:true,
	required: true
	},
	type:{
	type:String,
	required:true
	},
	form:{
		type:String,
	required: true
	},
	index:{
		type:Number,
	required: true
	}
});
var MyUser =mongoose.model('Eveything',everything);
