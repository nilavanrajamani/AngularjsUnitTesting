angular.module('movieCore', ['ngResource'])
       .factory('PopularMovies', function ($resource) {
           return $resource('popular/:movieId', { movieId: '@Id' }, {
               update: {
                   method: 'PUT'
               }
           });
       });