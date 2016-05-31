angular.module('pokedexService', [])

    // super simple service
    // each function returns a promise object
    .factory('pokedex', ['$http', function ($http) {
        return {
            get: function () {
                return $http.get('http://pokeapi.co/api/v1/pokedex/1/');
            }
        }
    }]);