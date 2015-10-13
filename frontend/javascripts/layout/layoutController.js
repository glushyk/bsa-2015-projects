var app = require('../app');

app.controller('LayoutController', LayoutController);

function LayoutController(dataFactory) {
	var vm = this;
	/*vm.mongoData = dataFactory.query(function(){
		console.log(vm.mongoData);
	});*/
	vm.mongoData = {};
	vm.getMongoData = getMongoData;
	activate();
	function activate(){
		return getMongoData().then(function() {
			console.log(vm.mongoData);
		});
	}
	function getMongoData(){
		return dataFactory.getMongoData().then(function(data){
			vm.mongoData = data;
			return vm.mongoData;

		});
	}

	console.log(vm.mongoData);
}