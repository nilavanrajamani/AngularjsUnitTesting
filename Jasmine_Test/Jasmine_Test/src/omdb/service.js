angular.module('omdb', [])
       .factory('omdbApi', function ($http, $q) {
           var service = {};
           var baseUrl = 'http://www.omdbapi.com/?v=1&';

           function httpPromise(url) {
               var deferred = $q.defer();
               $http.get(url)
                    .success(function (data) {
                        deferred.resolve(data);
                        console.log(data);
                    })
               .error(function () {
                   return deferred.reject();
               });
               return deferred.promise;
           }

           service.search = function (query) {
               console.log('data inside omdbApi.search');
               return httpPromise(baseUrl + "t=" + encodeURIComponent(query));
           };

           service.find = function (id) {
               console.log('data inside omdbApi.search');
               return httpPromise(baseUrl + "i=" + id);
           }
           return service;
       });