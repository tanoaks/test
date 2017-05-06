
/* GET 'home' page */
module.exports.homeList=function(req, res, next) {
 console.log(`inside ${process.pid} started`);
  res.render('location-list', { title: 'Home' });
};
/*  GET 'Location info' page */
module.exports.locationInfo=function(req, res, next) {
	var jobj=new Object();
	jobj.name=[new Object()];
	///JSON.parse(jobj);
	console.log(jobj);
  res.render('location-info', 	{ title: 'Location info' });
};

module.exports.addReview=function(req,res,next) {
	res.render('location-review-form',{title:'Add review'});};
