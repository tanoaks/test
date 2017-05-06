module.exports.about=function(req, res, next) {
  res.render('generic-text', { title: 'About' });
};

module.exports.addUser=function(req, res, next) {
  console.log('in');
  var vm =this;
 console.log(vm.userModels);
 res.status(200);

};