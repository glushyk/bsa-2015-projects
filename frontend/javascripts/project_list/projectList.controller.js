var app = require('../app');

app.controller('ProjectListController', ProjectListController);

ProjectListController.$inject = ['dataFactory'];

function ProjectListController(dataFactory) {
    vm =this;
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
}




