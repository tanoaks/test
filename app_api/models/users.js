var mongoose=require('mongoose');
var UserSchema = new mongoose.Schema({
	email:{
	type:String,
	unique:true,
	required: true
	},
	password:{
	type:String,
	required:true
	},
	hash:String,
	salt:String

});
var MyUser =mongoose.model('User',UserSchema);
