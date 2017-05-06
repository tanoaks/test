

module.exports=function(server){
	var vm =this;
	var io =require('socket.io').listen(server);
	vm.io=io;

return io;

}