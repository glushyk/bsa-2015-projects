module.exports = {
	dbname: 'projects-app',
	uri: 'mongodb://localhost/projects-app',
	mocked_db: false,
	opts: {
		server: { 
			auto_reconnect: true,
			poolSize: 40
		},
		user: 'root'
	}
};