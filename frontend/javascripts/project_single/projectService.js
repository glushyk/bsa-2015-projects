var app = require('../app');

app.service('ProjectService', ProjectService);

ProjectService.$inject = [];

function ProjectService() {
	var self = this;
	
	return self;

}