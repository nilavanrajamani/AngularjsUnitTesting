describe('omdb service', function () {
    var movieData = { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.7/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.7", "imdbVotes": "963,318", "imdbID": "tt0076759", "Type": "movie", "DVD": "21 Sep 2004", "BoxOffice": "N/A", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-iv/", "Response": "True" };

    var movieDataById = { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.7/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.7", "imdbVotes": "963,318", "imdbID": "tt0076759", "Type": "movie", "DVD": "21 Sep 2004", "BoxOffice": "N/A", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-iv/", "Response": "True" };

    var omdbApi = {};
    var $httpBackend;

    beforeEach(angular.mock.module('omdb'));
    beforeEach(angular.mock.inject(function (_omdbApi_, _$httpBackend_) {
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return search movie data', function () {
        //angular.mock.module({
        //    'omdbApi': {
        //        search: function (query) {
        //            return movieData;
        //        }
        //    }
        //});

        //angular.mock.module(function ($provide) {
        //    $provide.factory('omdbApi', function () {
        //        return {
        //            search: function (query) {
        //                return movieData;
        //            }
        //        }
        //    });
        //});

        console.log(movieData);
        console.log(angular.mock.dump(movieData));

        var response;
        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&t=star%20wars')
                    .respond('200', movieData);

        omdbApi.search('star wars')
               .then(function (data) {
                   response = data;
               });

        $httpBackend.flush();

        expect(response).toEqual(movieData);

    });

    it('should return movie data by id', function () {
        expect(omdbApi.find('tt0076759')).toEqual(movieDataById);
    });
});