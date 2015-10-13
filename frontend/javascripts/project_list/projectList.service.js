var app = require('../app');

app.factory('dataFactory', function ($q,$http) {
    return	{
        getMongoData: getMongoData
    };
    function getMongoData () {
        var deferred = $q.defer(),
            httpPromise = $http.get('/api/projects');

        httpPromise.success(function (projects) {
            deferred.resolve(projects);

        })
            .error(function (error) {
                console.error('Error: ' + error);
            });

        return deferred.promise;
    }
});